import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Eriksberg Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Eriksberg, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband eriksberg, fiber eriksberg, internet eriksberg, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Eriksberg',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Eriksberg","type":"stadsdel","population":8000,"region":"Västra Götaland","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":900,"competition":"medium"}',
    'ai-local-keywords': 'bredband-eriksberg,fiber-eriksberg,internet-eriksberg',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '900',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function EriksbergBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Eriksberg<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Eriksberg – jämför priser, hastigheter och leverantörer",
    cta: "Se Eriksberg-alternativ",
    cityName: "Eriksberg",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 92,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "medium",
    localContent: {"localInfo":"Eriksberg är ett stadsdel i Göteborg med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Eriksberg ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Eriksberg är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Eriksberg ligger på cirka 440 SEK per månad.","seoKeywords":"bredband eriksberg, fiber eriksberg, internet eriksberg, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}