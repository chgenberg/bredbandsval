import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vällingby Centrum Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Vällingby Centrum, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband vällingby centrum, fiber vällingby centrum, internet vällingby centrum, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vällingby Centrum',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Vällingby Centrum","type":"område","population":5000,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-vallingby-centrum,fiber-vallingby-centrum,internet-vallingby-centrum',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function VllingbyCentrumBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Vällingby Centrum<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Vällingby Centrum-boende. 87% fiber-täckning",
    cta: "Få din Vällingby Centrum-rekommendation",
    cityName: "Vällingby Centrum",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 5000,
    areaType: "område",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Vällingby Centrum är ett område i Stockholm med cirka 5,000 invånare.","fiberInfo":"Fiber-täckningen i Vällingby Centrum ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Vällingby Centrum är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Vällingby Centrum ligger på cirka 420 SEK per månad.","seoKeywords":"bredband vällingby centrum, fiber vällingby centrum, internet vällingby centrum, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}