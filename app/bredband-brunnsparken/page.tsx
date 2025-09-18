import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Brunnsparken Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Brunnsparken, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband brunnsparken, fiber brunnsparken, internet brunnsparken, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Brunnsparken',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Brunnsparken","type":"område","population":800,"region":"Västra Götaland","fiberCoverage":96,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":455,"searchVolume":1400,"competition":"high"}',
    'ai-local-keywords': 'bredband-brunnsparken,fiber-brunnsparken,internet-brunnsparken',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '455-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1400',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function BrunnsparkenBredbandsPage() {
  const localizedContent = {
    headline: "Brunnsparkens smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Brunnsparken – personlig AI-rekommendation",
    cta: "Jämför Brunnsparken-leverantörer",
    cityName: "Brunnsparken",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 96,
    avgPrice: 455,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 800,
    areaType: "område",
    searchVolume: 1400,
    competition: "high",
    localContent: {"localInfo":"Brunnsparken är ett område i Göteborg med cirka 800 invånare.","fiberInfo":"Fiber-täckningen i Brunnsparken ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Brunnsparken är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Brunnsparken ligger på cirka 455 SEK per månad.","seoKeywords":"bredband brunnsparken, fiber brunnsparken, internet brunnsparken, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}