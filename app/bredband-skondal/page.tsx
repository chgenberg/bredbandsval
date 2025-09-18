import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sköndal Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Sköndal, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband sköndal, fiber sköndal, internet sköndal, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sköndal',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Sköndal","type":"stadsdel","population":13000,"region":"Stockholm","fiberCoverage":89,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":900,"competition":"low"}',
    'ai-local-keywords': 'bredband-skondal,fiber-skondal,internet-skondal',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '900',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SkndalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sköndal<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Sköndal, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Sköndal-leverantörer",
    cityName: "Sköndal",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 13000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "low",
    localContent: {"localInfo":"Sköndal är ett stadsdel i Stockholm med cirka 13,000 invånare.","fiberInfo":"Fiber-täckningen i Sköndal ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Sköndal är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Sköndal ligger på cirka 435 SEK per månad.","seoKeywords":"bredband sköndal, fiber sköndal, internet sköndal, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}