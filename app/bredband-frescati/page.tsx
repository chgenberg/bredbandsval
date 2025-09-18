import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Frescati Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Frescati, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband frescati, fiber frescati, internet frescati, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Frescati',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Frescati","type":"område","population":2000,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":465,"searchVolume":800,"competition":"medium"}',
    'ai-local-keywords': 'bredband-frescati,fiber-frescati,internet-frescati',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '465-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '800',
    'ai-competition': 'medium',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function FrescatiBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Frescati<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Frescati – jämför priser, hastigheter och leverantörer",
    cta: "Se Frescati-alternativ",
    cityName: "Frescati",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 465,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 2000,
    areaType: "område",
    searchVolume: 800,
    competition: "medium",
    localContent: {"localInfo":"Frescati är ett område i Stockholm med cirka 2,000 invånare.","fiberInfo":"Fiber-täckningen i Frescati ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Frescati är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Frescati ligger på cirka 465 SEK per månad.","seoKeywords":"bredband frescati, fiber frescati, internet frescati, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}