import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Väster Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Väster, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband väster, fiber väster, internet väster, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Väster',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Väster","type":"stadsdel","population":22000,"region":"Skåne","fiberCoverage":88,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":415,"searchVolume":1300,"competition":"medium"}',
    'ai-local-keywords': 'bredband-vaster,fiber-vaster,internet-vaster',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '1300',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function VsterBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Väster<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Väster – jämför priser, hastigheter och leverantörer",
    cta: "Se Väster-alternativ",
    cityName: "Väster",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 88,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 22000,
    areaType: "stadsdel",
    searchVolume: 1300,
    competition: "medium",
    localContent: {"localInfo":"Väster är ett stadsdel i Malmö med cirka 22,000 invånare.","fiberInfo":"Fiber-täckningen i Väster ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Väster är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Väster ligger på cirka 415 SEK per månad.","seoKeywords":"bredband väster, fiber väster, internet väster, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}