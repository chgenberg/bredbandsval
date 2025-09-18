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
${recommendations.slice(0, 3).map((rec, i) => {
  const isPair = rec && rec.broadband && rec.tv;
  if (isPair) {
    const bb = rec.broadband || {};
    const tv = rec.tv || {};
    const total = rec.totalPrice ?? 0;
    return `${i + 1}. ${bb.provider || 'Bredband'} + ${tv.provider || 'TV'}\n   ⚡ ${bb.speed || 0} Mbit/s | 💰 ${total} kr/mån\n   📋 BB: ${bb.package || 'Okänt'} | TV: ${tv.package || 'Okänt'}`;
  }
  const pkg = rec?.package || {};
  const price = pkg?.pricing?.campaign?.monthlyPrice ?? pkg?.pricing?.monthly ?? 0;
  const speed = pkg?.speed?.download ?? 0;
  return `${i + 1}. ${pkg?.providerName || 'Okänd'} - ${speed} Mbit/s - ${price} kr/mån\n   Badges: ${rec?.badges?.join(', ') || 'inga'}\n   Förtroendepoäng: ${rec?.trustScore || 70}/100`;
}).join('\n')}`;

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
  
  const prompt = `Du är Valle, Sveriges mest erfarna bredbandsexpert. Skapa en personlig rekommendation för ${serviceTypeText} som ger maximal värde åt kunden.

🎯 DITT UPPDRAG:
Analysera kundens unika situation och ge en rekommendation som:
- Löser deras VERKLIGA problem (inte bara säljer produkter)
- Sparar pengar ELLER ger betydligt mer värde för pengarna
- Förhindrar framtida problem de inte tänkt på
- Ger konkreta, actionable råd

📊 KUNDANALYS - ${userProfile.address || 'Okänd adress'}:

🏠 HUSHÅLLSSITUATION:
${userProfile.householdSize ? `${userProfile.householdSize} personer` : '1 person'} | ${
  userProfile.workFromHome ? '🏠 Hemarbete DAGLIGEN (kritisk uppkoppling)' :
  userProfile.videoMeetings ? '💻 Sporadiska videomöten' : '🚫 Inget hemarbete'
} | ${userProfile.onlineGaming ? '🎮 Gaming (låg latens viktigt)' : '🚫 Inget gaming'}

📱 STREAMING & UNDERHÅLLNING:
${userProfile.streamingLevel === 'heavy' ? '📺 TUNG streaming (4K, flera enheter samtidigt)' :
  userProfile.streamingLevel === 'moderate' ? '📺 Måttlig streaming (HD, några gånger/vecka)' :
  userProfile.streamingLevel === 'light' ? '📺 Lätt streaming (grundkvalitet, sällan)' : '📺 Okänd streamingvana'
}
${userProfile.streamingServices ? `Aktiva tjänster: ${userProfile.streamingServices.replace(/,/g, ', ')}` : ''}
${userProfile.tvPreference ? `TV-fokus: ${
  userProfile.tvPreference === 'sports' ? '⚽ Sport (behöver sportkanaler + låg latens)' :
  userProfile.tvPreference === 'entertainment' ? '🎬 Film & serier' :
  userProfile.tvPreference === 'news' ? '📰 Nyheter & dokumentärer' :
  '📺 Bred TV-konsumtion'
}` : ''}

💰 EKONOMISK SITUATION:
${userProfile.budget ? `Budget: ${
  userProfile.budget === 'low' ? '💸 Under 400kr/mån (pris avgörande)' :
  userProfile.budget === 'medium' ? '💳 400-600kr/mån (balans pris/kvalitet)' :
  userProfile.budget === 'high' ? '💎 600-800kr/mån (kvalitet viktigare)' :
  '🏆 Över 800kr/mån (vill ha det bästa)'
}` : '💰 Budget ej angiven'}
${userProfile.currentProvider ? ` | Betalar idag: ${
  userProfile.currentProvider === 'cheap' ? '✅ Under 300kr (redan bra pris)' :
  userProfile.currentProvider === 'medium' ? '📊 300-500kr (standardnivå)' :
  userProfile.currentProvider === 'expensive' ? '🚨 Över 500kr (STORA besparingsmöjligheter!)' :
  '🆕 Första abonnemanget'
}` : ''}

