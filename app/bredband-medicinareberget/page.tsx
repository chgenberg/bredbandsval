import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Medicinareberget Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Medicinareberget, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband medicinareberget, fiber medicinareberget, internet medicinareberget, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Medicinareberget',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Medicinareberget","type":"område","population":1500,"region":"Västra Götaland","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-medicinareberget,fiber-medicinareberget,internet-medicinareberget',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function MedicinarebergetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Medicinareberget<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Medicinareberget-boende. 93% fiber-täckning",
    cta: "Få din Medicinareberget-rekommendation",
    cityName: "Medicinareberget",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 93,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 1500,
    areaType: "område",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Medicinareberget är ett område i Göteborg med cirka 1,500 invånare.","fiberInfo":"Fiber-täckningen i Medicinareberget ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Medicinareberget är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Medicinareberget ligger på cirka 440 SEK per månad.","seoKeywords":"bredband medicinareberget, fiber medicinareberget, internet medicinareberget, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}