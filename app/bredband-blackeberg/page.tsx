import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Blackeberg Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Blackeberg, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband blackeberg, fiber blackeberg, internet blackeberg, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Blackeberg',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Blackeberg","type":"stadsdel","population":11000,"region":"Stockholm","fiberCoverage":86,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":900,"competition":"low"}',
    'ai-local-keywords': 'bredband-blackeberg,fiber-blackeberg,internet-blackeberg',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '900',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BlackebergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Blackeberg<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Blackeberg, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Blackeberg-leverantörer",
    cityName: "Blackeberg",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 86,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 11000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "low",
    localContent: {"localInfo":"Blackeberg är ett stadsdel i Stockholm med cirka 11,000 invånare.","fiberInfo":"Fiber-täckningen i Blackeberg ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Blackeberg är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Blackeberg ligger på cirka 415 SEK per månad.","seoKeywords":"bredband blackeberg, fiber blackeberg, internet blackeberg, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}