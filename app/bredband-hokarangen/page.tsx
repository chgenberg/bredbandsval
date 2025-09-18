import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hökarängen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hökarängen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hökarängen, fiber hökarängen, internet hökarängen, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hökarängen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hökarängen","type":"stadsdel","population":26000,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":1100,"competition":"low"}',
    'ai-local-keywords': 'bredband-hokarangen,fiber-hokarangen,internet-hokarangen',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1100',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function HkarngenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hökarängen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Hökarängen, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Hökarängen-leverantörer",
    cityName: "Hökarängen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 26000,
    areaType: "stadsdel",
    searchVolume: 1100,
    competition: "low",
    localContent: {"localInfo":"Hökarängen är ett stadsdel i Stockholm med cirka 26,000 invånare.","fiberInfo":"Fiber-täckningen i Hökarängen ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hökarängen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Hökarängen ligger på cirka 415 SEK per månad.","seoKeywords":"bredband hökarängen, fiber hökarängen, internet hökarängen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}