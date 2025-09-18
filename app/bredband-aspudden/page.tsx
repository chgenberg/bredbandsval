import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Aspudden Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Aspudden, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband aspudden, fiber aspudden, internet aspudden, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Aspudden',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Aspudden","type":"stadsdel","population":2500,"region":"Stockholm","fiberCoverage":90,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":800,"competition":"low"}',
    'ai-local-keywords': 'bredband-aspudden,fiber-aspudden,internet-aspudden',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '800',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function AspuddenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Aspudden<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Aspudden, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Aspudden-leverantörer",
    cityName: "Aspudden",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 90,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 2500,
    areaType: "stadsdel",
    searchVolume: 800,
    competition: "low",
    localContent: {"localInfo":"Aspudden är ett stadsdel i Stockholm med cirka 2,500 invånare.","fiberInfo":"Fiber-täckningen i Aspudden ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Aspudden är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Aspudden ligger på cirka 440 SEK per månad.","seoKeywords":"bredband aspudden, fiber aspudden, internet aspudden, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}