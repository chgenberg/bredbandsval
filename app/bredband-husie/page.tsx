import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Husie Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Husie, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband husie, fiber husie, internet husie, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Husie',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Husie","type":"stadsdel","population":9000,"region":"Skåne","fiberCoverage":85,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-husie,fiber-husie,internet-husie',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function HusieBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Husie<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Husie, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Husie-leverantörer",
    cityName: "Husie",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 85,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 9000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Husie är ett stadsdel i Malmö med cirka 9,000 invånare.","fiberInfo":"Fiber-täckningen i Husie ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Husie är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Husie ligger på cirka 400 SEK per månad.","seoKeywords":"bredband husie, fiber husie, internet husie, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}