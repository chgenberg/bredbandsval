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

// Generate follow-up responses for user questions
export async function generateFollowUpAnswer(params: {
  question: string;
  recommendations: any[];
  userProfile: any;
  conversationContext?: string;
}): Promise<string> {
  const { question, recommendations, userProfile, conversationContext } = params;
  
  const systemPrompt = `Du är en expert på bredband och TV-paket i Sverige. Svara på användarens fråga baserat på:
1. Deras profil och behov
2. De rekommendationer de fått
3. Aktuell marknadsinformation

VIKTIGT:
- Svara ALLTID på svenska
- Använd HTML-formatering (<p>, <strong>, <br/>, <ul>, <li>)
- Håll svaret kort och relevant (max 3-4 stycken)
- Var specifik och använd leverantörsnamn när relevant
- Ge praktiska råd och tips`;

  const userContext = `
ANVÄNDARPROFIL:
- Hushåll: ${userProfile.householdSize || 'ej angivet'} personer
- Användning: ${userProfile.streamingLevel || 'normal'} streaming, ${userProfile.onlineGaming ? 'spelar online' : 'spelar inte online'}
- Hemarbete: ${userProfile.workFromHome ? 'Ja' : 'Nej'}
- Nuvarande behov: ${userProfile.serviceType === 'both' ? 'Bredband & TV' : userProfile.serviceType || 'bredband'}

TOPP 3 REKOMMENDATIONER:
${recommendations.slice(0, 3).map((rec, i) => 
  `${i + 1}. ${rec.package.providerName} - ${rec.package.speed.download} Mbit/s - ${rec.package.pricing.monthly} kr/mån
   Badges: ${rec.badges?.join(', ') || 'inga'}
   Förtroendepoäng: ${rec.trustScore || 70}/100`
).join('\n')}`;

  const prompt = `${userContext}
  
ANVÄNDARENS FRÅGA: ${question}

${conversationContext ? `TIDIGARE KONVERSATION:\n${conversationContext}\n` : ''}

Ge ett hjälpsamt, informativt svar som:
1. Svarar direkt på frågan
2. Refererar till specifika leverantörer/paket när relevant
3. Ger konkreta råd baserat på användarens situation
4. Avslutar med en följdfråga eller uppmuntran om lämpligt`;

  try {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      max_tokens: 400,
      temperature: 0.7
    });

    const response = completion.choices[0].message.content || 
      '<p>Jag förstår din fråga. Baserat på dina behov och våra rekommendationer kan jag säga att de valda alternativen passar dig bra.</p>';
    
    return ensureHtmlParagraphs(response);
  } catch (error) {
    console.error('Error generating follow-up answer:', error);
    
    // Fallback to pattern-based responses
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('varför inte') && (lowerQ.includes('telia') || lowerQ.includes('bahnhof') || lowerQ.includes('comhem'))) {
      const provider = lowerQ.includes('telia') ? 'Telia' : lowerQ.includes('bahnhof') ? 'Bahnhof' : 'Comhem';
      return `<p><strong>${provider} jämfört med dina val:</strong></p>
<p>${provider} är en solid leverantör, men ${recommendations[0]?.package.providerName} fick högre poäng för dig eftersom:</p>
<ul>
<li>${recommendations[0]?.badges?.includes('Bäst värde') ? 'Bättre pris per Mbit' : 'Bättre hastighetsalternativ'}</li>
<li>${recommendations[0]?.package.contractLength === 0 ? 'Ingen bindningstid' : 'Flexiblare villkor'}</li>
<li>${recommendations[0]?.badges?.includes('Router ingår') ? 'Router ingår i priset' : 'Bättre totalpaket'}</li>
</ul>`;
    }
    
    if (lowerQ.includes('flytta') || lowerQ.includes('flyttar')) {
      return `<p><strong>Vid flytt:</strong></p>
<p>De flesta leverantörer erbjuder kostnadsfri flytt om tjänsten finns på nya adressen. ${recommendations[0]?.package.providerName} har vanligtvis bra flyttvillkor.</p>
<p>Tips: Meddela leverantören minst 30 dagar innan flytt för smidigast process.</p>`;
    }
    
    return '<p>Tack för din fråga! Våra rekommendationer är baserade på dina specifika behov och den senaste marknadsinformationen.</p>';
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

