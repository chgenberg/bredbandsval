import OpenAI from 'openai';
import { UserProfile } from '@/types';
import { bredbandsvalAPI } from '@/lib/api/client';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Only for demo - in production, use server-side API
});

export interface AIResponse {
  message: string;
  intent: 'question' | 'request_info' | 'ready_for_recommendations' | 'clarification' | 'complaint';
  extractedData?: Partial<UserProfile>;
  suggestedActions?: string[];
  confidence: number;
}

export class BredbandsvalAI {
  private conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  
  constructor() {
    // Initialize with system prompt
    this.conversationHistory.push({
      role: 'assistant',
      content: this.getSystemPrompt()
    });
  }

  private getSystemPrompt(): string {
    return `Du är en expert bredbandsrådgivare för Bredbandsval.se - Sveriges ledande jämförelsetjänst för bredband och TV.

DITT UPPDRAG:
- Hjälp användare hitta det perfekta bredbandet och TV-paketet
- Var personlig, vänlig och professionell
- Ställ smarta följdfrågor för att förstå behoven
- Förklara tekniska begrepp på ett enkelt sätt
- Fokusera på värde och besparingar

VIKTIG INFORMATION:
- Bredbandsval jämför 21 leverantörer i Sverige
- Ni är helt oberoende och får provision från leverantörer
- Alltid gratis för kunden
- Hjälper även med uppsägning av gamla abonnemang

LEVERANTÖRER NI JÄMFÖR:
Telia, Comhem, Bahnhof, Boxer, Telenor, Tre, Tele2, Halebop, Fibio, Bredband2, Allt-i-ett, m.fl.

TEKNOLOGIER:
- Fiber (bäst, 100-1000 Mbit/s)
- Kabel-TV (bra, 100-500 Mbit/s) 
- Mobilt bredband (flexibelt, 10-100 Mbit/s)

VIKTIGA FRÅGOR ATT STÄLLA:
1. Adress (för att kolla tillgänglighet)
2. Hushållsstorlek och användning
3. Streaming/gaming behov
4. Budget och bindningstid
5. TV-kanaler och sport

PERSONLIGHET:
- Entusiastisk men inte påträngande
- Förklarar fördelar tydligt
- Använder svenska uttryck och är avslappnad
- Ställ EN fråga i taget
- Var konkret med siffror och besparingar

Svara ALLTID på svenska och håll svaren korta (max 2-3 meningar).`;
  }

  async processMessage(userMessage: string, currentProfile: UserProfile): Promise<AIResponse> {
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage
    });

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // Faster and cheaper than GPT-4
        messages: [
          { role: 'system', content: this.getSystemPrompt() },
          { role: 'assistant', content: `Nuvarande användarinfo: ${JSON.stringify(currentProfile, null, 2)}` },
          ...this.conversationHistory.slice(-10), // Keep last 10 messages for context
        ],
        max_tokens: 300,
        temperature: 0.7,
        functions: [
          {
            name: 'extract_user_data',
            description: 'Extract structured data from user input',
            parameters: {
              type: 'object',
              properties: {
                address: { type: 'string', description: 'User address' },
                householdSize: { type: 'number', description: 'Number of people in household' },
                streamingHeavy: { type: 'boolean', description: 'Heavy streaming usage' },
                onlineGaming: { type: 'boolean', description: 'Online gaming usage' },
                videoMeetings: { type: 'boolean', description: 'Video meetings usage' },
                includeRouter: { type: 'boolean', description: 'Want router included' },
                contractPreference: { type: 'string', enum: ['short', 'long', 'no-preference'] },
                maxBudget: { type: 'number', description: 'Maximum monthly budget' },
                tvChannels: { type: 'array', items: { type: 'string' } },
                streamingServices: { type: 'array', items: { type: 'string' } },
                sports: { type: 'array', items: { type: 'string' } },
              }
            }
          },
          {
            name: 'determine_intent',
            description: 'Determine user intent and next action',
            parameters: {
              type: 'object',
              properties: {
                intent: { 
                  type: 'string', 
                  enum: ['question', 'request_info', 'ready_for_recommendations', 'clarification', 'complaint'] 
                },
                confidence: { type: 'number', minimum: 0, maximum: 1 },
                suggestedActions: { type: 'array', items: { type: 'string' } }
              }
            }
          }
        ],
        function_call: 'auto'
      });

      const response = completion.choices[0].message;
      
      // Add AI response to history
      if (response.content) {
        this.conversationHistory.push({
          role: 'assistant',
          content: response.content
        });
      }

      // Parse function calls if any
      let extractedData: Partial<UserProfile> = {};
      let intent: AIResponse['intent'] = 'question';
      let suggestedActions: string[] = [];
      let confidence = 0.8;

      if (response.function_call) {
        try {
          const functionArgs = JSON.parse(response.function_call.arguments || '{}');
          
          if (response.function_call.name === 'extract_user_data') {
            extractedData = functionArgs;
          } else if (response.function_call.name === 'determine_intent') {
            intent = functionArgs.intent || 'question';
            confidence = functionArgs.confidence || 0.8;
            suggestedActions = functionArgs.suggestedActions || [];
          }
        } catch (error) {
          console.error('Error parsing function call:', error);
        }
      }

      return {
        message: response.content || 'Jag förstod inte riktigt, kan du förtydliga?',
        intent,
        extractedData,
        suggestedActions,
        confidence
      };

    } catch (error) {
      console.error('OpenAI API error:', error);
      return {
        message: 'Ursäkta, jag har lite tekniska problem just nu. Kan du försöka igen?',
        intent: 'clarification',
        confidence: 0.1
      };
    }
  }

  // Generate smart follow-up questions
  async generateFollowUpQuestion(profile: UserProfile): Promise<string> {
    const missingInfo = this.analyzeMissingInfo(profile);
    
    if (missingInfo.length === 0) {
      return 'Perfekt! Nu har jag all info jag behöver. Ska jag visa dina personliga rekommendationer?';
    }

    const prompt = `Baserat på användarens profil: ${JSON.stringify(profile, null, 2)}
    
Saknad information: ${missingInfo.join(', ')}

Generera EN smart följdfråga för att få den viktigaste saknade informationen. 
Var personlig och förklara varför du frågar. Max 2 meningar på svenska.`;

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: this.getSystemPrompt() },
          { role: 'user', content: prompt }
        ],
        max_tokens: 100,
        temperature: 0.8
      });

      return completion.choices[0].message.content || 'Vad mer kan jag hjälpa dig med?';
    } catch (error) {
      console.error('Error generating follow-up:', error);
      return 'Vad mer kan jag hjälpa dig med?';
    }
  }

  // Analyze what information is missing
  private analyzeMissingInfo(profile: UserProfile): string[] {
    const missing: string[] = [];
    
    if (!profile.address) missing.push('address');
    if (!profile.householdSize) missing.push('householdSize');
    if (profile.streamingHeavy === undefined) missing.push('streaming usage');
    if (profile.onlineGaming === undefined) missing.push('gaming usage');
    if (profile.includeRouter === undefined) missing.push('router preference');
    if (!profile.contractPreference) missing.push('contract preference');
    
    return missing;
  }

  // Generate personalized recommendations explanation
  async explainRecommendations(recommendations: any[], profile: UserProfile): Promise<string> {
    const prompt = `Du är bredbandsexpert. Förklara varför dessa rekommendationer passar användaren:

ANVÄNDARPROFIL: ${JSON.stringify(profile, null, 2)}

REKOMMENDATIONER: ${JSON.stringify(recommendations.slice(0, 3), null, 2)}

Skriv en personlig förklaring (max 3 meningar) om varför just dessa paket passar användaren bäst. 
Fokusera på värde och besparingar. På svenska.`;

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: this.getSystemPrompt() },
          { role: 'user', content: prompt }
        ],
        max_tokens: 200,
        temperature: 0.7
      });

      return completion.choices[0].message.content || 'Här är de bästa alternativen för dig!';
    } catch (error) {
      console.error('Error explaining recommendations:', error);
      return 'Här är de bästa alternativen för dig!';
    }
  }

  // Reset conversation
  reset(): void {
    this.conversationHistory = [{
      role: 'assistant',
      content: this.getSystemPrompt()
    }];
  }
}

