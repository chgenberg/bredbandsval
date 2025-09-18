import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lindholmen Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lindholmen, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lindholmen, fiber lindholmen, internet lindholmen, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lindholmen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lindholmen","type":"stadsdel","population":25000,"region":"Västra Götaland","fiberCoverage":91,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-lindholmen,fiber-lindholmen,internet-lindholmen',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function LindholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Lindholmen<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Lindholmen-boende. 91% fiber-täckning",
    cta: "Få din Lindholmen-rekommendation",
    cityName: "Lindholmen",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 91,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Lindholmen är ett stadsdel i Göteborg med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Lindholmen ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lindholmen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Lindholmen ligger på cirka 435 SEK per månad.","seoKeywords":"bredband lindholmen, fiber lindholmen, internet lindholmen, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}