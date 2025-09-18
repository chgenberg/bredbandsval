import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Albano Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Albano, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband albano, fiber albano, internet albano, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Albano',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Albano","type":"område","population":1500,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":460,"searchVolume":600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-albano,fiber-albano,internet-albano',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '600',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function AlbanoBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Albano<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Albano – jämför priser, hastigheter och leverantörer",
    cta: "Se Albano-alternativ",
    cityName: "Albano",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 1500,
    areaType: "område",
    searchVolume: 600,
    competition: "medium",
    localContent: {"localInfo":"Albano är ett område i Stockholm med cirka 1,500 invånare.","fiberInfo":"Fiber-täckningen i Albano ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Albano är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Albano ligger på cirka 460 SEK per månad.","seoKeywords":"bredband albano, fiber albano, internet albano, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}