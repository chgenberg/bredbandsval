import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Oxie Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Oxie, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband oxie, fiber oxie, internet oxie, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Oxie',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Oxie","type":"stadsdel","population":18000,"region":"Skåne","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395,"searchVolume":900,"competition":"low"}',
    'ai-local-keywords': 'bredband-oxie,fiber-oxie,internet-oxie',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '900',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function OxieBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Oxie<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Oxie, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Oxie-leverantörer",
    cityName: "Oxie",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 84,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 18000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "low",
    localContent: {"localInfo":"Oxie är ett stadsdel i Malmö med cirka 18,000 invånare.","fiberInfo":"Fiber-täckningen i Oxie ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Oxie är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Oxie ligger på cirka 395 SEK per månad.","seoKeywords":"bredband oxie, fiber oxie, internet oxie, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}