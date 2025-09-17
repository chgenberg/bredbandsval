# Bredbandsval AI Agent

En modern AI-driven lösning för att hjälpa användare hitta det perfekta bredbandet och TV-paketet baserat på deras unika behov.

## 🚀 Funktioner

### Conversational AI Interface
- **Naturlig konversation** - AI-agenten leder användaren genom processen med naturlig dialog
- **Smart frågeflöde** - Dynamiska frågor som anpassar sig efter användarens svar
- **Quick replies** - Snabba svarsalternativ för enklare interaktion
- **Typing indicators** - Visuell feedback när agenten "tänker"

### Avancerad Rekommendationsmotor
- **Personaliserade rekommendationer** - Baserat på hushållsstorlek, användningsmönster och preferenser
- **Bandbreddsberäkning** - Automatisk beräkning av bandbreddsbehov
- **Besparingsanalys** - Visar potentiella besparingar när streaming ingår i paketet
- **Smart ranking** - Poängsättning baserat på matchning mot användarens behov

### Produktionsklara Features
- **API-abstraktionslager** - Enkelt att byta mellan mock-data och riktiga API:er
- **Adressökning med autocomplete** - Förberedd för Google Places API
- **Lokal datalagring** - Sparar användarpreferenser och konversationshistorik
- **Analytics** - Spårar användarflöden och konvertering
- **Streamingkalkylator** - Beräknar kostnader och besparingar för streamingtjänster
- **Export/dela funktionalitet** - Användare kan dela sina rekommendationer

## 🛠️ Teknisk Stack

- **Next.js 14** - React framework med App Router
- **TypeScript** - För typsäkerhet och bättre utvecklarupplevelse
- **Tailwind CSS** - För modern och responsiv design
- **Framer Motion** - Smooth animationer
- **LocalStorage API** - För datalagring

## 📁 Projektstruktur

```
bredbandsval-ai-agent/
├── app/                    # Next.js app directory
├── components/             # React komponenter
│   ├── AIAgent.tsx        # Huvudkomponent för AI-agenten
│   ├── ChatMessage.tsx    # Meddelandekomponent
│   ├── AddressAutocomplete.tsx # Adressökning
│   ├── StreamingCalculator.tsx # Streamingkalkylator
│   └── ...
├── lib/                   # Utility funktioner och API:er
│   ├── api/              # API-klient och typer
│   ├── analytics.ts      # Analytics tracking
│   ├── storage.ts        # LocalStorage wrapper
│   └── conversation-flow.ts # Konversationslogik
└── types/                # TypeScript typdefinitioner
```

## 🚀 Installation & Utveckling

```bash
# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build
```

## 🔧 Konfiguration

### Miljövariabler

Skapa en `.env.local` fil:

```env
# API Configuration
NEXT_PUBLIC_USE_MOCK_DATA=true  # Sätt till false för riktiga API:er
NEXT_PUBLIC_API_BASE_URL=https://api.bredbandsval.se/v1

# Google Places API (för adressökning)
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your-api-key
```

### Byta från Mock till Riktiga API:er

1. Sätt `NEXT_PUBLIC_USE_MOCK_DATA=false`
2. Uppdatera `API_BASE_URL` till er riktiga API endpoint
3. API-klienten kommer automatiskt använda riktiga API:er

## 📊 Analytics Events

Följande events spåras automatiskt:

- `page_view` - När sidan laddas
- `conversation_step` - Varje steg i konversationen
- `recommendations_shown` - När rekommendationer visas
- `package_selected` - När användare väljer ett paket
- `funnel_step` - Konverteringstratt

## 🔐 GDPR & Integritet

- All data lagras lokalt i användarens webbläsare
- Användare kan exportera all sin data
- Enkel rensning av all lagrad data

## 🎯 Nästa Steg

1. **Integration med riktiga API:er**
   - Leverantörsdata
   - Adresstillgänglighet
   - Realtidspriser

2. **AI-förbättringar**
   - NLP för friare konversation
   - Machine learning för bättre rekommendationer

3. **Ytterligare funktioner**
   - Flerspråkighet
   - Prisjämförelser över tid
   - Notifikationer vid nya erbjudanden

## 📝 Licens

© 2025 Bredbandsval.se