import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Centrum Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Centrum, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband centrum, fiber centrum, internet centrum, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Centrum',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Centrum","type":"område","population":15000,"region":"Skåne","fiberCoverage":91,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":430,"searchVolume":3200,"competition":"high"}',
    'ai-local-keywords': 'bredband-centrum,fiber-centrum,internet-centrum',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '3200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function CentrumBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Centrum<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Centrum-hem baserat på dina unika behov",
    cta: "Starta din Centrum-analys",
    cityName: "Centrum",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 91,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 15000,
    areaType: "område",
    searchVolume: 3200,
    competition: "high",
    localContent: {"localInfo":"Centrum är ett område i Malmö med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Centrum ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Centrum är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Centrum ligger på cirka 430 SEK per månad.","seoKeywords":"bredband centrum, fiber centrum, internet centrum, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}