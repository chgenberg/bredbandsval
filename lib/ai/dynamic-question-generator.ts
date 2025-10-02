import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface QuestionContext {
  userProfile: Partial<UserProfile>;
  previousAnswers: QuestionAnswer[];
  questionNumber: number;
  maxQuestions: number;
  serviceType: 'broadband' | 'tv' | 'both';
}

export interface QuestionAnswer {
  question: string;
  answer: string;
  dataField: string;
  timestamp: Date;
}

export interface GeneratedQuestion {
  questionText: string;
  suggestedAnswers: SuggestedAnswer[];
  reasoning: string;
  dataField: string;
  priority: 'critical' | 'high' | 'medium';
  helpText?: string;
}

export interface SuggestedAnswer {
  text: string;
  value: string;
  icon?: string;
}

export interface UserProfile {
  serviceType?: 'broadband' | 'tv' | 'both';
  householdSize?: string;
  budget?: string;
  streamingLevel?: string;
  streamingServices?: string[];
  onlineGaming?: boolean;
  videoMeetings?: boolean;
  workFromHome?: boolean;
  includeRouter?: boolean;
  contractPreference?: string;
  currentProvider?: string;
  currentSpeed?: number;
  priorities?: string;
  tvType?: string;
  tvChannels?: string[];
  address?: string;
  simultaneousDevices?: number;
  peakUsageTime?: string;
}

// ============================================================================
// QUESTION STRATEGY CONFIG
// ============================================================================

export const QUESTION_STRATEGY = {
  // Måste alltid frågas (garanterad data)
  guaranteed: [
    {
      field: 'serviceType',
      question: 'Vad är du intresserad av?',
      answers: [
        { text: 'Bredband', value: 'broadband', icon: 'wifi' },
        { text: 'TV-paket', value: 'tv', icon: 'tv' },
        { text: 'Båda', value: 'both', icon: 'package' }
      ],
      helpText: 'Vi kan hjälpa dig hitta både bredband, TV-paket eller smarta kombinationer.'
    },
    {
      field: 'householdSize',
      question: 'Hur många personer bor i ditt hushåll?',
      answers: [
        { text: 'Bara jag', value: '1', icon: 'user' },
        { text: '2 personer', value: '2', icon: 'users' },
        { text: '3-4 personer', value: '3-4', icon: 'users' },
        { text: '5 eller fler', value: '5+', icon: 'users' }
      ],
      helpText: 'Antalet personer påverkar hur mycket bandbredd som behövs.'
    },
    {
      field: 'budget',
      question: 'Vad är din månatliga budget?',
      answers: [
        { text: 'Under 300 kr', value: '<300', icon: 'dollar-sign' },
        { text: '300-500 kr', value: '300-500', icon: 'dollar-sign' },
        { text: '500-700 kr', value: '500-700', icon: 'dollar-sign' },
        { text: 'Över 700 kr', value: '>700', icon: 'dollar-sign' }
      ],
      helpText: 'Din budget hjälper oss filtrera till de mest relevanta alternativen.'
    }
  ],

  // GPT väljer bland dessa baserat på kontext
  dynamicPool: [
    'streaming',
    'gaming',
    'videoMeetings',
    'workFromHome',
    'router',
    'contract',
    'currentSpeed',
    'priorities',
    'tvChannels',
    'streamingServices',
    'tvType',
    'simultaneousDevices',
    'peakUsageTime'
  ]
};

// ============================================================================
// FALLBACK QUESTIONS
// ============================================================================

