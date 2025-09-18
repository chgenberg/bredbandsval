import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gamla Stan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Gamla Stan, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 98% fiber-täckning. AI-analys gratis.",
  keywords: "bredband gamla stan, fiber gamla stan, internet gamla stan, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gamla Stan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Gamla Stan","type":"stadsdel","population":3000,"region":"Stockholm","fiberCoverage":98,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":480,"searchVolume":2400,"competition":"high"}',
    'ai-local-keywords': 'bredband-gamla-stan,fiber-gamla-stan,internet-gamla-stan',
    'ai-fiber-coverage': '98%',
    'ai-avg-price': '480-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2400',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function GamlaStanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Gamla Stan<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Gamla Stan, Stockholm. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Gamla Stan",
    cityName: "Gamla Stan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 98,
    avgPrice: 480,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 3000,
    areaType: "stadsdel",
    searchVolume: 2400,
    competition: "high",
    localContent: {"localInfo":"Gamla Stan är ett stadsdel i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Gamla Stan ligger på 98%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Gamla Stan är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Gamla Stan ligger på cirka 480 SEK per månad.","seoKeywords":"bredband gamla stan, fiber gamla stan, internet gamla stan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}