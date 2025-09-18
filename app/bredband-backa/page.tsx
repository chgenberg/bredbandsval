import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Backa Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Backa, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband backa, fiber backa, internet backa, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Backa',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Backa","type":"stadsdel","population":25000,"region":"Västra Götaland","fiberCoverage":85,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":400,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-backa,fiber-backa,internet-backa',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function BackaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Backa<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Backa-boende. 85% fiber-täckning",
    cta: "Få din Backa-rekommendation",
    cityName: "Backa",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 85,
    avgPrice: 400,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Backa är ett stadsdel i Göteborg med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Backa ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Backa är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Backa ligger på cirka 400 SEK per månad.","seoKeywords":"bredband backa, fiber backa, internet backa, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}