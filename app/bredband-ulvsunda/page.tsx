import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ulvsunda Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Ulvsunda, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband ulvsunda, fiber ulvsunda, internet ulvsunda, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ulvsunda',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Ulvsunda","type":"stadsdel","population":3000,"region":"Stockholm","fiberCoverage":89,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-ulvsunda,fiber-ulvsunda,internet-ulvsunda',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function UlvsundaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ulvsunda<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Ulvsunda, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Ulvsunda-leverantörer",
    cityName: "Ulvsunda",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 3000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Ulvsunda är ett stadsdel i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Ulvsunda ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Ulvsunda är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Ulvsunda ligger på cirka 435 SEK per månad.","seoKeywords":"bredband ulvsunda, fiber ulvsunda, internet ulvsunda, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}