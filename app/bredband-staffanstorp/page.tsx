import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Staffanstorp Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Staffanstorp, Malmö. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 88% fiber-täckning. AI-analys gratis.",
  keywords: "bredband staffanstorp, fiber staffanstorp, internet staffanstorp, malmö, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Staffanstorp',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Staffanstorp","type":"kommun","population":24000,"region":"Skåne","fiberCoverage":88,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":420,"searchVolume":1000,"competition":"medium"}',
    'ai-local-keywords': 'bredband-staffanstorp,fiber-staffanstorp,internet-staffanstorp',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '420-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '1000',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Malmö'
  }
};

export default function StaffanstorpBredbandsPage() {
  const localizedContent = {
    headline: "Bästa bredband i Staffanstorp<br/>– Komplett guide 2025",
    subtext: "Alla tillgängliga alternativ i Staffanstorp – jämför priser, hastigheter och leverantörer",
    cta: "Se Staffanstorp-alternativ",
    cityName: "Staffanstorp",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 88,
    avgPrice: 420,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 24000,
    areaType: "kommun",
    searchVolume: 1000,
    competition: "medium",
    localContent: {"localInfo":"Staffanstorp är ett kommun i Malmö med cirka 24,000 invånare.","fiberInfo":"Fiber-täckningen i Staffanstorp ligger på 88%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Staffanstorp är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Staffanstorp ligger på cirka 420 SEK per månad.","seoKeywords":"bredband staffanstorp, fiber staffanstorp, internet staffanstorp, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}