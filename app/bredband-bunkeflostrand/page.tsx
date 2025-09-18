import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bunkeflostrand Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bunkeflostrand, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bunkeflostrand, fiber bunkeflostrand, internet bunkeflostrand, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bunkeflostrand',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bunkeflostrand","type":"stadsdel","population":8000,"region":"Skåne","fiberCoverage":90,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":700,"competition":"medium"}',
    'ai-local-keywords': 'bredband-bunkeflostrand,fiber-bunkeflostrand,internet-bunkeflostrand',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '700',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function BunkeflostrandBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Bunkeflostrand<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Bunkeflostrand – jämför priser, hastigheter och leverantörer",
    cta: "Se Bunkeflostrand-alternativ",
    cityName: "Bunkeflostrand",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 90,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "medium",
    localContent: {"localInfo":"Bunkeflostrand är ett stadsdel i Malmö med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Bunkeflostrand ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bunkeflostrand är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Bunkeflostrand ligger på cirka 425 SEK per månad.","seoKeywords":"bredband bunkeflostrand, fiber bunkeflostrand, internet bunkeflostrand, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}