import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hammarbyhöjden Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hammarbyhöjden, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 89% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hammarbyhöjden, fiber hammarbyhöjden, internet hammarbyhöjden, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hammarbyhöjden',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hammarbyhöjden","type":"stadsdel","population":25000,"region":"Stockholm","fiberCoverage":89,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":1200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-hammarbyhojden,fiber-hammarbyhojden,internet-hammarbyhojden',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '1200',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function HammarbyhjdenBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Hammarbyhöjden<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Hammarbyhöjden – jämför priser, hastigheter och leverantörer",
    cta: "Se Hammarbyhöjden-alternativ",
    cityName: "Hammarbyhöjden",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 25000,
    areaType: "stadsdel",
    searchVolume: 1200,
    competition: "medium",
    localContent: {"localInfo":"Hammarbyhöjden är ett stadsdel i Stockholm med cirka 25,000 invånare.","fiberInfo":"Fiber-täckningen i Hammarbyhöjden ligger på 89%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hammarbyhöjden är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Hammarbyhöjden ligger på cirka 435 SEK per månad.","seoKeywords":"bredband hammarbyhöjden, fiber hammarbyhöjden, internet hammarbyhöjden, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}