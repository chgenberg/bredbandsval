import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Reimersholme Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Reimersholme, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband reimersholme, fiber reimersholme, internet reimersholme, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Reimersholme',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Reimersholme","type":"ö","population":2500,"region":"Stockholm","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":455,"searchVolume":700,"competition":"medium"}',
    'ai-local-keywords': 'bredband-reimersholme,fiber-reimersholme,internet-reimersholme',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '455-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '700',
    'ai-competition': 'medium',
    'ai-area-type': 'ö',
    'ai-parent-city': 'Stockholm'
  }
};

export default function ReimersholmeBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Reimersholme<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Reimersholme – jämför priser, hastigheter och leverantörer",
    cta: "Se Reimersholme-alternativ",
    cityName: "Reimersholme",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 93,
    avgPrice: 455,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 2500,
    areaType: "ö",
    searchVolume: 700,
    competition: "medium",
    localContent: {"localInfo":"Reimersholme är ett ö i Stockholm med cirka 2,500 invånare.","fiberInfo":"Fiber-täckningen i Reimersholme ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Reimersholme är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Reimersholme ligger på cirka 455 SEK per månad.","seoKeywords":"bredband reimersholme, fiber reimersholme, internet reimersholme, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}