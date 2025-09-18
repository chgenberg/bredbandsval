import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Uppsala 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Uppsala. Jämför Telia, Bahnhof, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 90% fiber-täckning. Helt gratis.",
  keywords: "bredband uppsala, fiber uppsala, internet uppsala, tv paket uppsala, telia bahnhof fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Uppsala',
    'geo.position': 'Uppsala',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Uppsala","population":230767,"region":"Uppsala","fiberCoverage":90,"topProviders":["Telia","Bahnhof","Fibio"],"avgPrice":380}',
    'ai-local-keywords': 'bredband-uppsala,fiber-uppsala,internet-uppsala',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '380-sek',
    'ai-top-providers': 'Telia,Bahnhof,Fibio'
  }
};

export default function UppsalaBredbandsPage() {
  const localizedContent = {
    headline: "Uppsalas smartaste val för<br/>bredband & TV",
    subtext: "Lokala experter hjälper dig hitta perfekt bredband i Uppsala – gratis AI-analys",
    cta: "Jämför Uppsala-leverantörer nu",
    cityName: "Uppsala",
    region: "Uppsala",
    fiberCoverage: 90,
    avgPrice: 380,
    topProviders: ["Telia","Bahnhof","Fibio"],
    population: 230767
  };

  return <LandingPage localizedContent={localizedContent} />;
}