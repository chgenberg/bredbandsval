import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Djurgården Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Djurgården, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband djurgården, fiber djurgården, internet djurgården, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Djurgården',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Djurgården","type":"stadsdel","population":800,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":475,"searchVolume":1800,"competition":"high"}',
    'ai-local-keywords': 'bredband-djurgarden,fiber-djurgarden,internet-djurgarden',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '475-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1800',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function DjurgrdenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Djurgården<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Djurgården-hem baserat på dina unika behov",
    cta: "Starta din Djurgården-analys",
    cityName: "Djurgården",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 475,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 800,
    areaType: "stadsdel",
    searchVolume: 1800,
    competition: "high",
    localContent: {"localInfo":"Djurgården är ett stadsdel i Stockholm med cirka 800 invånare.","fiberInfo":"Fiber-täckningen i Djurgården ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Djurgården är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Djurgården ligger på cirka 475 SEK per månad.","seoKeywords":"bredband djurgården, fiber djurgården, internet djurgården, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}