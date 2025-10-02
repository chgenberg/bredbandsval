# 🤖 Dynamisk Frågeställning med AI - Implementationsguide

## ✅ IMPLEMENTERAT: Hybridmodell för intelligent frågeställning

Systemet använder nu en **hybridmodell** där garanterade frågor kombineras med AI-genererade uppföljningsfrågor för en mer naturlig och effektiv konversation.

---

## 📊 SYSTEMARKITEKTUR

### **1. HYBRIDMODELLEN**

```
┌─────────────────────────────────────────────────┐
│  FRÅGESTRATEGI (7 frågor totalt)               │
├─────────────────────────────────────────────────┤
│                                                 │
│  Garanterade frågor (alltid):                  │
│  1. serviceType (Bredband/TV/Båda)             │
│  2. householdSize (Antal personer)             │
│  3. budget (Månatlig budget)                   │
│                                                 │
│  Dynamiska frågor (4 st, AI-genererade):       │
│  • streaming, gaming, videoMeetings             │
│  • workFromHome, router, contract               │
│  • priorities, tvChannels, etc.                 │
│                                                 │
│  GPT-4o-mini väljer de 4 mest relevanta        │
│  baserat på tidigare svar                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

### **2. DATAFLÖDE**

```
User väljer tjänst (Bredband/TV/Båda)
↓
User anger adress
↓
[Valfritt: Router-analys eller Speed test]
↓
Dynamic Question Generator startar
↓
Fråga 1: Första garanterade frågan (householdSize)
↓
User svarar → AI analyserar svar
↓
Fråga 2: AI genererar relevant uppföljningsfråga
↓
User svarar → AI analyserar och anpassar nästa fråga
↓
... fortsätter tills 7 frågor besvarats
↓
Generera rekommendationer baserat på komplett profil
```

---

## 🔧 TEKNISK IMPLEMENTATION

### **Huvudkomponenter**

#### 1. **DynamicQuestionGenerator** (`lib/ai/dynamic-question-generator.ts`)

**Ansvar:**
- Generera nästa mest relevanta fråga baserat på kontext
- Garantera att kritiska datapunkter fångas
- Fallback till fördefinierade frågor vid API-fel
- Cacha genererade frågor för bättre prestanda

**Huvudmetod:**
```typescript
async generateNextQuestion(context: QuestionContext): Promise<GeneratedQuestion>
```

**Process:**
1. Kontrollera om garanterad fråga behövs
2. Identifiera saknade datapunkter
3. Generera intelligent fråga med GPT-4o-mini
4. Validera och returnera (eller använd fallback)

#### 2. **AppleStyleAgent** - Uppdaterad

**Nya state-variabler:**
```typescript
const [questionHistory, setQuestionHistory] = useState<QuestionAnswer[]>([]);
const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState<GeneratedQuestion | null>(null);
const MAX_QUESTIONS = 7;
```

**Uppdaterade funktioner:**
- `askNextQuestion()` - Nu parameterlös, genererar dynamiskt
- `processAnswer()` - Sparar svar till historik och triggar nästa fråga

---

## 🎯 FRÅGESTRATEGI

### **Garanterade frågor (måste alltid fångas)**

1. **serviceType** - Vad användaren är intresserad av
   - Bredband / TV / Båda
   
2. **householdSize** - Antal personer i hushållet
   - 1, 2, 3-4, 5+
   
3. **budget** - Månatlig budget
   - <300 kr, 300-500 kr, 500-700 kr, >700 kr

### **Dynamiska frågor (GPT väljer 4 av dessa)**

- `streaming` - Streamingvanor
- `gaming` - Onlinespel
- `videoMeetings` - Hemarbete med videomöten
- `workFromHome` - Arbetar hemifrån
- `router` - Behov av router
- `contract` - Bindningstid preferens
- `priorities` - Vad som är viktigast
- `currentSpeed` - Nuvarande hastighet
- `tvChannels` - TV-kanaler (för TV-tjänst)
- `streamingServices` - Streamingtjänster
- `simultaneousDevices` - Antal enheter samtidigt
- `peakUsageTime` - Peak-användningstid

---

## 🧠 AI PROMPT DESIGN

### **System Prompt (för GPT)**

```
Du är en expert på att ställa relevanta uppföljningsfrågor för en bredbandsjämförelsesajt.

