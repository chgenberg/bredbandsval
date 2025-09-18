import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tensta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tensta. Jämför Bredband2, Comhem, Fibio, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband tensta, fiber tensta, internet tensta, tv paket tensta, bredband2 comhem fibio telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tensta',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tensta","population":18300,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Bredband2","Comhem","Fibio","Telia"],"avgPrice":363}',
    'ai-local-keywords': 'bredband-tensta,fiber-tensta,internet-tensta',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '363-sek',
    'ai-top-providers': 'Bredband2,Comhem,Fibio,Telia'
  }
};

export default function TenstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tensta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tensta – jämför priser och hastigheter gratis",
    cta: "Se Tensta-alternativ nu",
    cityName: "Tensta",
    region: "Västra Götaland",
    fiberCoverage: 89,
    avgPrice: 363,
    topProviders: ["Bredband2","Comhem","Fibio","Telia"],
    population: 18300
  };

  return <LandingPage localizedContent={localizedContent} />;
}