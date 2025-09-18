import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Angered Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Angered, Göteborg. Jämför Telia, Comhem, Tele2 och fler leverantörer. 81% fiber-täckning. AI-analys gratis.",
  keywords: "bredband angered, fiber angered, internet angered, göteborg, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Angered',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Angered","type":"stadsdel","population":50000,"region":"Västra Götaland","fiberCoverage":81,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":380,"searchVolume":1500,"competition":"medium"}',
    'ai-local-keywords': 'bredband-angered,fiber-angered,internet-angered',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '380-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1500',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function AngeredBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Angered<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Angered-boende. 81% fiber-täckning",
    cta: "Få din Angered-rekommendation",
    cityName: "Angered",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 81,
    avgPrice: 380,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 50000,
    areaType: "stadsdel",
    searchVolume: 1500,
    competition: "medium",
    localContent: {"localInfo":"Angered är ett stadsdel i Göteborg med cirka 50,000 invånare.","fiberInfo":"Fiber-täckningen i Angered ligger på 81%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Angered är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Angered ligger på cirka 380 SEK per månad.","seoKeywords":"bredband angered, fiber angered, internet angered, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}