VIKTIGA PRINCIPER:
- Bygg på tidigare svar naturligt
- Ställ frågor som ger mest värde för rekommendationer
- Var konversationell och personlig
- Ge 2-4 tydliga svarsalternativ
- Inkludera relevanta ikoner (lucide-react namn)
```

### **Exempel på intelligent uppföljning**

**Scenario 1: Stor familj**
```
User: "5+ personer" (householdSize)
↓
AI genererar: "Hur många enheter brukar användas samtidigt på kvällen?"
- 2-3 enheter
- 4-6 enheter  
- 7+ enheter
```

**Scenario 2: Heavy streaming**
```
User: "Varje dag" (streaming)
↓
AI genererar: "Streamar ni i 4K eller HD?"
- Mest 4K (högkvalitet)
- Blandat 4K och HD
- Mest HD (normal kvalitet)
```

**Scenario 3: Singel + gaming**
```
User: "Bara jag" (householdSize) + "Ja, ofta" (gaming)
↓
AI genererar: "Vilken typ av spel spelar du mest?"
- Kompetitiva shooter (låg latens viktigt)
- Online RPG/MMO
- Casual multiplayer
```

---

## 🔐 KVALITETSSÄKRING

### **1. Garanterade datapunkter**

Innan rekommendationer genereras, kontrolleras att:
- serviceType finns
- householdSize finns
- budget finns

Om någon saknas → en garanterad fråga ställs före avslut

### **2. Fallback-system**

```typescript
FALLBACK_QUESTIONS = {
  streaming: { ... },
  gaming: { ... },
  videoMeetings: { ... },
  // etc.
}
```

Används när:
- GPT API timeout
- Ogiltig JSON response
- Frågan inte validerar korrekt

### **3. Validering av AI-genererade frågor**

Varje fråga valideras för:
- `questionText` finns och är ej tom
- `suggestedAnswers` har minst 2 alternativ
- `dataField` finns i tillåtna fält
- Svarsalternativ har både `text` och `value`

---

## 📈 FÖRDELAR MED HYBRIDMODELLEN

✅ **Mer naturlig konversation**
- AI bygger intelligent på tidigare svar
- Känns som ett riktigt samtal, inte formulär

✅ **Effektivare datafångst**
- Skippar irrelevanta frågor
- Fokuserar på vad som ger mest värde

✅ **Bättre rekommendationer**
- Djupare förståelse för användarens behov
- Mer nyanserad data för beslut

✅ **Flexibilitet**
- Lätt att lägga till nya frågor/datapunkter
- Anpassar sig automatiskt till olika use cases

✅ **Robust med fallbacks**
- Garanterade frågor säkerställer minimal data
- Fungerar även om AI:n misslyckas

---

## 🚀 ANVÄNDNING

### **För utvecklare**

Systemet är helt transparent och kräver ingen extra konfiguration:

```typescript
// När user väljer serviceType och adress:
await askNextQuestion(); // Startar dynamiskt system

