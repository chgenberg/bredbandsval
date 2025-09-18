import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Järnbrott Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Järnbrott, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband järnbrott, fiber järnbrott, internet järnbrott, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Järnbrott',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Järnbrott","type":"stadsdel","population":6000,"region":"Västra Götaland","fiberCoverage":86,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":410,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-jarnbrott,fiber-jarnbrott,internet-jarnbrott',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function JrnbrottBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Järnbrott<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Järnbrott, Göteborg. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Järnbrott-leverantörer",
    cityName: "Järnbrott",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 86,
    avgPrice: 410,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 6000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Järnbrott är ett stadsdel i Göteborg med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Järnbrott ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Järnbrott är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Järnbrott ligger på cirka 410 SEK per månad.","seoKeywords":"bredband järnbrott, fiber järnbrott, internet järnbrott, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}