import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Rörsjöstaden Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Rörsjöstaden, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband rörsjöstaden, fiber rörsjöstaden, internet rörsjöstaden, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Rörsjöstaden',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Rörsjöstaden","type":"stadsdel","population":8000,"region":"Skåne","fiberCoverage":88,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":415,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-rorsjostaden,fiber-rorsjostaden,internet-rorsjostaden',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function RrsjstadenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Rörsjöstaden<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Rörsjöstaden-boende. 88% fiber-täckning",
    cta: "Få din Rörsjöstaden-rekommendation",
    cityName: "Rörsjöstaden",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 88,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Rörsjöstaden är ett stadsdel i Malmö med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Rörsjöstaden ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Rörsjöstaden är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Rörsjöstaden ligger på cirka 415 SEK per månad.","seoKeywords":"bredband rörsjöstaden, fiber rörsjöstaden, internet rörsjöstaden, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}