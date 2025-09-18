import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Annedal Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Annedal, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband annedal, fiber annedal, internet annedal, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Annedal',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Annedal","type":"stadsdel","population":8000,"region":"Västra Götaland","fiberCoverage":91,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-annedal,fiber-annedal,internet-annedal',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function AnnedalBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Annedal<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Annedal – jämför priser, hastigheter och leverantörer",
    cta: "Se Annedal-alternativ",
    cityName: "Annedal",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 91,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Annedal är ett stadsdel i Göteborg med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Annedal ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Annedal är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Annedal ligger på cirka 430 SEK per månad.","seoKeywords":"bredband annedal, fiber annedal, internet annedal, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}