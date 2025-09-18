import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Centralstationen Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Centralstationen, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband centralstationen, fiber centralstationen, internet centralstationen, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Centralstationen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Centralstationen","type":"område","population":800,"region":"Skåne","fiberCoverage":94,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":445,"searchVolume":1800,"competition":"high"}',
    'ai-local-keywords': 'bredband-centralstationen,fiber-centralstationen,internet-centralstationen',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '445-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1800',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Malmö'
  }
};

export default function CentralstationenBredbandsPage() {
  const localizedContent = {
    headline: "Centralstationens smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Centralstationen – personlig AI-rekommendation",
    cta: "Jämför Centralstationen-leverantörer",
    cityName: "Centralstationen",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 94,
    avgPrice: 445,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 800,
    areaType: "område",
    searchVolume: 1800,
    competition: "high",
    localContent: {"localInfo":"Centralstationen är ett område i Malmö med cirka 800 invånare.","fiberInfo":"Fiber-täckningen i Centralstationen ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Centralstationen är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Centralstationen ligger på cirka 445 SEK per månad.","seoKeywords":"bredband centralstationen, fiber centralstationen, internet centralstationen, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}