import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gärdet Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Gärdet, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband gärdet, fiber gärdet, internet gärdet, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gärdet',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Gärdet","type":"stadsdel","population":4000,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":480,"searchVolume":1100,"competition":"high"}',
    'ai-local-keywords': 'bredband-gardet,fiber-gardet,internet-gardet',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '480-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1100',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function GrdetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Gärdet<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Gärdet, Stockholm. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Gärdet",
    cityName: "Gärdet",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 480,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 1100,
    competition: "high",
    localContent: {"localInfo":"Gärdet är ett stadsdel i Stockholm med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Gärdet ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Gärdet är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Gärdet ligger på cirka 480 SEK per månad.","seoKeywords":"bredband gärdet, fiber gärdet, internet gärdet, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}