export const FALLBACK_QUESTIONS: Record<string, GeneratedQuestion> = {
  streaming: {
    questionText: 'Hur ofta streamar ni film och serier i hemmet?',
    suggestedAnswers: [
      { text: 'Varje dag', value: 'heavy', icon: 'play' },
      { text: 'Några gånger i veckan', value: 'moderate', icon: 'play' },
      { text: 'Sällan eller aldrig', value: 'light', icon: 'play' }
    ],
    reasoning: 'Streaming påverkar bandbreddsbehovet betydligt',
    dataField: 'streamingLevel',
    priority: 'high',
    helpText: 'Streaming i 4K kräver cirka 25 Mbit/s per stream. HD kräver cirka 5-8 Mbit/s.'
  },
  gaming: {
    questionText: 'Spelar någon i hushållet onlinespel?',
    suggestedAnswers: [
      { text: 'Ja, ofta', value: 'yes', icon: 'gamepad' },
      { text: 'Ibland', value: 'sometimes', icon: 'gamepad' },
      { text: 'Nej', value: 'no', icon: 'arrow-right' }
    ],
    reasoning: 'Gaming kräver låg latens för bra upplevelse',
    dataField: 'onlineGaming',
    priority: 'medium',
    helpText: 'Onlinespel kräver låg latens (ping) för bästa upplevelse.'
  },
  videoMeetings: {
    questionText: 'Arbetar någon hemifrån med videomöten?',
    suggestedAnswers: [
      { text: 'Ja, dagligen', value: 'daily', icon: 'video' },
      { text: 'Ibland', value: 'sometimes', icon: 'video' },
      { text: 'Nej', value: 'no', icon: 'arrow-right' }
    ],
    reasoning: 'Hemarbete kräver stabil uppladningshastighet',
    dataField: 'videoMeetings',
    priority: 'high',
    helpText: 'Videomöten kräver stabil uppkoppling, särskilt uppladdning.'
  },
  router: {
    questionText: 'Behöver du en router inkluderad i paketet?',
    suggestedAnswers: [
      { text: 'Ja, saknar router', value: 'yes', icon: 'wifi' },
      { text: 'Har redan en bra router', value: 'no', icon: 'check' },
      { text: 'Osäker', value: 'maybe', icon: 'help-circle' }
    ],
    reasoning: 'Router kan påverka totalpriset och installation',
    dataField: 'includeRouter',
    priority: 'medium',
    helpText: 'En bra router ingår ofta i paketet eller kan hyras för 50-100 kr/mån.'
  },
  contract: {
    questionText: 'Vad föredrar du när det gäller bindningstid?',
    suggestedAnswers: [
      { text: 'Ingen bindning', value: 'none', icon: 'unlock' },
      { text: 'Kort bindning (3-6 mån)', value: 'short', icon: 'clock' },
      { text: 'Längre bindning för lägre pris', value: 'long', icon: 'calendar' },
      { text: 'Spelar ingen roll', value: 'any', icon: 'arrow-right' }
    ],
    reasoning: 'Bindningstid påverkar pris och flexibilitet',
    dataField: 'contractPreference',
    priority: 'medium',
    helpText: 'Längre bindning ger ofta lägre pris, men mindre flexibilitet.'
  },
  priorities: {
    questionText: 'Vad är viktigast för dig?',
    suggestedAnswers: [
      { text: 'Lägsta pris', value: 'price', icon: 'dollar-sign' },
      { text: 'Högsta hastighet', value: 'speed', icon: 'zap' },
      { text: 'Bästa kundservice', value: 'service', icon: 'headphones' },
      { text: 'Balans mellan alla', value: 'balanced', icon: 'scale' }
    ],
    reasoning: 'Prioriteringar styr viktning av rekommendationer',
    dataField: 'priorities',
    priority: 'high',
    helpText: 'Detta hjälper oss vikta rekommendationerna efter vad som är viktigast för dig.'
  }
};

// ============================================================================
// MAIN DYNAMIC QUESTION GENERATOR
// ============================================================================

export class DynamicQuestionGenerator {
  private static instance: DynamicQuestionGenerator;
  private questionCache: Map<string, GeneratedQuestion> = new Map();

  private constructor() {}

  static getInstance(): DynamicQuestionGenerator {
    if (!DynamicQuestionGenerator.instance) {
      DynamicQuestionGenerator.instance = new DynamicQuestionGenerator();
    }
    return DynamicQuestionGenerator.instance;
  }

  /**
   * Huvudmetod: Generera nästa fråga baserat på kontext
   */
  async generateNextQuestion(context: QuestionContext): Promise<GeneratedQuestion> {
    try {
      // 1. Kolla om vi behöver en garanterad fråga först
      const guaranteedQ = this.getNextGuaranteedQuestion(context);
      if (guaranteedQ) {
        return guaranteedQ;
      }

      // 2. Identifiera vilka datapunkter som saknas
      const missingData = this.identifyMissingData(context);

      // 3. Om vi är nära slutet, prioritera kritiska frågor
      if (context.questionNumber >= context.maxQuestions - 2) {
        const criticalQ = this.getCriticalMissingQuestion(missingData, context);
        if (criticalQ) return criticalQ;
      }

      // 4. Generera intelligent fråga med GPT
      const dynamicQ = await this.generateDynamicQuestion(context, missingData);
      
      // 5. Validera och använd fallback vid behov
      return this.validateAndReturnQuestion(dynamicQ, context);

    } catch (error) {
      console.error('Error generating question:', error);
      return this.getFallbackQuestion(context);
    }
  }

