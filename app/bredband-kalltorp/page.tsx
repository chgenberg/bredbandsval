import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kålltorp Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kålltorp, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kålltorp, fiber kålltorp, internet kålltorp, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kålltorp',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kålltorp","type":"stadsdel","population":4000,"region":"Västra Götaland","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-kalltorp,fiber-kalltorp,internet-kalltorp',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function KlltorpBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kålltorp<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kålltorp, Göteborg. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Kålltorp-leverantörer",
    cityName: "Kålltorp",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 86,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Kålltorp är ett stadsdel i Göteborg med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Kålltorp ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kålltorp är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Kålltorp ligger på cirka 405 SEK per månad.","seoKeywords":"bredband kålltorp, fiber kålltorp, internet kålltorp, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}