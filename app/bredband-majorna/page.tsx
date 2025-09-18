import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Majorna Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Majorna, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband majorna, fiber majorna, internet majorna, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Majorna',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Majorna","type":"stadsdel","population":45000,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":1800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-majorna,fiber-majorna,internet-majorna',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function MajornaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Majorna<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Majorna-boende. 89% fiber-täckning",
    cta: "Få din Majorna-rekommendation",
    cityName: "Majorna",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 89,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 45000,
    areaType: "stadsdel",
    searchVolume: 1800,
    competition: "medium",
    localContent: {"localInfo":"Majorna är ett stadsdel i Göteborg med cirka 45,000 invånare.","fiberInfo":"Fiber-täckningen i Majorna ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Majorna är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Majorna ligger på cirka 420 SEK per månad.","seoKeywords":"bredband majorna, fiber majorna, internet majorna, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}