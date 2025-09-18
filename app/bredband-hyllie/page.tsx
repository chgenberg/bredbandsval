import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hyllie Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hyllie, Malmö. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hyllie, fiber hyllie, internet hyllie, malmö, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hyllie',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hyllie","type":"stadsdel","population":15000,"region":"Skåne","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":1400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-hyllie,fiber-hyllie,internet-hyllie',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function HyllieBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Hyllie<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Hyllie-boende. 92% fiber-täckning",
    cta: "Få din Hyllie-rekommendation",
    cityName: "Hyllie",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 92,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 15000,
    areaType: "stadsdel",
    searchVolume: 1400,
    competition: "medium",
    localContent: {"localInfo":"Hyllie är ett stadsdel i Malmö med cirka 15,000 invånare.","fiberInfo":"Fiber-täckningen i Hyllie ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hyllie är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Hyllie ligger på cirka 435 SEK per månad.","seoKeywords":"bredband hyllie, fiber hyllie, internet hyllie, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}