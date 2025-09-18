import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Barkarby Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Barkarby, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband barkarby, fiber barkarby, internet barkarby, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Barkarby',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Barkarby","type":"stadsdel","population":8000,"region":"Stockholm","fiberCoverage":90,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":440,"searchVolume":700,"competition":"medium"}',
    'ai-local-keywords': 'bredband-barkarby,fiber-barkarby,internet-barkarby',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '440-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '700',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BarkarbyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Barkarby<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Barkarby-boende. 90% fiber-täckning",
    cta: "Få din Barkarby-rekommendation",
    cityName: "Barkarby",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 90,
    avgPrice: 440,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 700,
    competition: "medium",
    localContent: {"localInfo":"Barkarby är ett stadsdel i Stockholm med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Barkarby ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Barkarby är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Barkarby ligger på cirka 440 SEK per månad.","seoKeywords":"bredband barkarby, fiber barkarby, internet barkarby, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}