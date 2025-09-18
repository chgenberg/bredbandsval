import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lima 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Lima. Jämför Fibio, Telia, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband lima, fiber lima, internet lima, tv paket lima, fibio telia tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lima',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Lima","population":18939,"region":"Västerbotten","fiberCoverage":75,"topProviders":["Fibio","Telia","Tre"],"avgPrice":380}',
    'ai-local-keywords': 'bredband-lima,fiber-lima,internet-lima',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '380-sek',
    'ai-top-providers': 'Fibio,Telia,Tre'
  }
};

export default function LimaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Lima<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Lima – jämför priser och hastigheter gratis",
    cta: "Se Lima-alternativ nu",
    cityName: "Lima",
    region: "Västerbotten",
    fiberCoverage: 75,
    avgPrice: 380,
    topProviders: ["Fibio","Telia","Tre"],
    population: 18939
  };

  return <LandingPage localizedContent={localizedContent} />;
}