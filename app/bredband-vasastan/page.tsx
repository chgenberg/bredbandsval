import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vasastan Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Vasastan, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband vasastan, fiber vasastan, internet vasastan, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vasastan',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Vasastan","type":"stadsdel","population":35000,"region":"Västra Götaland","fiberCoverage":93,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":440,"searchVolume":2000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-vasastan,fiber-vasastan,internet-vasastan',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '2000',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function VasastanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Vasastan<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Vasastan-boende. 93% fiber-täckning",
    cta: "Få din Vasastan-rekommendation",
    cityName: "Vasastan",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 93,
    avgPrice: 440,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 35000,
    areaType: "stadsdel",
    searchVolume: 2000,
    competition: "medium",
    localContent: {"localInfo":"Vasastan är ett stadsdel i Göteborg med cirka 35,000 invånare.","fiberInfo":"Fiber-täckningen i Vasastan ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Vasastan är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Vasastan ligger på cirka 440 SEK per månad.","seoKeywords":"bredband vasastan, fiber vasastan, internet vasastan, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}