⚡ TEKNISKA KRAV:
${userProfile.speedTestResult ? `Nuvarande hastighet: ${userProfile.speedTestResult.downloadMbps}/${userProfile.speedTestResult.uploadMbps} Mbit/s (ping: ${userProfile.speedTestResult.ping}ms)` : ''}
${userProfile.calculatedNeeds ? ` | Beräknade behov: ${userProfile.calculatedNeeds.requiredDownloadMbps}/${userProfile.calculatedNeeds.requiredUploadMbps} Mbit/s` : ''}
Router: ${userProfile.includeRouter ? '📦 Vill ha inkluderad' : '✅ Har redan'} | Bindning: ${
  userProfile.contractPreference === 'none' ? '🚫 Ingen bindning (flexibilitet viktigast)' :
  userProfile.contractPreference === 'short' ? '📅 Kort bindning OK' :
  userProfile.contractPreference === 'long' ? '📅 Lång bindning OK för bättre pris' :
  '🤷 Ingen preferens'
}

🏆 PRIORITERINGAR:
${userProfile.priorities ? userProfile.priorities.replace(/,/g, ', ').replace(/price/g, '💰 Lägsta pris').replace(/speed/g, '⚡ Högsta hastighet').replace(/support/g, '🛟 Bästa supporten').replace(/flexibility/g, '🔄 Flexibilitet').replace(/convenience/g, '📦 Allt-i-ett') : 'Ej angivna'}

🎯 TOPP 3 MATCHADE ALTERNATIV:
${recommendations.slice(0, 3).map((rec, i) => {
  const isPair = rec && rec.broadband && rec.tv;
  if (isPair) {
    const bb = rec.broadband || {};
    const tv = rec.tv || {};
    const total = rec.totalPrice ?? 0;
    return `${i + 1}. 🥇 ${bb.provider || 'Bredband'} + ${tv.provider || 'TV'}\n   ⚡ ${bb.speed || 0} Mbit/s | 💰 ${total}kr/mån\n   📋 BB: ${bb.package || 'Okänt'} | TV: ${tv.package || 'Okänt'}`;
  }
  const pkg = rec.package || {};
  const price = pkg?.pricing?.campaign?.monthlyPrice ?? pkg?.pricing?.monthly ?? 0;
  const campaignInfo = pkg?.pricing?.campaign ? ` 🎉${pkg.pricing.campaign.description}` : '';
  const badges = rec?.badges ? ` | 🏆 ${rec.badges.join(', ')}` : '';
  const trustInfo = rec?.trustScore ? ` | ⭐ ${rec.trustScore}/100 kundnöjdhet` : '';
  return `${i + 1}. 🥇 ${pkg?.providerName || 'Okänd'} - ${pkg?.name || ''}
   ⚡ ${(pkg?.speed?.download ?? 0)}/${(pkg?.speed?.upload ?? 0)} Mbit/s | 💰 ${price}kr/mån${campaignInfo}
   📋 ${pkg?.contract?.bindingPeriod === 0 ? 'Ingen bindning' : `${pkg?.contract?.bindingPeriod ?? '-'}mån bindning`} | ${pkg?.includes?.router ? '📦 Router ingår' : '🚫 Router separat'}
   📊 Matchning: ${rec?.matchScore ?? 0}/100${badges}${trustInfo}`;
}).join('\n\n')}

SKAPA PERSONLIG ANALYS:

KRAV:
- Svara ENDAST i HTML-format (INGEN markdown wrapper)
- Börja direkt med <div><p><strong>Rubrik</strong></p><p>Text...</p></div>
- Använd SEPARATA <p>-taggar för varje stycke/mening
- 5-7 meningar i OLIKA stycken för läsbarhet
- Konkreta siffror (pris, hastighet, besparingar)
- För serviceType 'both': rekommendera BÅDE bredband OCH TV
- Vardagligt språk som alla förstår

