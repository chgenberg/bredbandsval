import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sofielund Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Sofielund, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband sofielund, fiber sofielund, internet sofielund, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sofielund',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Sofielund","type":"stadsdel","population":10000,"region":"Skåne","fiberCoverage":88,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":415,"searchVolume":900,"competition":"medium"}',
    'ai-local-keywords': 'bredband-sofielund,fiber-sofielund,internet-sofielund',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '900',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function SofielundBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Sofielund<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Sofielund-boende. 88% fiber-täckning",
    cta: "Få din Sofielund-rekommendation",
    cityName: "Sofielund",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 88,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 10000,
    areaType: "stadsdel",
    searchVolume: 900,
    competition: "medium",
    localContent: {"localInfo":"Sofielund är ett stadsdel i Malmö med cirka 10,000 invånare.","fiberInfo":"Fiber-täckningen i Sofielund ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Sofielund är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Sofielund ligger på cirka 415 SEK per månad.","seoKeywords":"bredband sofielund, fiber sofielund, internet sofielund, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}