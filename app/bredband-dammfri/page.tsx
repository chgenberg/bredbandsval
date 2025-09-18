import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Dammfri Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Dammfri, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband dammfri, fiber dammfri, internet dammfri, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Dammfri',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Dammfri","type":"stadsdel","population":4000,"region":"Skåne","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-dammfri,fiber-dammfri,internet-dammfri',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function DammfriBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Dammfri<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Dammfri, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Dammfri-leverantörer",
    cityName: "Dammfri",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 86,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Dammfri är ett stadsdel i Malmö med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Dammfri ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Dammfri är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Dammfri ligger på cirka 405 SEK per månad.","seoKeywords":"bredband dammfri, fiber dammfri, internet dammfri, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}