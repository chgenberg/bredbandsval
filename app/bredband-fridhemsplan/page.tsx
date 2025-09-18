import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Fridhemsplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Fridhemsplan, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband fridhemsplan, fiber fridhemsplan, internet fridhemsplan, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Fridhemsplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Fridhemsplan","type":"område","population":2500,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":460,"searchVolume":1000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-fridhemsplan,fiber-fridhemsplan,internet-fridhemsplan',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1000',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function FridhemsplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Fridhemsplan<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Fridhemsplan-boende. 94% fiber-täckning",
    cta: "Få din Fridhemsplan-rekommendation",
    cityName: "Fridhemsplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 2500,
    areaType: "område",
    searchVolume: 1000,
    competition: "medium",
    localContent: {"localInfo":"Fridhemsplan är ett område i Stockholm med cirka 2,500 invånare.","fiberInfo":"Fiber-täckningen i Fridhemsplan ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Fridhemsplan är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Fridhemsplan ligger på cirka 460 SEK per månad.","seoKeywords":"bredband fridhemsplan, fiber fridhemsplan, internet fridhemsplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}