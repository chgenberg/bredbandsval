import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kungälv Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kungälv, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 84% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kungälv, fiber kungälv, internet kungälv, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kungälv',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kungälv","type":"kommun","population":45000,"region":"Västra Götaland","fiberCoverage":84,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":1300,"competition":"medium"}',
    'ai-local-keywords': 'bredband-kungalv,fiber-kungalv,internet-kungalv',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1300',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Göteborg'
  }
};

export default function KunglvBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Kungälv<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Kungälv-boende. 84% fiber-täckning",
    cta: "Få din Kungälv-rekommendation",
    cityName: "Kungälv",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 84,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 45000,
    areaType: "kommun",
    searchVolume: 1300,
    competition: "medium",
    localContent: {"localInfo":"Kungälv är ett kommun i Göteborg med cirka 45,000 invånare.","fiberInfo":"Fiber-täckningen i Kungälv ligger på 84%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kungälv är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Kungälv ligger på cirka 405 SEK per månad.","seoKeywords":"bredband kungälv, fiber kungälv, internet kungälv, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}