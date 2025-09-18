import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Mölndal Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Mölndal, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband mölndal, fiber mölndal, internet mölndal, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Mölndal',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Mölndal","type":"kommun","population":67000,"region":"Västra Götaland","fiberCoverage":90,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":430,"searchVolume":2000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-molndal,fiber-molndal,internet-molndal',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '2000',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Göteborg'
  }
};

export default function MlndalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Mölndal<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Mölndal-boende. 90% fiber-täckning",
    cta: "Få din Mölndal-rekommendation",
    cityName: "Mölndal",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 90,
    avgPrice: 430,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 67000,
    areaType: "kommun",
    searchVolume: 2000,
    competition: "medium",
    localContent: {"localInfo":"Mölndal är ett kommun i Göteborg med cirka 67,000 invånare.","fiberInfo":"Fiber-täckningen i Mölndal ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Mölndal är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Mölndal ligger på cirka 430 SEK per månad.","seoKeywords":"bredband mölndal, fiber mölndal, internet mölndal, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}