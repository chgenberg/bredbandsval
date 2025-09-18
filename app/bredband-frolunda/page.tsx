import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Frölunda Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Frölunda, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband frölunda, fiber frölunda, internet frölunda, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Frölunda',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Frölunda","type":"stadsdel","population":35000,"region":"Västra Götaland","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-frolunda,fiber-frolunda,internet-frolunda',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function FrlundaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Frölunda<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Frölunda – jämför priser, hastigheter och leverantörer",
    cta: "Se Frölunda-alternativ",
    cityName: "Frölunda",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 88,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 35000,
    areaType: "stadsdel",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Frölunda är ett stadsdel i Göteborg med cirka 35,000 invånare.","fiberInfo":"Fiber-täckningen i Frölunda ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Frölunda är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Frölunda ligger på cirka 420 SEK per månad.","seoKeywords":"bredband frölunda, fiber frölunda, internet frölunda, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}