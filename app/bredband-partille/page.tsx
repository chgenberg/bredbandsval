import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Partille Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Partille, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband partille, fiber partille, internet partille, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Partille',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Partille","type":"kommun","population":38000,"region":"Västra Götaland","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-partille,fiber-partille,internet-partille',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Göteborg'
  }
};

export default function PartilleBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Partille<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Partille-boende. 88% fiber-täckning",
    cta: "Få din Partille-rekommendation",
    cityName: "Partille",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 88,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 38000,
    areaType: "kommun",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Partille är ett kommun i Göteborg med cirka 38,000 invånare.","fiberInfo":"Fiber-täckningen i Partille ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Partille är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Partille ligger på cirka 420 SEK per månad.","seoKeywords":"bredband partille, fiber partille, internet partille, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}