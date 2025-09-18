import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stigbergsliden Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Stigbergsliden, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband stigbergsliden, fiber stigbergsliden, internet stigbergsliden, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stigbergsliden',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Stigbergsliden","type":"område","population":3000,"region":"Västra Götaland","fiberCoverage":90,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":700,"competition":"medium"}',
    'ai-local-keywords': 'bredband-stigbergsliden,fiber-stigbergsliden,internet-stigbergsliden',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '700',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Göteborg'
  }
};

export default function StigbergslidenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Stigbergsliden<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Stigbergsliden-boende. 90% fiber-täckning",
    cta: "Få din Stigbergsliden-rekommendation",
    cityName: "Stigbergsliden",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 90,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 3000,
    areaType: "område",
    searchVolume: 700,
    competition: "medium",
    localContent: {"localInfo":"Stigbergsliden är ett område i Göteborg med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Stigbergsliden ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Stigbergsliden är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Stigbergsliden ligger på cirka 425 SEK per månad.","seoKeywords":"bredband stigbergsliden, fiber stigbergsliden, internet stigbergsliden, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}