// Export helper function for generating AI recommendations
export async function generateAIRecommendation(params: {
  userProfile: any;
  recommendations: any[];
  serviceType: 'broadband' | 'tv' | 'both';
}): Promise<string> {
  const { userProfile, recommendations, serviceType } = params;
  
  // Create a service type specific prompt
  const serviceTypeText = serviceType === 'broadband' ? 'bredband' : 
                         serviceType === 'tv' ? 'TV-paket' : 
                         'bredband och TV';
  
  const prompt = `Baserat på användarens svar, generera en personlig rekommendation för ${serviceTypeText}.

ANVÄNDARPROFIL:
- Servicetyp: ${serviceType}
- Hushållsstorlek: ${userProfile.householdSize || 'ej angivet'}
- Streaming: ${userProfile.streamingLevel || userProfile.streamingHeavy ? 'Ja' : 'Nej'}
- Gaming: ${userProfile.onlineGaming ? 'Ja' : 'Nej'}
- Videomöten: ${userProfile.videoMeetings ? 'Ja' : 'Nej'}
- Router behövs: ${userProfile.includeRouter ? 'Ja' : 'Nej'}
- Bindningstid: ${userProfile.contractPreference || 'ej angivet'}
${userProfile.tvPreference ? `- TV-preferens: ${userProfile.tvPreference}` : ''}
${userProfile.streamingServices ? `- Streamingtjänster: ${userProfile.streamingServices}` : ''}

TOPP 3 REKOMMENDATIONER:
${recommendations.slice(0, 3).map((rec, i) => 
  `${i + 1}. ${rec.package.providerName} - ${rec.package.speed.download} Mbit/s - ${rec.package.pricing.campaign?.monthlyPrice || rec.package.pricing.monthly} kr/mån`
).join('\n')}

FORMATKRAV:
- Svara i ren HTML (ingen Markdown). Använd <strong> för rubrik och <p> för stycken.
- Struktur:
  <div>
    <p><strong>Rekommendation</strong></p>
    <p>[Stycke 1: kärnan i valet och varför det passar]</p>
    <p>[Stycke 2: pris/värde, bindning, router, ev. TV/streaming‑fit]</p>
    <p>[Stycke 3: alternativ 2–3 kort motivering, och vad man vinner]</p>
  </div>
- Skriv på svenska, tydligt och koncist. Avsluta alltid meningar – bryt aldrig mitt i en mening.
- Håll 3–6 meningar totalt och undvik upprepningar.`;

  try {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: 'Du är en expert på bredband och TV-paket i Sverige. Ge personliga, tydliga rekommendationer på svenska. Följ FORMATKRAV. Avsluta alltid meningar helt.'
        },
        { role: 'user', content: prompt }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    return completion.choices[0].message.content || 
           'Baserat på dina svar har jag hittat de bästa alternativen för dig. Dessa leverantörer erbjuder hastigheter och priser som passar ditt hushåll perfekt.';
  } catch (error) {
    console.error('Error generating AI recommendation:', error);
    return 'Baserat på dina svar har jag hittat de bästa alternativen för dig. Dessa leverantörer erbjuder hastigheter och priser som passar ditt hushåll perfekt.';
  }
}
