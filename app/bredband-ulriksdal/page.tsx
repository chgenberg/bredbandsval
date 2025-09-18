import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ulriksdal Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Ulriksdal, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband ulriksdal, fiber ulriksdal, internet ulriksdal, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ulriksdal',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Ulriksdal","type":"område","population":1500,"region":"Stockholm","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":455,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-ulriksdal,fiber-ulriksdal,internet-ulriksdal',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '455-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function UlriksdalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ulriksdal<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Ulriksdal, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Ulriksdal-leverantörer",
    cityName: "Ulriksdal",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 93,
    avgPrice: 455,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 1500,
    areaType: "område",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Ulriksdal är ett område i Stockholm med cirka 1,500 invånare.","fiberInfo":"Fiber-täckningen i Ulriksdal ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Ulriksdal är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Ulriksdal ligger på cirka 455 SEK per månad.","seoKeywords":"bredband ulriksdal, fiber ulriksdal, internet ulriksdal, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}