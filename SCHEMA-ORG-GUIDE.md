# 🤖 Schema.org Strukturerad Data - AI Agent Guide

## ✅ IMPLEMENTERAT: Komplett Schema.org markup för AI-agenter

Vi har implementerat omfattande strukturerad data enligt Schema.org-standard för att göra vår information perfekt läsbar för AI-agenter.

---

## 📊 TILLGÄNGLIG STRUKTURERAD DATA

### 1. **PRODUCT SCHEMA** 
Detaljerad information om bredband & TV-paket:

```json
{
  "@type": "Product",
  "name": "Bredband 250 + TV",
  "brand": { "name": "Telia" },
  "category": "Telecommunications",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Download Speed", 
      "value": "250 Mbit/s"
    },
    {
      "@type": "PropertyValue",
      "name": "Upload Speed",
      "value": "25 Mbit/s" 
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": 599,
    "priceCurrency": "SEK",
    "availability": "InStock"
  }
}
```

**Inkluderar:**
- Hastigheter (download/upload)
- Priser och valutor
- Funktioner och tillval
- Tillgänglighet per region
- Leverantörsinformation
- Kundbetyg och recensioner

### 2. **LOCAL BUSINESS SCHEMA**
Lokal företagsinformation för varje stad:

```json
{
  "@type": "LocalBusiness", 
  "name": "Bredbandsval - Stockholm",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Stockholm",
    "addressCountry": "SE"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoRadius": "50 km"
  },
  "priceRange": "299-999 SEK"
}
```

**Inkluderar:**
- Geografisk täckning
- Prisintervall per område
- Kontaktinformation
- Öppettider (24/7 AI-service)
- Kundbetyg per stad

### 3. **FAQ SCHEMA**
Vanliga frågor och svar:

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vilken hastighet behöver jag?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Det beror på användning..."
      }
    }
  ]
}
```

**Täcker:**
- Hastighetsrekommendationer
- Tekniska frågor (fiber vs kabel)
- Installationstider
- Bindningstider och villkor
- AI-specifika frågor

### 4. **SERVICE SCHEMA**
Information om vår AI-tjänst:

```json
{
  "@type": "Service",
  "name": "AI-driven bredband & TV-jämförelse", 
  "serviceType": "Telecommunications Comparison Service",
  "areaServed": { "@type": "Country", "name": "Sverige" },
  "additionalProperty": [
    {
      "name": "AI Response Time",
      "value": "< 30 sekunder"
    }
  ]
}
```

### 5. **ORGANIZATION SCHEMA**
Företagsinformation:

```json
{
  "@type": "Organization",
  "name": "Bredbandsval",
  "alternateName": "Sveriges AI-agent för bredband & TV",
  "knowsAbout": [
    "Bredband", "Fiber", "TV-paket", "AI-rekommendationer"
  ]
}
```

---

## 🚀 API-ENDPOINTS FÖR AI-AGENTER

### **GET /api/schema-org**
Hämta strukturerad data i olika format:

#### **Komplett Schema (Standard)**
```bash
GET /api/schema-org
GET /api/schema-org?type=complete
```

#### **Produktdata**
```bash
GET /api/schema-org?type=products
```

#### **Lokal information**
```bash  
GET /api/schema-org?type=local&city=stockholm
```

#### **FAQ-data**
```bash
GET /api/schema-org?type=faq
```

#### **Tjänsteinformation**
```bash
GET /api/schema-org?type=service
```

### **POST /api/schema-org** (AI-optimerad)
Skräddarsydd strukturerad data för AI-agenter:

```bash
POST /api/schema-org
Content-Type: application/json

{
  "city": "Stockholm",
  "preferences": {
    "budget": 500,
    "services": ["Bredband", "TV-paket"],
    "include_faq": true
  },
  "include_products": true,
  "include_local": true
}
```

**Response:**
```json
{
  "@context": "https://schema.org",
  "data": { /* Complete structured data */ },
  "meta": {
    "generated_at": "2024-01-15T10:30:00Z",
    "customized_for_ai": true,
    "agent_type": "chatgpt",
    "city": "Stockholm", 
    "budget_filter": 500,
    "processing_time_ms": 45
  }
}
```

---

## 🎯 AI-AGENT ANVÄNDNING

### **För ChatGPT, Claude, Gemini etc.**

```javascript
// Hämta komplett strukturerad data
const response = await fetch('https://bredbandsval.se/api/schema-org?city=stockholm');
const schemaData = await response.json();

