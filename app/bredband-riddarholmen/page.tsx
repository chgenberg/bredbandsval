import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Riddarholmen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Riddarholmen, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband riddarholmen, fiber riddarholmen, internet riddarholmen, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Riddarholmen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Riddarholmen","type":"ö","population":300,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":470,"searchVolume":800,"competition":"high"}',
    'ai-local-keywords': 'bredband-riddarholmen,fiber-riddarholmen,internet-riddarholmen',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '470-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '800',
    'ai-competition': 'high',
    'ai-area-type': 'ö',
    'ai-parent-city': 'Stockholm'
  }
};

export default function RiddarholmenBredbandsPage() {
  const localizedContent = {
    headline: "Riddarholmens smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Riddarholmen – personlig AI-rekommendation",
    cta: "Jämför Riddarholmen-leverantörer",
    cityName: "Riddarholmen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 470,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 300,
    areaType: "ö",
    searchVolume: 800,
    competition: "high",
    localContent: {"localInfo":"Riddarholmen är ett ö i Stockholm med cirka 300 invånare.","fiberInfo":"Fiber-täckningen i Riddarholmen ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Riddarholmen är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Riddarholmen ligger på cirka 470 SEK per månad.","seoKeywords":"bredband riddarholmen, fiber riddarholmen, internet riddarholmen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}