  /**
   * Kontrollera om vi behöver ställa en garanterad fråga
   */
  private getNextGuaranteedQuestion(context: QuestionContext): GeneratedQuestion | null {
    for (const guaranteed of QUESTION_STRATEGY.guaranteed) {
      const fieldName = guaranteed.field as keyof UserProfile;
      
      // Kolla om fältet saknas i profilen
      const missingInProfile = !context.userProfile[fieldName];
      
      // Kolla om frågan redan ställts i historiken
      const alreadyAsked = context.previousAnswers.some(
        qa => qa.dataField === guaranteed.field
      );
      
      // Om fältet saknas OCH inte redan frågats, ställ frågan
      if (missingInProfile && !alreadyAsked) {
        return {
          questionText: guaranteed.question,
          suggestedAnswers: guaranteed.answers,
          reasoning: `Garanterad fråga: ${guaranteed.field} är kritisk data`,
          dataField: guaranteed.field,
          priority: 'critical',
          helpText: guaranteed.helpText
        };
      }
    }
    return null;
  }

  /**
   * Identifiera vilka datapunkter som saknas
   */
  private identifyMissingData(context: QuestionContext): string[] {
    const missing: string[] = [];
    
    for (const field of QUESTION_STRATEGY.dynamicPool) {
      const missingInProfile = !context.userProfile[field as keyof UserProfile];
      
      // Kolla om frågan redan ställts
      const alreadyAsked = context.previousAnswers.some(
        qa => qa.dataField === field
      );
      
      // Endast inkludera om det saknas OCH inte redan frågats
      if (missingInProfile && !alreadyAsked) {
        missing.push(field);
      }
    }
    
    return missing;
  }

  /**
   * Hämta kritisk saknad fråga (för sista frågorna)
   */
  private getCriticalMissingQuestion(
    missingData: string[],
    context: QuestionContext
  ): GeneratedQuestion | null {
    // Prioritera vissa fält som extra viktiga
    const criticalFields = ['priorities', 'streamingLevel', 'budget'];
    
    for (const field of criticalFields) {
      if (missingData.includes(field) && FALLBACK_QUESTIONS[field]) {
        return FALLBACK_QUESTIONS[field];
      }
    }
    
    return null;
  }

