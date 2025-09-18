import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Thorildsplan Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Thorildsplan, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband thorildsplan, fiber thorildsplan, internet thorildsplan, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Thorildsplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Thorildsplan","type":"område","population":1500,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":460,"searchVolume":600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-thorildsplan,fiber-thorildsplan,internet-thorildsplan',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '600',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function ThorildsplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Thorildsplan<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Thorildsplan-boende. 94% fiber-täckning",
    cta: "Få din Thorildsplan-rekommendation",
    cityName: "Thorildsplan",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 1500,
    areaType: "område",
    searchVolume: 600,
    competition: "medium",
    localContent: {"localInfo":"Thorildsplan är ett område i Stockholm med cirka 1,500 invånare.","fiberInfo":"Fiber-täckningen i Thorildsplan ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Thorildsplan är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Thorildsplan ligger på cirka 460 SEK per månad.","seoKeywords":"bredband thorildsplan, fiber thorildsplan, internet thorildsplan, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}