DETALJERAD ANVÄNDARPROFIL:
- Adress: ${userProfile.address || 'ej angiven'}
- Servicetyp: ${serviceType === 'broadband' ? 'Endast bredband' : serviceType === 'tv' ? 'Endast TV' : 'Både bredband och TV'}
- Hushållsstorlek: ${userProfile.householdSize || '1'} personer
- Streaming-användning: ${
  userProfile.streamingLevel === 'heavy' ? 'Mycket (varje dag, flera tjänster)' :
  userProfile.streamingLevel === 'moderate' ? 'Måttlig (några gånger i veckan)' :
  userProfile.streamingLevel === 'light' ? 'Lite (sällan eller aldrig)' : 'Okänt'
}
- Online gaming: ${userProfile.onlineGaming ? 'Ja, spelar ofta online' : 'Nej, spelar inte online'}
- Videomöten: ${
  userProfile.workFromHome ? 'Ja, dagligen (jobbar hemifrån)' :
  userProfile.videoMeetings ? 'Ja, ibland' : 'Nej'
}
- Router-behov: ${userProfile.includeRouter ? 'Vill ha router från leverantören' : 'Har redan router'}
- Bindningstid-preferens: ${
  userProfile.contractPreference === 'none' ? 'Ingen bindning (flexibilitet viktigast)' :
  userProfile.contractPreference === 'short' ? '3-6 månader (kort bindning)' :
  userProfile.contractPreference === 'long' ? 'Längre bindning för bättre pris' :
  'Ingen preferens'
}
${userProfile.tvPreference ? `- TV-intressen: ${
  userProfile.tvPreference === 'sports' ? 'Sport (fotboll, hockey, etc)' :
  userProfile.tvPreference === 'entertainment' ? 'Film & serier' :
  userProfile.tvPreference === 'news' ? 'Nyheter & dokumentärer' :
  userProfile.tvPreference === 'all' ? 'Allt (sport, film, nyheter)' : userProfile.tvPreference
}` : ''}
${userProfile.streamingServices ? `- Använder streamingtjänster: ${userProfile.streamingServices.replace(/,/g, ', ')}` : ''}
${userProfile.speedTestResult ? `- Nuvarande hastighet: ${userProfile.speedTestResult.downloadMbps} Mbit/s ned, ${userProfile.speedTestResult.uploadMbps} Mbit/s upp` : ''}
${userProfile.budget ? `- Budget: ${
  userProfile.budget === 'low' ? 'Under 400 kr/mån (priset är viktigt)' :
  userProfile.budget === 'medium' ? '400-600 kr/mån (balanserat)' :
  userProfile.budget === 'high' ? '600-800 kr/mån (kan satsa mer för bättre kvalitet)' :
  userProfile.budget === 'premium' ? 'Över 800 kr/mån (vill ha det bästa)' : userProfile.budget
}` : ''}
${userProfile.currentProvider ? `- Nuvarande situation: ${
  userProfile.currentProvider === 'cheap' ? 'Har bredband, betalar under 300 kr' :
  userProfile.currentProvider === 'medium' ? 'Har bredband, betalar 300-500 kr' :
  userProfile.currentProvider === 'expensive' ? 'Har bredband, betalar över 500 kr (kan spara mycket!)' :
  userProfile.currentProvider === 'first-time' ? 'Första gången som skaffar bredband' : userProfile.currentProvider
}` : ''}
${userProfile.priorities ? `- Prioriteringar: ${userProfile.priorities.replace(/,/g, ', ').replace(/price/g, 'Lägsta pris').replace(/speed/g, 'Högsta hastighet').replace(/support/g, 'Bästa supporten').replace(/flexibility/g, 'Ingen bindning').replace(/convenience/g, 'Allt-i-ett-lösning')}` : ''}