// När user svarar:
await processAnswer(value); // Sparar och genererar nästa fråga
```

### **Anpassa frågepool**

Lägg till nya frågor i `FALLBACK_QUESTIONS`:

```typescript
export const FALLBACK_QUESTIONS: Record<string, GeneratedQuestion> = {
  // ... befintliga frågor
  
  myNewQuestion: {
    questionText: 'Min nya fråga?',
    suggestedAnswers: [
      { text: 'Alternativ 1', value: 'val1', icon: 'icon-name' },
      { text: 'Alternativ 2', value: 'val2', icon: 'icon-name' }
    ],
    reasoning: 'Varför denna fråga är viktig',
    dataField: 'myNewField',
    priority: 'medium',
    helpText: 'Hjälptext här'
  }
}
```

Lägg till `myNewField` i `dynamicPool`:

```typescript
dynamicPool: [
  'streaming',
  'gaming',
  // ... befintliga
  'myNewField' // Ny!
]
```

### **Ändra antal frågor**

I `AppleStyleAgent.tsx`:

```typescript
const MAX_QUESTIONS = 10; // Ändra från 7 till 10
```

---

## 🐛 DEBUGGING

### **Console logs**

Systemet loggar omfattande information:

```
🔄 Generating dynamic question...
✅ Generated question: { questionText: "...", ... }
📝 Answer processed: { question: "...", answer: "...", field: "..." }
🎯 Reached max questions, generating recommendations
```

### **Kontrollera frågehistorik**

```typescript
console.log('Question history:', questionHistory);
console.log('User profile:', userProfile);
```

### **Cache**

Rensa cache vid behov:

```typescript
questionGenerator.clearCache();
```

---

## 💰 KOSTNAD & PRESTANDA

### **API-kostnad per användare**

- Garanterade frågor: 0 API-anrop (fördefinierade)
- Dynamiska frågor: 4 API-anrop
- Modell: GPT-4o-mini (~$0.0001 per request)
- **Total kostnad per användare: ~$0.0004 (ca 0.004 kr)**

### **Latens**

- Garanterad fråga: <100ms (lokal)
- Dynamisk fråga: 800-1200ms (inkl. API + animation)
- Total tid för 7 frågor: ~6-8 sekunder (AI-tid)

### **Optimeringar**

1. **Caching** - Samma kontext ger samma fråga (minskar API-anrop)
2. **Parallell generering** - Möjligt att pre-generera nästa fråga
3. **Fallback** - Lokala frågor vid timeout

---

## 🎓 EXEMPEL-SESSION

```
1. serviceType: "broadband" (garanterad)
   → User väljer: "Bredband"

2. householdSize: "3-4" (garanterad)
   → User väljer: "3-4 personer"

3. AI genererar: "Hur ofta streamar ni film och serier?"
   → User väljer: "Varje dag"

4. AI genererar: "Hur många brukar streama samtidigt?"
   → User väljer: "2-3 enheter"

5. AI genererar: "Jobbar någon hemifrån med videomöten?"
   → User väljer: "Ja, dagligen"

6. AI genererar: "Vill du ha router inkluderad?"
   → User väljer: "Ja, saknar router"

7. budget: "500-700 kr" (garanterad)
   → User väljer: "500-700 kr"

→ Generera rekommendationer med:
   - serviceType: broadband
   - householdSize: 3-4
   - streamingLevel: heavy
   - simultaneousDevices: 2-3
   - workFromHome: true
   - includeRouter: true
   - budget: 500-700
```

**Resultat:** Rekommendation av 250-500 Mbit/s fiber med router inkluderad, 500-650 kr/mån

---

## 📝 TODO / FRAMTIDA FÖRBÄTTRINGAR

- [ ] A/B-testa dynamiskt vs statiskt för att mäta conversion
- [ ] Lägg till multi-language support (engelska)
- [ ] Implementera "Ångra senaste svar" funktion
- [ ] Analytics för att se vilka frågor som genereras mest
- [ ] Machine learning för att optimera frågeordning baserat på historik
- [ ] Voice input för frågor (accessibility)

---

## 🤝 SUPPORT

Vid frågor eller problem:
1. Kontrollera console logs för felsökning
2. Verifiera att OpenAI API-nyckel är korrekt
3. Testa fallback-systemet genom att simulera API-fel
4. Granska `questionHistory` state för att förstå flödet

---

**Skapad:** 2025-10-02  
**Version:** 1.0  
**Författare:** Valle AI Development Team

