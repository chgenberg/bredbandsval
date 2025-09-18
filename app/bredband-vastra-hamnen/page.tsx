import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Västra Hamnen Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Västra Hamnen, Malmö. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband västra hamnen, fiber västra hamnen, internet västra hamnen, malmö, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Västra Hamnen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Västra Hamnen","type":"stadsdel","population":25000,"region":"Skåne","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":450,"searchVolume":2400,"competition":"high"}',
    'ai-local-keywords': 'bredband-vastra-hamnen,fiber-vastra-hamnen,internet-vastra-hamnen',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '2400',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function VstraHamnenBredbandsPage() {
  const localizedContent = {
    headline: "Västra Hamnens smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Västra Hamnen – personlig AI-rekommendation",
    cta: "Jämför Västra Hamnen-leverantörer",
    cityName: "Västra Hamnen",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 94,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 2400,
    competition: "high",
    localContent: {"localInfo":"Västra Hamnen är ett stadsdel i Malmö med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Västra Hamnen ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Västra Hamnen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Västra Hamnen ligger på cirka 450 SEK per månad.","seoKeywords":"bredband västra hamnen, fiber västra hamnen, internet västra hamnen, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}