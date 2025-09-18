import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vantör 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vantör. Jämför Bahnhof, Fibio, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband vantör, fiber vantör, internet vantör, tv paket vantör, bahnhof fibio tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vantör',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vantör","population":23299,"region":"Västra Götaland","fiberCoverage":75,"topProviders":["Bahnhof","Fibio","Tre"],"avgPrice":328}',
    'ai-local-keywords': 'bredband-vantor,fiber-vantor,internet-vantor',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '328-sek',
    'ai-top-providers': 'Bahnhof,Fibio,Tre'
  }
};

export default function VantörBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vantör<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vantör – jämför priser och hastigheter gratis",
    cta: "Se Vantör-alternativ nu",
    cityName: "Vantör",
    region: "Västra Götaland",
    fiberCoverage: 75,
    avgPrice: 328,
    topProviders: ["Bahnhof","Fibio","Tre"],
    population: 23299
  };

  return <LandingPage localizedContent={localizedContent} />;
}