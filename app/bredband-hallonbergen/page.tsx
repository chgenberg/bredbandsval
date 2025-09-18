import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hallonbergen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hallonbergen, Stockholm. Jämför Telia, Comhem, Tele2 och fler leverantörer. 83% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hallonbergen, fiber hallonbergen, internet hallonbergen, stockholm, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hallonbergen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hallonbergen","type":"stadsdel","population":4000,"region":"Stockholm","fiberCoverage":83,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-hallonbergen,fiber-hallonbergen,internet-hallonbergen',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function HallonbergenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hallonbergen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Hallonbergen, Stockholm. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Hallonbergen-leverantörer",
    cityName: "Hallonbergen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 83,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Hallonbergen är ett stadsdel i Stockholm med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Hallonbergen ligger på 83%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hallonbergen är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Hallonbergen ligger på cirka 400 SEK per månad.","seoKeywords":"bredband hallonbergen, fiber hallonbergen, internet hallonbergen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}