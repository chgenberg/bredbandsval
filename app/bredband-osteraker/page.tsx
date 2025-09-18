import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Österåker Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Österåker, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband österåker, fiber österåker, internet österåker, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Österåker',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Österåker","type":"kommun","population":43000,"region":"Stockholm","fiberCoverage":85,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":420,"searchVolume":1300,"competition":"medium"}',
    'ai-local-keywords': 'bredband-osteraker,fiber-osteraker,internet-osteraker',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1300',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function sterkerBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Österåker<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Österåker – jämför priser, hastigheter och leverantörer",
    cta: "Se Österåker-alternativ",
    cityName: "Österåker",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 85,
    avgPrice: 420,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 43000,
    areaType: "kommun",
    searchVolume: 1300,
    competition: "medium",
    localContent: {"localInfo":"Österåker är ett kommun i Stockholm med cirka 43,000 invånare.","fiberInfo":"Fiber-täckningen i Österåker ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Österåker är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Österåker ligger på cirka 420 SEK per månad.","seoKeywords":"bredband österåker, fiber österåker, internet österåker, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}