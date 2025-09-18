import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bergsjön Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bergsjön, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 83% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bergsjön, fiber bergsjön, internet bergsjön, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bergsjön',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bergsjön","type":"stadsdel","population":14000,"region":"Västra Götaland","fiberCoverage":83,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":390,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-bergsjon,fiber-bergsjon,internet-bergsjon',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '390-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function BergsjnBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bergsjön<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Bergsjön, Göteborg. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Bergsjön-leverantörer",
    cityName: "Bergsjön",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 83,
    avgPrice: 390,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 14000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Bergsjön är ett stadsdel i Göteborg med cirka 14,000 invånare.","fiberInfo":"Fiber-täckningen i Bergsjön ligger på 83%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bergsjön är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Bergsjön ligger på cirka 390 SEK per månad.","seoKeywords":"bredband bergsjön, fiber bergsjön, internet bergsjön, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}