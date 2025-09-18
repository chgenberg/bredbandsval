import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hovås Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Hovås, Göteborg. Jämför Telia, Bahnhof, Comhem och fler leverantörer. 90% fiber-täckning. AI-analys gratis.",
  keywords: "bredband hovås, fiber hovås, internet hovås, göteborg, telia bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hovås',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Hovås","type":"stadsdel","population":4000,"region":"Västra Götaland","fiberCoverage":90,"topProviders":["Telia","Bahnhof","Comhem"],"avgPrice":435,"searchVolume":500,"competition":"low"}',
    'ai-local-keywords': 'bredband-hovas,fiber-hovas,internet-hovas',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Bahnhof,Comhem',
    'ai-search-volume': '500',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function HovsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hovås<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Hovås, Göteborg. Jämför Telia, Bahnhof, Comhem och fler",
    cta: "Jämför Hovås-leverantörer",
    cityName: "Hovås",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 90,
    avgPrice: 435,
    topProviders: ["Telia","Bahnhof","Comhem"],
    population: 4000,
    areaType: "stadsdel",
    searchVolume: 500,
    competition: "low",
    localContent: {"localInfo":"Hovås är ett stadsdel i Göteborg med cirka 4,000 invånare.","fiberInfo":"Fiber-täckningen i Hovås ligger på 90%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Hovås är Telia, Bahnhof, Comhem.","priceInfo":"Genomsnittspriset för bredband i Hovås ligger på cirka 435 SEK per månad.","seoKeywords":"bredband hovås, fiber hovås, internet hovås, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}