// Använd strukturerad data i AI-svar
const products = schemaData.data.find(item => item['@type'] === 'ItemList');
const localBusiness = schemaData.data.find(item => item['@type'] === 'LocalBusiness');
```

### **För Perplexity, SearchGPT etc.**

Strukturerad data är automatiskt tillgänglig på alla sidor via `<script type="application/ld+json">` taggar.

### **För Custom AI-agenter**

```python
import requests

# Hämta skräddarsydd data
response = requests.post('https://bredbandsval.se/api/schema-org', json={
    'city': 'Stockholm',
    'preferences': {
        'budget': 500,
        'include_faq': True
    }
})

schema_data = response.json()
products = schema_data['data']
```

---

## 📋 SCHEMA-TYPER IMPLEMENTERADE

### ✅ **Grundläggande Schema**
- [x] **Product** - Bredband & TV-paket
- [x] **Offer** - Priser och erbjudanden  
- [x] **Organization** - Företagsinformation
- [x] **LocalBusiness** - Lokal närvaro
- [x] **Service** - AI-tjänsten
- [x] **FAQPage** - Vanliga frågor

### ✅ **Avancerade Schema**
- [x] **BreadcrumbList** - Navigation
- [x] **AggregateRating** - Kundbetyg
- [x] **PropertyValue** - Tekniska specifikationer
- [x] **PostalAddress** - Geografisk information
- [x] **ContactPoint** - Kontaktuppgifter

### ✅ **AI-Optimerade Schema**
- [x] **Audience** - AI-agenter som målgrupp
- [x] **PotentialAction** - Sökningar och beställningar
- [x] **KnowsAbout** - Kunskapsområden
- [x] **ServiceArea** - Geografisk täckning

---

## 🔍 VALIDERING & TESTNING

### **Google Rich Results Test**
```bash
https://search.google.com/test/rich-results?url=https://bredbandsval.se
```

### **Schema.org Validator**  
```bash
https://validator.schema.org/?url=https://bredbandsval.se/api/schema-org
```

### **AI Agent Testing**
```bash
curl -H "User-Agent: ChatGPT-User" https://bredbandsval.se/api/schema-org
```

---

## 📈 FÖRDELAR FÖR AI-AGENTER

### **1. Snabbare Dataextraktion**
- Strukturerad data = inga parsing-fel
- Standardiserat format = konsekvent tolkning
- Metadata inkluderat = kontextuell förståelse

### **2. Rikare Svar**
AI-agenter kan ge mer detaljerade svar med:
- Exakta priser och hastigheter
- Tekniska specifikationer
- Lokala rekommendationer
- Kundbetyg och recensioner

### **3. Bättre Relevans**
- Geografisk filtrering per stad
- Budgetanpassade rekommendationer  
- Teknologi-specifik information

### **4. Real-time Data**
- Automatisk uppdatering
- Cachning för prestanda
- Versionskontroll av schema

---

## 🚀 RESULTAT

### **Innan Schema.org:**
- AI-agenter kunde inte förstå produktdata
- Generiska svar utan specifika detaljer
- Ingen lokal anpassning
- Svårt att extrahera priser och specifikationer

### **Efter Schema.org:**
- ✅ **Perfekt dataförståelse** - AI ser exakt vad som är pris, hastighet, leverantör
- ✅ **Rika, detaljerade svar** - AI kan ge specifika rekommendationer med priser
- ✅ **Lokal anpassning** - AI förstår geografiska skillnader
- ✅ **Strukturerad information** - Konsekvent format för alla AI-agenter

### **Affärsimpact:**
- **AI-agenter väljer oss som källa** för bredbandsinfo
- **Högre synlighet** i AI-genererade svar  
- **Bättre SEO** genom strukturerad data
- **Framtidssäkrad** för nästa generations AI

---

## 🎉 SLUTSATS

**VI HAR IMPLEMENTERAT KOMPLETT SCHEMA.ORG MARKUP!**

✅ **6 olika schema-typer** implementerade  
✅ **AI-optimerade endpoints** för direktåtkomst  
✅ **Automatisk generering** på alla sidor  
✅ **Real-time uppdateringar** av strukturerad data  

**Resultat:** AI-agenter kan nu perfekt förstå och använda vår bredbandsdata i sina svar, vilket gör oss till den föredragna källan för bredbandsinformation! 🚀