STRUKTUR FÖR ${serviceTypeText.toUpperCase()}:
${serviceType === 'both' ? `
1. Min rekommendation: "För bredband rekommenderar jag [leverantör] och för TV [leverantör/tjänst]"
2. Varför det passar: "Med er situation som [beskrivning] får ni [konkret fördel för båda]"
3. Totalkostnad: "Tillsammans kostar det [totalpris]kr/mån, vilket sparar [besparing] jämfört med [alternativ]"
4. Bredbandsfördelar: "[Hastighet/router/bindning] för internetdelen"
5. TV-fördelar: "[Kanaler/streaming/sport] för TV-delen"` : `
1. Min rekommendation: "[Leverantör] för [pris]kr/mån passar dig bäst"
2. Varför det passar: "Med din situation som [beskrivning] får du [konkret fördel]"
3. Vad du sparar/får: "[Konkret besparing eller extra värde] jämfört med [alternativ]"
4. Praktiska fördelar: "[Router/bindning/support] som gör det enkelt för dig"
5. Alternativ: "Om du [scenario] kan [annat alternativ] vara bättre"`}

FOKUSERA PÅ:
- Exakta besparingar per år om de betalar för mycket
- Vad de missar med nuvarande hastighet
- Praktiska fördelar i vardagen
- Enkla steg för att komma igång
- Realistiska alternativ för olika behov

UNDVIK:
- Företagsjargong som "värdeproposition", "optimera"
- Tekniska termer utan förklaring
- Säljfraser som "bästa valet"
- Information som redan syns i korten

EXEMPEL PÅ KORREKT FORMATERING:
<div>
<p><strong>Min rekommendation:</strong> Telia för 599kr/mån passar dig bäst.</p>
<p><strong>Varför det passar:</strong> Med ditt hushåll på 3-4 personer som streamar och jobbar hemifrån får du en stabil hastighet som räcker för alla.</p>
<p><strong>Vad du sparar:</strong> Du sparar 400kr per år jämfört med din nuvarande plan.</p>
<p><strong>Praktiska fördelar:</strong> Router ingår och ingen bindningstid ger dig flexibilitet.</p>
<p><strong>Alternativ:</strong> Om du vill ha mer hastighet kan Bahnhof vara bättre.</p>
</div>`;

  console.log('📝 GPT Prompt Length:', prompt.length);
  console.log('📝 GPT Prompt Preview:', prompt.substring(0, 200) + '...');
  console.log('🔑 API Key exists:', !!process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  console.log('🔑 API Key length:', process.env.NEXT_PUBLIC_OPENAI_API_KEY?.length || 0);
  
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
          content: 'Du är Valle, en erfaren bredbandsrådgivare som hjälper människor hitta rätt lösning. Skriv i vardagligt språk utan företagsjargong. Fokusera på praktiska fördelar och vad kunden faktiskt sparar eller får. Använd HTML-format och 5-7 meningar för en utförlig analys.'
        },
        { role: 'user', content: prompt }
      ],
      max_tokens: 1200,
      temperature: 0.7
    });

    const raw = completion.choices[0].message.content;
    console.log('🤖 GPT Raw Response:', raw);
    console.log('🤖 GPT Response Length:', raw?.length || 0);
    
    if (!raw || raw.trim().length === 0) {
      console.warn('⚠️ GPT returned empty response, using fallback');
      return ensureHtmlParagraphs('Baserat på dina svar har jag hittat de bästa alternativen för dig. Dessa leverantörer erbjuder hastigheter och priser som passar ditt hushåll perfekt.');
    }
    
    // Remove ```html wrapper if GPT added it
    let cleanedRaw = raw.trim();
    if (cleanedRaw.startsWith('```html')) {
      cleanedRaw = cleanedRaw.replace(/^```html\s*/, '').replace(/```\s*$/, '').trim();
      console.log('🧹 Removed ```html wrapper from GPT response');
    }
    
    return ensureHtmlParagraphs(cleanedRaw);
  } catch (error: any) {
    console.error('❌ Error generating AI recommendation:', error);
    console.error('❌ Error details:', error.message);
    console.error('❌ Error stack:', error.stack);
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
