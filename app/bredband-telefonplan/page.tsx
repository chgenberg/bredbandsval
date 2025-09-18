import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Telefonplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Telefonplan. Jämför Bredband2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 91% fiber-täckning. Helt gratis.",
  keywords: "bredband telefonplan, fiber telefonplan, internet telefonplan, tv paket telefonplan, bredband2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Telefonplan',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Telefonplan","population":20621,"region":"Stockholm","fiberCoverage":91,"topProviders":["Bredband2","Tre"],"avgPrice":385}',
    'ai-local-keywords': 'bredband-telefonplan,fiber-telefonplan,internet-telefonplan',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Bredband2,Tre'
  }
};

export default function TelefonplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Telefonplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Telefonplan – jämför priser och hastigheter gratis",
    cta: "Se Telefonplan-alternativ nu",
    cityName: "Telefonplan",
    region: "Stockholm",
    fiberCoverage: 91,
    avgPrice: 385,
    topProviders: ["Bredband2","Tre"],
    population: 20621
  };

  return <LandingPage localizedContent={localizedContent} />;
}