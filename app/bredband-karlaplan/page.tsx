import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Karlaplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Karlaplan, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 97% fiber-täckning. AI-analys gratis.",
  keywords: "bredband karlaplan, fiber karlaplan, internet karlaplan, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Karlaplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Karlaplan","type":"område","population":3000,"region":"Stockholm","fiberCoverage":97,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":485,"searchVolume":1200,"competition":"high"}',
    'ai-local-keywords': 'bredband-karlaplan,fiber-karlaplan,internet-karlaplan',
    'ai-fiber-coverage': '97%',
    'ai-avg-price': '485-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function KarlaplanBredbandsPage() {
  const localizedContent = {
    headline: "Karlaplans smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Karlaplan – personlig AI-rekommendation",
    cta: "Jämför Karlaplan-leverantörer",
    cityName: "Karlaplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 97,
    avgPrice: 485,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 3000,
    areaType: "område",
    searchVolume: 1200,
    competition: "high",
    localContent: {"localInfo":"Karlaplan är ett område i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Karlaplan ligger på 97%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Karlaplan är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Karlaplan ligger på cirka 485 SEK per månad.","seoKeywords":"bredband karlaplan, fiber karlaplan, internet karlaplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}