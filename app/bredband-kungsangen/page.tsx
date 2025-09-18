import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kungsängen Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Kungsängen, Stockholm. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 86% fiber-täckning. AI-analys gratis.",
  keywords: "bredband kungsängen, fiber kungsängen, internet kungsängen, stockholm, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kungsängen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Kungsängen","type":"tätort","population":10000,"region":"Stockholm","fiberCoverage":86,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":425,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-kungsangen,fiber-kungsangen,internet-kungsangen',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'tätort',
    'ai-parent-city': 'Stockholm'
  }
};

export default function KungsngenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kungsängen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Kungsängen, Stockholm. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Kungsängen-leverantörer",
    cityName: "Kungsängen",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 86,
    avgPrice: 425,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 10000,
    areaType: "tätort",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Kungsängen är ett tätort i Stockholm med cirka 10,000 invånare.","fiberInfo":"Fiber-täckningen i Kungsängen ligger på 86%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Kungsängen är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Kungsängen ligger på cirka 425 SEK per månad.","seoKeywords":"bredband kungsängen, fiber kungsängen, internet kungsängen, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}