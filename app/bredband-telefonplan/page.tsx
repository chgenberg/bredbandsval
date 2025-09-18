import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Telefonplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Telefonplan, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband telefonplan, fiber telefonplan, internet telefonplan, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Telefonplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Telefonplan","type":"stadsdel","population":1200,"region":"Stockholm","fiberCoverage":89,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-telefonplan,fiber-telefonplan,internet-telefonplan',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function TelefonplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Telefonplan<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Telefonplan, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Telefonplan-leverantörer",
    cityName: "Telefonplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 1200,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Telefonplan är ett stadsdel i Stockholm med cirka 1,200 invånare.","fiberInfo":"Fiber-täckningen i Telefonplan ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Telefonplan är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Telefonplan ligger på cirka 435 SEK per månad.","seoKeywords":"bredband telefonplan, fiber telefonplan, internet telefonplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}