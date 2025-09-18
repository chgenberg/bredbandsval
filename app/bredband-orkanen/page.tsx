import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Orkanen Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Orkanen, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband orkanen, fiber orkanen, internet orkanen, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Orkanen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Orkanen","type":"område","population":2000,"region":"Skåne","fiberCoverage":91,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-orkanen,fiber-orkanen,internet-orkanen',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function OrkanenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Orkanen<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Orkanen-boende. 91% fiber-täckning",
    cta: "Få din Orkanen-rekommendation",
    cityName: "Orkanen",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 91,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 2000,
    areaType: "område",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Orkanen är ett område i Malmö med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Orkanen ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Orkanen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Orkanen ligger på cirka 430 SEK per månad.","seoKeywords":"bredband orkanen, fiber orkanen, internet orkanen, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}