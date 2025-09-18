import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Johanneberg Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Johanneberg, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband johanneberg, fiber johanneberg, internet johanneberg, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Johanneberg',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Johanneberg","type":"stadsdel","population":25000,"region":"Västra Götaland","fiberCoverage":92,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":435,"searchVolume":1600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-johanneberg,fiber-johanneberg,internet-johanneberg',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1600',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function JohannebergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Johanneberg<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Johanneberg-boende. 92% fiber-täckning",
    cta: "Få din Johanneberg-rekommendation",
    cityName: "Johanneberg",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 92,
    avgPrice: 435,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 1600,
    competition: "medium",
    localContent: {"localInfo":"Johanneberg är ett stadsdel i Göteborg med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Johanneberg ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Johanneberg är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Johanneberg ligger på cirka 435 SEK per månad.","seoKeywords":"bredband johanneberg, fiber johanneberg, internet johanneberg, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}