import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kungsholmen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kungsholmen, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 96% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kungsholmen, fiber kungsholmen, internet kungsholmen, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kungsholmen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kungsholmen","type":"stadsdel","population":56000,"region":"Stockholm","fiberCoverage":96,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":465,"searchVolume":2400,"competition":"medium"}',
    'ai-local-keywords': 'bredband-kungsholmen,fiber-kungsholmen,internet-kungsholmen',
    'ai-fiber-coverage': '96%',
    'ai-avg-price': '465-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '2400',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function KungsholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Kungsholmen<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Kungsholmen – jämför priser, hastigheter och leverantörer",
    cta: "Se Kungsholmen-alternativ",
    cityName: "Kungsholmen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 96,
    avgPrice: 465,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 56000,
    areaType: "stadsdel",
    searchVolume: 2400,
    competition: "medium",
    localContent: {"localInfo":"Kungsholmen är ett stadsdel i Stockholm med cirka 56,000 invånare.","fiberInfo":"Fiber-täckningen i Kungsholmen ligger på 96%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kungsholmen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Kungsholmen ligger på cirka 465 SEK per månad.","seoKeywords":"bredband kungsholmen, fiber kungsholmen, internet kungsholmen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}