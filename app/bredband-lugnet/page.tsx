import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lugnet Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lugnet, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lugnet, fiber lugnet, internet lugnet, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lugnet',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lugnet","type":"stadsdel","population":5000,"region":"Skåne","fiberCoverage":87,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":410,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-lugnet,fiber-lugnet,internet-lugnet',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function LugnetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Lugnet<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Lugnet, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Lugnet-leverantörer",
    cityName: "Lugnet",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 87,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 5000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Lugnet är ett stadsdel i Malmö med cirka 5,000 invånare.","fiberInfo":"Fiber-täckningen i Lugnet ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lugnet är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Lugnet ligger på cirka 410 SEK per månad.","seoKeywords":"bredband lugnet, fiber lugnet, internet lugnet, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}