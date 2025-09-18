import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Svedala Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Svedala, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 85% fiber-täckning. AI-analys gratis.",
  keywords: "bredband svedala, fiber svedala, internet svedala, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Svedala',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Svedala","type":"kommun","population":21000,"region":"Skåne","fiberCoverage":85,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":405,"searchVolume":900,"competition":"low"}',
    'ai-local-keywords': 'bredband-svedala,fiber-svedala,internet-svedala',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '900',
    'ai-competition': 'low',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Malmö'
  }
};

export default function SvedalaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Svedala<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Svedala, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Svedala-leverantörer",
    cityName: "Svedala",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 85,
    avgPrice: 405,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 21000,
    areaType: "kommun",
    searchVolume: 900,
    competition: "low",
    localContent: {"localInfo":"Svedala är ett kommun i Malmö med cirka 21,000 invånare.","fiberInfo":"Fiber-täckningen i Svedala ligger på 85%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Svedala är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Svedala ligger på cirka 405 SEK per månad.","seoKeywords":"bredband svedala, fiber svedala, internet svedala, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}