  /**
   * Generera dynamisk fråga med GPT-4o-mini
   */
  private async generateDynamicQuestion(
    context: QuestionContext,
    missingData: string[]
  ): Promise<GeneratedQuestion> {
    const cacheKey = this.getCacheKey(context);
    
    // Kolla cache först
    if (this.questionCache.has(cacheKey)) {
      return this.questionCache.get(cacheKey)!;
    }

    const prompt = this.buildPrompt(context, missingData);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Du är en expert på att ställa relevanta uppföljningsfrågor för en bredbandsjämförelsesajt. 
Din uppgift är att generera den mest användbara nästa frågan baserat på användarens tidigare svar.

VIKTIGA PRINCIPER:
- Bygg på tidigare svar naturligt
- Ställ frågor som ger mest värde för rekommendationer
- Var konversationell och personlig
- Ge 2-4 tydliga svarsalternativ
- Inkludera relevanta ikoner (använd lucide-react namn)

RETURNERA ALLTID GILTIG JSON i detta format:
{
  "questionText": "Din fråga här",
  "suggestedAnswers": [
    {"text": "Svarstext", "value": "value", "icon": "iconnamn"}
  ],
  "reasoning": "Varför denna fråga",
  "dataField": "fältnamn",
  "priority": "high|medium|low",
  "helpText": "Hjälptext som förklarar frågan"
}`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 500
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content from GPT');
    }

    const question = JSON.parse(content) as GeneratedQuestion;
    
    // Cacha för framtida användning
    this.questionCache.set(cacheKey, question);
    
    return question;
  }

  /**
   * Bygg prompt för GPT
   */
  private buildPrompt(context: QuestionContext, missingData: string[]): string {
    const previousAnswersText = context.previousAnswers
      .map(qa => `Q: ${qa.question}\nA: ${qa.answer} (dataField: ${qa.dataField})`)
      .join('\n\n');

    const alreadyAskedFields = context.previousAnswers.map(qa => qa.dataField);

    return `
KONTEXT:
Tjänst: ${context.serviceType}
Fråga: ${context.questionNumber} av ${context.maxQuestions}

TIDIGARE SVAR:
${previousAnswersText || 'Inga tidigare svar än'}

REDAN STÄLLDA DATAFÄLT (ANVÄND INTE DESSA):
${alreadyAskedFields.length > 0 ? alreadyAskedFields.join(', ') : 'Inga än'}

NUVARANDE PROFIL:
${JSON.stringify(context.userProfile, null, 2)}

SAKNADE DATAPUNKTER (välj från dessa):
${missingData.join(', ') || 'Alla viktiga fält är ifyllda'}

TILLGÄNGLIGA DATAFÄLT (använd ett av dessa som dataField):
${missingData.join(', ') || QUESTION_STRATEGY.dynamicPool.join(', ')}

VIKTIGT:
- Välj ENDAST ett dataField från "SAKNADE DATAPUNKTER" listan
- Använd ALDRIG ett dataField från "REDAN STÄLLDA DATAFÄLT"
- Om missingData är tom, välj valfritt tillgängligt fält som inte redan använts

UPPGIFT:
Generera nästa mest relevanta fråga som:
1. Bygger intelligent på tidigare svar
2. Fyller viktiga luckor i profilen
3. Känns naturlig och konversationell
4. Har mellan 2-4 konkreta svarsalternativ med ikoner
5. Använder ett dataField som INTE redan ställts

EXEMPEL PÅ BRA UPPFÖLJNINGAR:

Om användare svarade "3-4 personer":
→ Fråga om familjesammansättning eller samtidig användning
→ {"questionText": "Hur många enheter brukar användas samtidigt på kvällen?", "dataField": "simultaneousDevices"}

Om användare svarade "Streamer varje dag":
→ Fråga om antal streamers eller kvalitet (HD vs 4K)
→ {"questionText": "Streamer ni mest i 4K eller HD?", "dataField": "streamingQuality"}

Om användare svarade "5+ personer" + "Spelar online":
→ Fråga om peak-tider eller fiber-tillgänglighet
→ {"questionText": "När är det mest aktivitet i nätverket?", "dataField": "peakUsageTime"}

RETURNERA JSON NU:`;
  }

  /**
   * Validera frågan och returnera eller använd fallback
   */
  private validateAndReturnQuestion(
    question: GeneratedQuestion,
    context: QuestionContext
  ): GeneratedQuestion {
    // Validera att frågan är vettig
    if (!question.questionText || 
        !question.suggestedAnswers || 
        question.suggestedAnswers.length < 2 ||
        !question.dataField) {
      console.warn('Invalid question generated, using fallback');
      return this.getFallbackQuestion(context);
    }

    // Validera att dataField finns i vår pool
    if (!QUESTION_STRATEGY.dynamicPool.includes(question.dataField)) {
      console.warn('Invalid dataField, using fallback');
      return this.getFallbackQuestion(context);
    }

    // Kontrollera att frågan inte redan ställts
    const alreadyAsked = context.previousAnswers.some(
      qa => qa.dataField === question.dataField
    );
    
    if (alreadyAsked) {
      console.warn(`Question for field '${question.dataField}' already asked, using fallback`);
      return this.getFallbackQuestion(context);
    }

    return question;
  }

  /**
   * Hämta fallback-fråga när AI misslyckas
   */
  private getFallbackQuestion(context: QuestionContext): GeneratedQuestion {
    // Hitta första frågan från fallback som inte är besvarad
    for (const [field, question] of Object.entries(FALLBACK_QUESTIONS)) {
      const missingInProfile = !context.userProfile[field as keyof UserProfile];
      const alreadyAsked = context.previousAnswers.some(qa => qa.dataField === field);
      
      if (missingInProfile && !alreadyAsked) {
        return question;
      }
    }

    // Om alla frågor redan ställts, hitta vilken fråga som helst som inte är besvarad
    const allPossibleFields = [...QUESTION_STRATEGY.dynamicPool];
    for (const field of allPossibleFields) {
      const alreadyAsked = context.previousAnswers.some(qa => qa.dataField === field);
      if (!alreadyAsked && FALLBACK_QUESTIONS[field]) {
        return FALLBACK_QUESTIONS[field];
      }
    }

    // Om verkligen allt misslyckas, returnera priorities-frågan
    return FALLBACK_QUESTIONS.priorities;
  }

  /**
   * Generera cache-nyckel för att undvika duplicerade API-anrop
   */
  private getCacheKey(context: QuestionContext): string {
    const answersHash = context.previousAnswers
      .map(qa => `${qa.dataField}:${qa.answer}`)
      .sort() // Sortera för konsistens
      .join('|');
    const profileKeys = Object.keys(context.userProfile).sort().join(',');
    return `${context.serviceType}-${context.questionNumber}-${answersHash}-${profileKeys}`;
  }

  /**
   * Rensa cache (användbart för testing)
   */
  clearCache(): void {
    this.questionCache.clear();
  }
}

// ============================================================================
// EXPORT SINGLETON INSTANCE
// ============================================================================

export const questionGenerator = DynamicQuestionGenerator.getInstance();

