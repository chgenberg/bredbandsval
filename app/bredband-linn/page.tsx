import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Linné Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Linné, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband linné, fiber linné, internet linné, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Linné',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Linné","type":"stadsdel","population":22000,"region":"Västra Götaland","fiberCoverage":91,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":1500,"competition":"medium"}',
    'ai-local-keywords': 'bredband-linn,fiber-linn,internet-linn',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1500',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function LinnBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Linné<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Linné – jämför priser, hastigheter och leverantörer",
    cta: "Se Linné-alternativ",
    cityName: "Linné",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 91,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 22000,
    areaType: "stadsdel",
    searchVolume: 1500,
    competition: "medium",
    localContent: {"localInfo":"Linné är ett stadsdel i Göteborg med cirka 22,000 invånare.","fiberInfo":"Fiber-täckningen i Linné ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Linné är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Linné ligger på cirka 430 SEK per månad.","seoKeywords":"bredband linné, fiber linné, internet linné, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}