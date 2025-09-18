import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Brunnsbo Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Brunnsbo, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband brunnsbo, fiber brunnsbo, internet brunnsbo, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Brunnsbo',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Brunnsbo","type":"stadsdel","population":15000,"region":"Västra Götaland","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-brunnsbo,fiber-brunnsbo,internet-brunnsbo',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function BrunnsboBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Brunnsbo<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Brunnsbo, Göteborg. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Brunnsbo-leverantörer",
    cityName: "Brunnsbo",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 84,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 15000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Brunnsbo är ett stadsdel i Göteborg med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Brunnsbo ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Brunnsbo är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Brunnsbo ligger på cirka 395 SEK per månad.","seoKeywords":"bredband brunnsbo, fiber brunnsbo, internet brunnsbo, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}