TOPP 3 REKOMMENDATIONER MED DETALJER:
${recommendations.slice(0, 3).map((rec, i) => {
  const pkg = rec.package;
  const price = pkg.pricing.campaign?.monthlyPrice || pkg.pricing.monthly;
  const campaignInfo = pkg.pricing.campaign ? ` (kampanj: ${pkg.pricing.campaign.description})` : '';
  const bindingInfo = pkg.contract?.bindingPeriod === 0 ? 'Ingen bindning' : `${pkg.contract?.bindingPeriod} mån bindning`;
  const routerInfo = pkg.includes?.router ? 'Router ingår' : 'Router ingår ej';
  const comboInfo = pkg.isCombo ? ` | KOMBINATION: ${pkg.comboDetails?.broadbandProvider} bredband + ${pkg.comboDetails?.tvProvider} TV (sparar ${pkg.comboDetails?.savings}kr/mån)` : '';
  const badges = rec.badges ? ` | Badges: ${rec.badges.join(', ')}` : '';
  const trustInfo = rec.trustScore ? ` | Förtroendepoäng: ${rec.trustScore}/100` : '';
  
  return `${i + 1}. ${pkg.providerName}
   - Paket: ${pkg.name}
   - Hastighet: ${pkg.speed.download}/${pkg.speed.upload} Mbit/s
   - Pris: ${price} kr/mån${campaignInfo}
   - Bindning: ${bindingInfo}
   - Router: ${routerInfo}
   - Matchpoäng: ${rec.matchScore}/100${badges}${trustInfo}${comboInfo}`;
}).join('\n\n')}

FORMATKRAV:
- Svara i ren HTML (ingen Markdown). Använd <strong> för rubrik och <p> för stycken.
- Struktur baserat på servicetyp:
  
  För BREDBAND:
  <div>
    <p><strong>Min rekommendation för dig</strong></p>
    <p>[Varför just denna leverantör och hastighet passar dina behov]</p>
    <p>[Specifika fördelar: pris, bindning, router, support, teknologi]</p>
    <p>[Alternativ 2-3 med konkreta skillnader och när de kan vara bättre]</p>
  </div>
  
  För BÅDE BREDBAND OCH TV:
  <div>
    <p><strong>Bästa kombinationen för dig</strong></p>
    <p>[Om det är en kombination från samma leverantör ELLER varför olika leverantörer är bättre]</p>
    <p>[Totalkostnad, vad som ingår, fördelar med valet]</p>
    <p>[Alternativa kombinationer och vad som skiljer dem åt]</p>
  </div>

- Var SPECIFIK med leverantörsnamn, priser och tekniska detaljer
- Förklara VARFÖR ett val är bättre (inte bara att det är bra)
- Nämn konkreta besparingar eller fördelar
- Skriv på svenska, personligt och övertygande
- 4-8 meningar totalt, avsluta alltid meningar helt`;

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
      max_tokens: 800,
      temperature: 0.8
    });

    const raw = completion.choices[0].message.content || 
           'Baserat på dina svar har jag hittat de bästa alternativen för dig. Dessa leverantörer erbjuder hastigheter och priser som passar ditt hushåll perfekt.';
    return ensureHtmlParagraphs(raw);
  } catch (error) {
    console.error('Error generating AI recommendation:', error);
    return ensureHtmlParagraphs('Baserat på dina svar har jag hittat de bästa alternativen för dig. Dessa leverantörer erbjuder hastigheter och priser som passar ditt hushåll perfekt.');
  }
}

// Wrap plain text into HTML paragraphs if needed
function ensureHtmlParagraphs(raw: string): string {
  if (!raw) return '';
  // If the string already contains common HTML tags, assume it's formatted
  if (/<\s*(p|strong|div|br|ul|ol|li)\b/i.test(raw)) {
    return raw;
  }
  const trimmed = raw.trim();
  // Prefer double newlines as paragraph separators
  const blocks = trimmed.split(/\n{2,}|\r{2,}/).filter(Boolean);
  if (blocks.length > 1) {
    return blocks
      .map(b => `<p>${b.replace(/\n+/g, '<br/>').trim()}</p>`)
      .join('');
  }
  // Fallback: split by sentence boundaries (simple heuristic for sv)
  const sentences = trimmed.split(/(?<=[.!?])\s+(?=[A-ZÅÄÖ])/);
  if (sentences.length > 1) {
    return sentences.map(s => `<p>${s.trim()}</p>`).join('');
  }
  // Last resort: one paragraph
  return `<p>${trimmed}</p>`;
}
