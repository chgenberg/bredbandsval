import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Krokslätt Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Krokslätt, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband krokslätt, fiber krokslätt, internet krokslätt, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Krokslätt',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Krokslätt","type":"stadsdel","population":15000,"region":"Västra Götaland","fiberCoverage":87,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-krokslatt,fiber-krokslatt,internet-krokslatt',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function KrokslttBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Krokslätt<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Krokslätt – jämför priser, hastigheter och leverantörer",
    cta: "Se Krokslätt-alternativ",
    cityName: "Krokslätt",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 87,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 15000,
    areaType: "stadsdel",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Krokslätt är ett stadsdel i Göteborg med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Krokslätt ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Krokslätt är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Krokslätt ligger på cirka 410 SEK per månad.","seoKeywords":"bredband krokslätt, fiber krokslätt, internet krokslätt, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}