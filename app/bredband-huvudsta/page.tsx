import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Huvudsta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Huvudsta. Jämför Telia, Tre, Comhem, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 70% fiber-täckning. Helt gratis.",
  keywords: "bredband huvudsta, fiber huvudsta, internet huvudsta, tv paket huvudsta, telia tre comhem fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Huvudsta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Huvudsta","population":23553,"region":"Stockholm","fiberCoverage":70,"topProviders":["Telia","Tre","Comhem","Fibio"],"avgPrice":339}',
    'ai-local-keywords': 'bredband-huvudsta,fiber-huvudsta,internet-huvudsta',
    'ai-fiber-coverage': '70%',
    'ai-avg-price': '339-sek',
    'ai-top-providers': 'Telia,Tre,Comhem,Fibio'
  }
};

export default function HuvudstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Huvudsta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Huvudsta – jämför priser och hastigheter gratis",
    cta: "Se Huvudsta-alternativ nu",
    cityName: "Huvudsta",
    region: "Stockholm",
    fiberCoverage: 70,
    avgPrice: 339,
    topProviders: ["Telia","Tre","Comhem","Fibio"],
    population: 23553
  };

  return <LandingPage localizedContent={localizedContent} />;
}