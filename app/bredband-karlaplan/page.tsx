import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Karlaplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Karlaplan. Jämför Fibio, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband karlaplan, fiber karlaplan, internet karlaplan, tv paket karlaplan, fibio telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Karlaplan',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Karlaplan","population":14708,"region":"Västerbotten","fiberCoverage":85,"topProviders":["Fibio","Telia"],"avgPrice":403}',
    'ai-local-keywords': 'bredband-karlaplan,fiber-karlaplan,internet-karlaplan',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '403-sek',
    'ai-top-providers': 'Fibio,Telia'
  }
};

export default function KarlaplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Karlaplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Karlaplan – jämför priser och hastigheter gratis",
    cta: "Se Karlaplan-alternativ nu",
    cityName: "Karlaplan",
    region: "Västerbotten",
    fiberCoverage: 85,
    avgPrice: 403,
    topProviders: ["Fibio","Telia"],
    population: 14708
  };

  return <LandingPage localizedContent={localizedContent} />;
}