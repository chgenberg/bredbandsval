import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Holma Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Holma, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband holma, fiber holma, internet holma, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Holma',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Holma","type":"stadsdel","population":9000,"region":"Skåne","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":395,"searchVolume":550,"competition":"low"}',
    'ai-local-keywords': 'bredband-holma,fiber-holma,internet-holma',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '550',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function HolmaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Holma<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Holma, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Holma-leverantörer",
    cityName: "Holma",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 84,
    avgPrice: 395,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 9000,
    areaType: "stadsdel",
    searchVolume: 550,
    competition: "low",
    localContent: {"localInfo":"Holma är ett stadsdel i Malmö med cirka 9,000 invånare.","fiberInfo":"Fiber-täckningen i Holma ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Holma är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Holma ligger på cirka 395 SEK per månad.","seoKeywords":"bredband holma, fiber holma, internet holma, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}