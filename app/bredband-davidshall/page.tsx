import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Davidshall Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Davidshall, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband davidshall, fiber davidshall, internet davidshall, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Davidshall',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Davidshall","type":"stadsdel","population":12000,"region":"Skåne","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-davidshall,fiber-davidshall,internet-davidshall',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function DavidshallBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Davidshall<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Davidshall – jämför priser, hastigheter och leverantörer",
    cta: "Se Davidshall-alternativ",
    cityName: "Davidshall",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 89,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 12000,
    areaType: "stadsdel",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Davidshall är ett stadsdel i Malmö med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Davidshall ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Davidshall är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Davidshall ligger på cirka 420 SEK per månad.","seoKeywords":"bredband davidshall, fiber davidshall, internet davidshall, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}