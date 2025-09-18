import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Seved Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Seved, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 83% fiber-täckning. AI-analys gratis.",
  keywords: "bredband seved, fiber seved, internet seved, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Seved',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Seved","type":"stadsdel","population":12000,"region":"Skåne","fiberCoverage":83,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":390,"searchVolume":650,"competition":"low"}',
    'ai-local-keywords': 'bredband-seved,fiber-seved,internet-seved',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '390-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '650',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function SevedBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Seved<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Seved, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Seved-leverantörer",
    cityName: "Seved",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 83,
    avgPrice: 390,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 12000,
    areaType: "stadsdel",
    searchVolume: 650,
    competition: "low",
    localContent: {"localInfo":"Seved är ett stadsdel i Malmö med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Seved ligger på 83%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Seved är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Seved ligger på cirka 390 SEK per månad.","seoKeywords":"bredband seved, fiber seved, internet seved, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}