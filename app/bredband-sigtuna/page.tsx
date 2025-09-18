import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sigtuna Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Sigtuna, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband sigtuna, fiber sigtuna, internet sigtuna, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sigtuna',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Sigtuna","type":"kommun","population":46000,"region":"Stockholm","fiberCoverage":86,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":425,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-sigtuna,fiber-sigtuna,internet-sigtuna',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SigtunaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Sigtuna<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Sigtuna-boende. 86% fiber-täckning",
    cta: "Få din Sigtuna-rekommendation",
    cityName: "Sigtuna",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 86,
    avgPrice: 425,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 46000,
    areaType: "kommun",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Sigtuna är ett kommun i Stockholm med cirka 46,000 invånare.","fiberInfo":"Fiber-täckningen i Sigtuna ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Sigtuna är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Sigtuna ligger på cirka 425 SEK per månad.","seoKeywords":"bredband sigtuna, fiber sigtuna, internet sigtuna, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}