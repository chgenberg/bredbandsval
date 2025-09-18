import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Billdal Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Billdal, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband billdal, fiber billdal, internet billdal, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Billdal',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Billdal","type":"stadsdel","population":3000,"region":"Västra Götaland","fiberCoverage":91,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":450,"competition":"low"}',
    'ai-local-keywords': 'bredband-billdal,fiber-billdal,internet-billdal',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '450',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function BilldalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Billdal<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Billdal, Göteborg. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Billdal-leverantörer",
    cityName: "Billdal",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 91,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 3000,
    areaType: "stadsdel",
    searchVolume: 450,
    competition: "low",
    localContent: {"localInfo":"Billdal är ett stadsdel i Göteborg med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Billdal ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Billdal är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Billdal ligger på cirka 440 SEK per månad.","seoKeywords":"bredband billdal, fiber billdal, internet billdal, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}