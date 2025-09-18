import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Fridhemsplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Fridhemsplan. Jämför Tre, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband fridhemsplan, fiber fridhemsplan, internet fridhemsplan, tv paket fridhemsplan, tre fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Fridhemsplan',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Fridhemsplan","population":12316,"region":"Västerbotten","fiberCoverage":92,"topProviders":["Tre","Fibio"],"avgPrice":382}',
    'ai-local-keywords': 'bredband-fridhemsplan,fiber-fridhemsplan,internet-fridhemsplan',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '382-sek',
    'ai-top-providers': 'Tre,Fibio'
  }
};

export default function FridhemsplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Fridhemsplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Fridhemsplan – jämför priser och hastigheter gratis",
    cta: "Se Fridhemsplan-alternativ nu",
    cityName: "Fridhemsplan",
    region: "Västerbotten",
    fiberCoverage: 92,
    avgPrice: 382,
    topProviders: ["Tre","Fibio"],
    population: 12316
  };

  return <LandingPage localizedContent={localizedContent} />;
}