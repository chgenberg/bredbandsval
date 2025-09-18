import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Östermalm Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Östermalm, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 97% fiber-täckning. AI-analys gratis.",
  keywords: "bredband östermalm, fiber östermalm, internet östermalm, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Östermalm',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Östermalm","type":"stadsdel","population":71000,"region":"Stockholm","fiberCoverage":97,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":490,"searchVolume":2800,"competition":"high"}',
    'ai-local-keywords': 'bredband-ostermalm,fiber-ostermalm,internet-ostermalm',
    'ai-fiber-coverage': '97%',
    'ai-avg-price': '490-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2800',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function stermalmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Östermalm<br/>enligt AI-analys",
    subtext: "Hitta det perfekta bredbandet för ditt Östermalm-hem baserat på dina unika behov",
    cta: "Starta din Östermalm-analys",
    cityName: "Östermalm",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 97,
    avgPrice: 490,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 71000,
    areaType: "stadsdel",
    searchVolume: 2800,
    competition: "high",
    localContent: {"localInfo":"Östermalm är ett stadsdel i Stockholm med cirka 71,000 invånare.","fiberInfo":"Fiber-täckningen i Östermalm ligger på 97%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Östermalm är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Östermalm ligger på cirka 490 SEK per månad.","seoKeywords":"bredband östermalm, fiber östermalm, internet östermalm, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}