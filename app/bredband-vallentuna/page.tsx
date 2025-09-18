import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vallentuna Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Vallentuna, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband vallentuna, fiber vallentuna, internet vallentuna, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vallentuna',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Vallentuna","type":"kommun","population":31000,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":430,"searchVolume":1100,"competition":"medium"}',
    'ai-local-keywords': 'bredband-vallentuna,fiber-vallentuna,internet-vallentuna',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '430-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1100',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function VallentunaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Vallentuna<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Vallentuna-boende. 87% fiber-täckning",
    cta: "Få din Vallentuna-rekommendation",
    cityName: "Vallentuna",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 430,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 31000,
    areaType: "kommun",
    searchVolume: 1100,
    competition: "medium",
    localContent: {"localInfo":"Vallentuna är ett kommun i Stockholm med cirka 31,000 invånare.","fiberInfo":"Fiber-täckningen i Vallentuna ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Vallentuna är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Vallentuna ligger på cirka 430 SEK per månad.","seoKeywords":"bredband vallentuna, fiber vallentuna, internet vallentuna, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}