import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hökarängen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hökarängen. Jämför Fibio, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 87% fiber-täckning. Helt gratis.",
  keywords: "bredband hökarängen, fiber hökarängen, internet hökarängen, tv paket hökarängen, fibio telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hökarängen',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hökarängen","population":22285,"region":"Dalarna","fiberCoverage":87,"topProviders":["Fibio","Telenor"],"avgPrice":396}',
    'ai-local-keywords': 'bredband-hokarangen,fiber-hokarangen,internet-hokarangen',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '396-sek',
    'ai-top-providers': 'Fibio,Telenor'
  }
};

export default function HökarängenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hökarängen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hökarängen – jämför priser och hastigheter gratis",
    cta: "Se Hökarängen-alternativ nu",
    cityName: "Hökarängen",
    region: "Dalarna",
    fiberCoverage: 87,
    avgPrice: 396,
    topProviders: ["Fibio","Telenor"],
    population: 22285
  };

  return <LandingPage localizedContent={localizedContent} />;
}