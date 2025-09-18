import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hägersten 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hägersten. Jämför Tre, Telia, Comhem, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 87% fiber-täckning. Helt gratis.",
  keywords: "bredband hägersten, fiber hägersten, internet hägersten, tv paket hägersten, tre telia comhem bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hägersten',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hägersten","population":7954,"region":"Jämtland","fiberCoverage":87,"topProviders":["Tre","Telia","Comhem","Bredband2"],"avgPrice":368}',
    'ai-local-keywords': 'bredband-hagersten,fiber-hagersten,internet-hagersten',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '368-sek',
    'ai-top-providers': 'Tre,Telia,Comhem,Bredband2'
  }
};

export default function HägerstenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hägersten<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hägersten – jämför priser och hastigheter gratis",
    cta: "Se Hägersten-alternativ nu",
    cityName: "Hägersten",
    region: "Jämtland",
    fiberCoverage: 87,
    avgPrice: 368,
    topProviders: ["Tre","Telia","Comhem","Bredband2"],
    population: 7954
  };

  return <LandingPage localizedContent={localizedContent} />;
}