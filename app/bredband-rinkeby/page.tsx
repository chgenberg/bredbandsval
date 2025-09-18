import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rinkeby Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Rinkeby, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 82% fiber-täckning. AI-analys gratis.",
  keywords: "bredband rinkeby, fiber rinkeby, internet rinkeby, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rinkeby',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Rinkeby","type":"stadsdel","population":8000,"region":"Västra Götaland","fiberCoverage":82,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":385,"searchVolume":450,"competition":"low"}',
    'ai-local-keywords': 'bredband-rinkeby,fiber-rinkeby,internet-rinkeby',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '450',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function RinkebyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Rinkeby<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Rinkeby, Göteborg. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Rinkeby-leverantörer",
    cityName: "Rinkeby",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 82,
    avgPrice: 385,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 450,
    competition: "low",
    localContent: {"localInfo":"Rinkeby är ett stadsdel i Göteborg med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Rinkeby ligger på 82%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Rinkeby är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Rinkeby ligger på cirka 385 SEK per månad.","seoKeywords":"bredband rinkeby, fiber rinkeby, internet rinkeby, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}