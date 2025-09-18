import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rosersberg Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Rosersberg, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband rosersberg, fiber rosersberg, internet rosersberg, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rosersberg',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Rosersberg","type":"tätort","population":6000,"region":"Stockholm","fiberCoverage":85,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-rosersberg,fiber-rosersberg,internet-rosersberg',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Stockholm'
  }
};

export default function RosersbergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rosersberg<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Rosersberg, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Rosersberg-leverantörer",
    cityName: "Rosersberg",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 85,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 6000,
    areaType: "tätort",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Rosersberg är ett tätort i Stockholm med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Rosersberg ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Rosersberg är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Rosersberg ligger på cirka 420 SEK per månad.","seoKeywords":"bredband rosersberg, fiber rosersberg, internet rosersberg, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}