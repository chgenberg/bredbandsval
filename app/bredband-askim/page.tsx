import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Askim Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Askim, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband askim, fiber askim, internet askim, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Askim',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Askim","type":"stadsdel","population":14000,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-askim,fiber-askim,internet-askim',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function AskimBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Askim<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Askim – jämför priser, hastigheter och leverantörer",
    cta: "Se Askim-alternativ",
    cityName: "Askim",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 89,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 14000,
    areaType: "stadsdel",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Askim är ett stadsdel i Göteborg med cirka 14,000 invånare.","fiberInfo":"Fiber-täckningen i Askim ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Askim är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Askim ligger på cirka 425 SEK per månad.","seoKeywords":"bredband askim, fiber askim, internet askim, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}