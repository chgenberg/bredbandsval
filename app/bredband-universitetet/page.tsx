import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Universitetet Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Universitetet, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband universitetet, fiber universitetet, internet universitetet, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Universitetet',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Universitetet","type":"område","population":5000,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":470,"searchVolume":1200,"competition":"high"}',
    'ai-local-keywords': 'bredband-universitetet,fiber-universitetet,internet-universitetet',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '470-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '1200',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function UniversitetetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Universitetet<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Universitetet, Stockholm. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Universitetet",
    cityName: "Universitetet",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 470,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 5000,
    areaType: "område",
    searchVolume: 1200,
    competition: "high",
    localContent: {"localInfo":"Universitetet är ett område i Stockholm med cirka 5,000 invånare.","fiberInfo":"Fiber-täckningen i Universitetet ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Universitetet är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Universitetet ligger på cirka 470 SEK per månad.","seoKeywords":"bredband universitetet, fiber universitetet, internet universitetet, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}