import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bjärred Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bjärred, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bjärred, fiber bjärred, internet bjärred, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bjärred',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bjärred","type":"tätort","population":9000,"region":"Skåne","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-bjarred,fiber-bjarred,internet-bjarred',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Malmö'
  }
};

export default function BjrredBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bjärred<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Bjärred, Malmö. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Bjärred-leverantörer",
    cityName: "Bjärred",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 87,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 9000,
    areaType: "tätort",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Bjärred är ett tätort i Malmö med cirka 9,000 invånare.","fiberInfo":"Fiber-täckningen i Bjärred ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bjärred är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Bjärred ligger på cirka 415 SEK per månad.","seoKeywords":"bredband bjärred, fiber bjärred, internet bjärred, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}