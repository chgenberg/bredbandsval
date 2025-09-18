import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Funäsdalen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Funäsdalen. Jämför Bredband2, Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 82% fiber-täckning. Helt gratis.",
  keywords: "bredband funäsdalen, fiber funäsdalen, internet funäsdalen, tv paket funäsdalen, bredband2 telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Funäsdalen',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Funäsdalen","population":5208,"region":"Gävleborg","fiberCoverage":82,"topProviders":["Bredband2","Telenor","Tele2"],"avgPrice":406}',
    'ai-local-keywords': 'bredband-funasdalen,fiber-funasdalen,internet-funasdalen',
    'ai-fiber-coverage': '82%',
    'ai-avg-price': '406-sek',
    'ai-top-providers': 'Bredband2,Telenor,Tele2'
  }
};

export default function FunäsdalenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Funäsdalen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Funäsdalen – jämför priser och hastigheter gratis",
    cta: "Se Funäsdalen-alternativ nu",
    cityName: "Funäsdalen",
    region: "Gävleborg",
    fiberCoverage: 82,
    avgPrice: 406,
    topProviders: ["Bredband2","Telenor","Tele2"],
    population: 5208
  };

  return <LandingPage localizedContent={localizedContent} />;
}