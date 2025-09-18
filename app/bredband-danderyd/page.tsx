import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Danderyd 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Danderyd. Jämför Bredband2, Fibio, Telia, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 90% fiber-täckning. Helt gratis.",
  keywords: "bredband danderyd, fiber danderyd, internet danderyd, tv paket danderyd, bredband2 fibio telia bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Danderyd',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Danderyd","population":30188,"region":"Jämtland","fiberCoverage":90,"topProviders":["Bredband2","Fibio","Telia","Bahnhof"],"avgPrice":342}',
    'ai-local-keywords': 'bredband-danderyd,fiber-danderyd,internet-danderyd',
    'ai-fiber-coverage': '90%',
    'ai-avg-price': '342-sek',
    'ai-top-providers': 'Bredband2,Fibio,Telia,Bahnhof'
  }
};

export default function DanderydBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Danderyd<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Danderyd – jämför priser och hastigheter gratis",
    cta: "Se Danderyd-alternativ nu",
    cityName: "Danderyd",
    region: "Jämtland",
    fiberCoverage: 90,
    avgPrice: 342,
    topProviders: ["Bredband2","Fibio","Telia","Bahnhof"],
    population: 30188
  };

  return <LandingPage localizedContent={localizedContent} />;
}