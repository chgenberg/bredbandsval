import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ale Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Ale, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 82% fiber-täckning. AI-analys gratis.",
  keywords: "bredband ale, fiber ale, internet ale, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ale',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Ale","type":"kommun","population":31000,"region":"Västra Götaland","fiberCoverage":82,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395,"searchVolume":800,"competition":"low"}',
    'ai-local-keywords': 'bredband-ale,fiber-ale,internet-ale',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '800',
    'ai-competition': 'low',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Göteborg'
  }
};

export default function AleBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ale<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Ale, Göteborg. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Ale-leverantörer",
    cityName: "Ale",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 82,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 31000,
    areaType: "kommun",
    searchVolume: 800,
    competition: "low",
    localContent: {"localInfo":"Ale är ett kommun i Göteborg med cirka 31,000 invånare.","fiberInfo":"Fiber-täckningen i Ale ligger på 82%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Ale är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Ale ligger på cirka 395 SEK per månad.","seoKeywords":"bredband ale, fiber ale, internet ale, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}