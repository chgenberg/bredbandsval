import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Malmö Universitet Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Malmö Universitet, Malmö. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband malmö universitet, fiber malmö universitet, internet malmö universitet, malmö, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Malmö Universitet',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Malmö Universitet","type":"område","population":5000,"region":"Skåne","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-malmo-universitet,fiber-malmo-universitet,internet-malmo-universitet',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function MalmUniversitetBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Malmö Universitet<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Malmö Universitet – jämför priser, hastigheter och leverantörer",
    cta: "Se Malmö Universitet-alternativ",
    cityName: "Malmö Universitet",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 93,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 5000,
    areaType: "område",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Malmö Universitet är ett område i Malmö med cirka 5,000 invånare.","fiberInfo":"Fiber-täckningen i Malmö Universitet ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Malmö Universitet är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Malmö Universitet ligger på cirka 440 SEK per månad.","seoKeywords":"bredband malmö universitet, fiber malmö universitet, internet malmö universitet, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}