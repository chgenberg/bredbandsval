import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Långholmen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Långholmen, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 94% fiber-täckning. AI-analys gratis.",
  keywords: "bredband långholmen, fiber långholmen, internet långholmen, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Långholmen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Långholmen","type":"ö","population":500,"region":"Stockholm","fiberCoverage":94,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":460,"searchVolume":600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-langholmen,fiber-langholmen,internet-langholmen',
    'ai-fiber-coverage': '94%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '600',
    'ai-competition': 'medium',
    'ai-area-type': 'ö',
    'ai-parent-city': 'Stockholm'
  }
};

export default function LngholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Långholmen<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Långholmen-boende. 94% fiber-täckning",
    cta: "Få din Långholmen-rekommendation",
    cityName: "Långholmen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 94,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 500,
    areaType: "ö",
    searchVolume: 600,
    competition: "medium",
    localContent: {"localInfo":"Långholmen är ett ö i Stockholm med cirka 500 invånare.","fiberInfo":"Fiber-täckningen i Långholmen ligger på 94%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Långholmen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Långholmen ligger på cirka 460 SEK per månad.","seoKeywords":"bredband långholmen, fiber långholmen, internet långholmen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}