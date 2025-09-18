import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rosengård Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Rosengård, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 82% fiber-täckning. AI-analys gratis.",
  keywords: "bredband rosengård, fiber rosengård, internet rosengård, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rosengård',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Rosengård","type":"stadsdel","population":25000,"region":"Skåne","fiberCoverage":82,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":385,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-rosengard,fiber-rosengard,internet-rosengard',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function RosengrdBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Rosengård<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Rosengård – jämför priser, hastigheter och leverantörer",
    cta: "Se Rosengård-alternativ",
    cityName: "Rosengård",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 82,
    avgPrice: 385,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Rosengård är ett stadsdel i Malmö med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Rosengård ligger på 82%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Rosengård är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Rosengård ligger på cirka 385 SEK per månad.","seoKeywords":"bredband rosengård, fiber rosengård, internet rosengård, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}