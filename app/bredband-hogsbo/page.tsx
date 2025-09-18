import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Högsbo Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Högsbo, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband högsbo, fiber högsbo, internet högsbo, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Högsbo',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Högsbo","type":"stadsdel","population":12000,"region":"Västra Götaland","fiberCoverage":87,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":415,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-hogsbo,fiber-hogsbo,internet-hogsbo',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function HgsboBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Högsbo<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Högsbo, Göteborg. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Högsbo-leverantörer",
    cityName: "Högsbo",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 87,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 12000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Högsbo är ett stadsdel i Göteborg med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Högsbo ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Högsbo är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Högsbo ligger på cirka 415 SEK per månad.","seoKeywords":"bredband högsbo, fiber högsbo, internet högsbo, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}