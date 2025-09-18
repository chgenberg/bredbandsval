import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Redbergslid Göteborg 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Redbergslid, Göteborg. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband redbergslid, fiber redbergslid, internet redbergslid, göteborg, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Redbergslid',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Redbergslid","type":"stadsdel","population":6000,"region":"Västra Götaland","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":600,"competition":"low"}',
    'ai-local-keywords': 'bredband-redbergslid,fiber-redbergslid,internet-redbergslid',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '600',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Göteborg'
  }
};

export default function RedbergslidBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Redbergslid<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Redbergslid, Göteborg. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Redbergslid-leverantörer",
    cityName: "Redbergslid",
    region: "Västra Götaland",
    parentCity: "Göteborg",
    fiberCoverage: 88,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 6000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "low",
    localContent: {"localInfo":"Redbergslid är ett stadsdel i Göteborg med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Redbergslid ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Redbergslid är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Redbergslid ligger på cirka 415 SEK per månad.","seoKeywords":"bredband redbergslid, fiber redbergslid, internet redbergslid, göteborg"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}