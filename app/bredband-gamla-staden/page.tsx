import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gamla Staden Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Gamla Staden, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband gamla staden, fiber gamla staden, internet gamla staden, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gamla Staden',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Gamla Staden","type":"stadsdel","population":8000,"region":"Skåne","fiberCoverage":92,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":435,"searchVolume":2200,"competition":"high"}',
    'ai-local-keywords': 'bredband-gamla-staden,fiber-gamla-staden,internet-gamla-staden',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '435-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '2200',
    'ai-competition': 'high',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function GamlaStadenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Gamla Staden<br/>– Bästa valet 2025",
    subtext: "Jämför alla leverantörer i Gamla Staden, Malmö. AI-analys på 30 sekunder – helt gratis",
    cta: "Hitta bästa bredband Gamla Staden",
    cityName: "Gamla Staden",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 92,
    avgPrice: 435,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 8000,
    areaType: "stadsdel",
    searchVolume: 2200,
    competition: "high",
    localContent: {"localInfo":"Gamla Staden är ett stadsdel i Malmö med cirka 8,000 invånare.","fiberInfo":"Fiber-täckningen i Gamla Staden ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Gamla Staden är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Gamla Staden ligger på cirka 435 SEK per månad.","seoKeywords":"bredband gamla staden, fiber gamla staden, internet gamla staden, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}