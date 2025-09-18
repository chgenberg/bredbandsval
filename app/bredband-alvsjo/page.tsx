import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Älvsjö Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Älvsjö, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband älvsjö, fiber älvsjö, internet älvsjö, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Älvsjö',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Älvsjö","type":"stadsdel","population":6000,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-alvsjo,fiber-alvsjo,internet-alvsjo',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function lvsjBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Älvsjö<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Älvsjö, Göteborg. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Älvsjö-leverantörer",
    cityName: "Älvsjö",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 89,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 6000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Älvsjö är ett stadsdel i Göteborg med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Älvsjö ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Älvsjö är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Älvsjö ligger på cirka 425 SEK per månad.","seoKeywords":"bredband älvsjö, fiber älvsjö, internet älvsjö, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}