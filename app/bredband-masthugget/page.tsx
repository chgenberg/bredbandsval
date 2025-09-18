import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Masthugget Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Masthugget, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband masthugget, fiber masthugget, internet masthugget, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Masthugget',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Masthugget","type":"stadsdel","population":12000,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":420,"searchVolume":900,"competition":"medium"}',
    'ai-local-keywords': 'bredband-masthugget,fiber-masthugget,internet-masthugget',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '900',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function MasthuggetBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Masthugget<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Masthugget – jämför priser, hastigheter och leverantörer",
    cta: "Se Masthugget-alternativ",
    cityName: "Masthugget",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 89,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 12000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "medium",
    localContent: {"localInfo":"Masthugget är ett stadsdel i Göteborg med cirka 12,000 invånare.","fiberInfo":"Fiber-täckningen i Masthugget ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Masthugget är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Masthugget ligger på cirka 420 SEK per månad.","seoKeywords":"bredband masthugget, fiber masthugget, internet masthugget, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}