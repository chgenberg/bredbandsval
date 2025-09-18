import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Triangeln Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Triangeln, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband triangeln, fiber triangeln, internet triangeln, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Triangeln',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Triangeln","type":"område","population":2000,"region":"Skåne","fiberCoverage":91,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":430,"searchVolume":1600,"competition":"high"}',
    'ai-local-keywords': 'bredband-triangeln,fiber-triangeln,internet-triangeln',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1600',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function TriangelnBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Triangeln<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Triangeln-hem baserat på dina unika behov",
    cta: "Starta din Triangeln-analys",
    cityName: "Triangeln",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 91,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 2000,
    areaType: "område",
    searchVolume: 1600,
    competition: "high",
    localContent: {"localInfo":"Triangeln är ett område i Malmö med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Triangeln ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Triangeln är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Triangeln ligger på cirka 430 SEK per månad.","seoKeywords":"bredband triangeln, fiber triangeln, internet triangeln, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}