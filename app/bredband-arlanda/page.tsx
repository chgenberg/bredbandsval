import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Arlanda Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Arlanda, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband arlanda, fiber arlanda, internet arlanda, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Arlanda',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Arlanda","type":"område","population":3000,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":480,"searchVolume":1600,"competition":"high"}',
    'ai-local-keywords': 'bredband-arlanda,fiber-arlanda,internet-arlanda',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '480-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1600',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function ArlandaBredbandsPage() {
  const localizedContent = {
    headline: "Arlandas smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Arlanda – personlig AI-rekommendation",
    cta: "Jämför Arlanda-leverantörer",
    cityName: "Arlanda",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 480,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 3000,
    areaType: "område",
    searchVolume: 1600,
    competition: "high",
    localContent: {"localInfo":"Arlanda är ett område i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Arlanda ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Arlanda är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Arlanda ligger på cirka 480 SEK per månad.","seoKeywords":"bredband arlanda, fiber arlanda, internet arlanda, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}