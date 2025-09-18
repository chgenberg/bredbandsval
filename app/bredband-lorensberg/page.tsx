import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lorensberg Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lorensberg, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lorensberg, fiber lorensberg, internet lorensberg, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lorensberg',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lorensberg","type":"stadsdel","population":15000,"region":"Västra Götaland","fiberCoverage":94,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":445,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-lorensberg,fiber-lorensberg,internet-lorensberg',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function LorensbergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Lorensberg<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Lorensberg-boende. 94% fiber-täckning",
    cta: "Få din Lorensberg-rekommendation",
    cityName: "Lorensberg",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 94,
    avgPrice: 445,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 15000,
    areaType: "stadsdel",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Lorensberg är ett stadsdel i Göteborg med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Lorensberg ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lorensberg är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Lorensberg ligger på cirka 445 SEK per månad.","seoKeywords":"bredband lorensberg, fiber lorensberg, internet lorensberg, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}