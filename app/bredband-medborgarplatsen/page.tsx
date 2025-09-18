import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Medborgarplatsen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Medborgarplatsen, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 95% fiber-täckning. AI-analys gratis.",
  keywords: "bredband medborgarplatsen, fiber medborgarplatsen, internet medborgarplatsen, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Medborgarplatsen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Medborgarplatsen","type":"område","population":5000,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":460,"searchVolume":2000,"competition":"high"}',
    'ai-local-keywords': 'bredband-medborgarplatsen,fiber-medborgarplatsen,internet-medborgarplatsen',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2000',
    'ai-competition': 'high',
    'ai-area-type': 'område',
    'ai-parent-city': 'Stockholm'
  }
};

export default function MedborgarplatsenBredbandsPage() {
  const localizedContent = {
    headline: "Medborgarplatsens smartaste<br/>bredbandsval",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Medborgarplatsen – personlig AI-rekommendation",
    cta: "Jämför Medborgarplatsen-leverantörer",
    cityName: "Medborgarplatsen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 5000,
    areaType: "område",
    searchVolume: 2000,
    competition: "high",
    localContent: {"localInfo":"Medborgarplatsen är ett område i Stockholm med cirka 5,000 invånare.","fiberInfo":"Fiber-täckningen i Medborgarplatsen ligger på 95%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Medborgarplatsen är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Medborgarplatsen ligger på cirka 460 SEK per månad.","seoKeywords":"bredband medborgarplatsen, fiber medborgarplatsen, internet medborgarplatsen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}