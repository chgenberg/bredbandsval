# 🕷️ Web Scraping Integration

AI-agenten använder nu **riktig data** från Bredbandsval.se genom intelligent web scraping!

## 🎯 Hur det fungerar

### 1. **Smart Data Collection**
```typescript
// Automatisk scraping när användare anger adress
const packages = await bredbandsvalScraper.scrapePackagesForAddress("Stockholm");
```

### 2. **Multi-Level Fallback**
```
1. 🕷️  Scrapa live data från Bredbandsval.se
2. 📦  Använd cached data (30 min cache)
3. 🎭  Fallback till mock data
4. ⚠️   Error handling med graceful degradation
```

### 3. **Intelligent Parsing**
- **Automatisk detektering** av paketstruktur på sidan
- **Flexibel parsing** som anpassar sig till olika layouts
- **Smart extraktion** av priser, hastigheter, leverantörer
- **Feature detection** för router, bindningstid, etc.

## 📊 Data som extraheras

```typescript
interface ScrapedPackage {
  providerName: string;     // "Telia", "Comhem", etc.
  name: string;            // "Bredband 250 + TV"
  speed: {
    download: number;      // 250 Mbit/s
    upload: number;        // 25 Mbit/s
  };
  pricing: {
    monthly: number;       // 599 kr/mån
    campaign?: {
      monthlyPrice: 399;   // Kampanjpris
      months: 3;          // I 3 månader
    };
  };
  features: string[];      // ["Router ingår", "TV-box"]
  contract: {
    bindingPeriod: number; // 12 månader
  };
}
```

## 🚀 API Endpoints

### `/api/scrape-packages`
```bash
POST /api/scrape-packages
{
  "address": "Stockholm"
}
```

**Response:**
```json
{
  "packages": [...],
  "source": "scraped" | "cache",
  "address": "Stockholm",
  "count": 15,
  "timestamp": 1703123456789
}
```

## 🛡️ Säkerhet & Prestanda

### **Caching**
- ✅ 30 minuters cache per adress
- ✅ Automatisk cache-rensning
- ✅ Graceful fallback vid cache-miss

### **Rate Limiting**
- ✅ Intelligent delay mellan requests
- ✅ User-Agent rotation
- ✅ Respectful scraping practices

### **Error Handling**
```typescript
try {
  const realData = await scrapeRealData(address);
  return realData;
} catch (error) {
  console.warn('Scraping failed, using mock data');
  return mockData;
}
```

## 🔧 Konfiguration

### Miljövariabler
```env
# Aktivera/inaktivera scraping
ENABLE_SCRAPING=true

# Cache-inställningar
SCRAPING_CACHE_DURATION=1800000  # 30 minuter

# Rate limiting
SCRAPING_DELAY_MS=2000  # 2 sekunder mellan requests
```

### Anpassa scraping
```typescript
// Lägg till nya selektorer
const packageSelectors = [
  '.package-card',
  '.offer-card',
  '.broadband-offer',  // <- Lägg till nya här
];
```

## 📈 Fördelar

### **För Användaren**
- 🎯 **Aktuella priser** - alltid senaste kampanjer
- 📊 **Komplett utbud** - alla leverantörer som finns
- ⚡ **Snabbare svar** - cached data för bättre prestanda

### **För Bredbandsval**
- 💰 **Konkurrensfördel** - alltid uppdaterad data
- 🤖 **Automatisering** - ingen manuell datainmatning
- 📊 **Bättre insights** - spåra marknadsförändringar

## 🚦 Status Indicators

I UI:et visas tydligt vilken datakälla som används:

```jsx
{/* Live data indicator */}
<div className="flex items-center gap-2">
  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
  Live-data från Bredbandsval.se
</div>
```

## 🔮 Framtida Förbättringar

### **V2.0 - Avancerad Scraping**
- 🕸️ **Playwright integration** för JavaScript-heavy sites
- 🔄 **Real-time updates** med WebSocket notifications
- 📱 **Mobile-first scraping** för mobilspecifika erbjudanden

### **V3.0 - AI-Powered Extraction**
- 🧠 **GPT-4 Vision** för att tolka komplexa layouts
- 📊 **Automatic schema detection** 
- 🎯 **Predictive caching** baserat på användarmönster

---

**⚠️ Etiska Riktlinjer:**
- Respectful scraping med delays
- Följer robots.txt när möjligt  
- Caching för att minimera load
- Transparent om datakällor
