import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Björkhagen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Björkhagen. Jämför Comhem, Bahnhof, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 74% fiber-täckning. Helt gratis.",
  keywords: "bredband björkhagen, fiber björkhagen, internet björkhagen, tv paket björkhagen, comhem bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Björkhagen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Björkhagen","population":21586,"region":"Skåne","fiberCoverage":74,"topProviders":["Comhem","Bahnhof","Bredband2"],"avgPrice":345}',
    'ai-local-keywords': 'bredband-bjorkhagen,fiber-bjorkhagen,internet-bjorkhagen',
    'ai-fiber-coverage': '74%',
    'ai-avg-price': '345-sek',
    'ai-top-providers': 'Comhem,Bahnhof,Bredband2'
  }
};

export default function BjörkhagenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Björkhagen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Björkhagen – jämför priser och hastigheter gratis",
    cta: "Se Björkhagen-alternativ nu",
    cityName: "Björkhagen",
    region: "Skåne",
    fiberCoverage: 74,
    avgPrice: 345,
    topProviders: ["Comhem","Bahnhof","Bredband2"],
    population: 21586
  };

  return <LandingPage localizedContent={localizedContent} />;
}