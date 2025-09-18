import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lomma Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lomma, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lomma, fiber lomma, internet lomma, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lomma',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lomma","type":"kommun","population":24000,"region":"Skåne","fiberCoverage":89,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-lomma,fiber-lomma,internet-lomma',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Malmö'
  }
};

export default function LommaBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Lomma<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Lomma – jämför priser, hastigheter och leverantörer",
    cta: "Se Lomma-alternativ",
    cityName: "Lomma",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 89,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 24000,
    areaType: "kommun",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Lomma är ett kommun i Malmö med cirka 24,000 invånare.","fiberInfo":"Fiber-täckningen i Lomma ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lomma är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Lomma ligger på cirka 425 SEK per månad.","seoKeywords":"bredband lomma, fiber lomma, internet lomma, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}