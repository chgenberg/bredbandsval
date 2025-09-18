import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Norrmalm Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Norrmalm, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 98% fiber-täckning. AI-analys gratis.",
  keywords: "bredband norrmalm, fiber norrmalm, internet norrmalm, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Norrmalm',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Norrmalm","type":"stadsdel","population":26000,"region":"Stockholm","fiberCoverage":98,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":485,"searchVolume":2200,"competition":"high"}',
    'ai-local-keywords': 'bredband-norrmalm,fiber-norrmalm,internet-norrmalm',
    'ai-fiber-coverage': '98%',
    'ai-avg-price': '485-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2200',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function NorrmalmBredbandsPage() {
  const localizedContent = {
    headline: "Norrmalms smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Norrmalm – personlig AI-rekommendation",
    cta: "Jämför Norrmalm-leverantörer",
    cityName: "Norrmalm",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 98,
    avgPrice: 485,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 26000,
    areaType: "stadsdel",
    searchVolume: 2200,
    competition: "high",
    localContent: {"localInfo":"Norrmalm är ett stadsdel i Stockholm med cirka 26,000 invånare.","fiberInfo":"Fiber-täckningen i Norrmalm ligger på 98%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Norrmalm är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Norrmalm ligger på cirka 485 SEK per månad.","seoKeywords":"bredband norrmalm, fiber norrmalm, internet norrmalm, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}