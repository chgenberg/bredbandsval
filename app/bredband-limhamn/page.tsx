import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Limhamn Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Limhamn, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 91% fiber-täckning. AI-analys gratis.",
  keywords: "bredband limhamn, fiber limhamn, internet limhamn, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Limhamn',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Limhamn","type":"stadsdel","population":25000,"region":"Skåne","fiberCoverage":91,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":430,"searchVolume":1600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-limhamn,fiber-limhamn,internet-limhamn',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1600',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function LimhamnBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Limhamn<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Limhamn-boende. 91% fiber-täckning",
    cta: "Få din Limhamn-rekommendation",
    cityName: "Limhamn",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 91,
    avgPrice: 430,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 1600,
    competition: "medium",
    localContent: {"localInfo":"Limhamn är ett stadsdel i Malmö med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Limhamn ligger på 91%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Limhamn är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Limhamn ligger på cirka 430 SEK per månad.","seoKeywords":"bredband limhamn, fiber limhamn, internet limhamn, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}