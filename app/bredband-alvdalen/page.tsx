import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Älvdalen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Älvdalen. Jämför Fibio, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 67% fiber-täckning. Helt gratis.",
  keywords: "bredband älvdalen, fiber älvdalen, internet älvdalen, tv paket älvdalen, fibio tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Älvdalen',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Älvdalen","population":13860,"region":"Jämtland","fiberCoverage":67,"topProviders":["Fibio","Tele2"],"avgPrice":326}',
    'ai-local-keywords': 'bredband-alvdalen,fiber-alvdalen,internet-alvdalen',
    'ai-fiber-coverage': '67%',
    'ai-avg-price': '326-sek',
    'ai-top-providers': 'Fibio,Tele2'
  }
};

export default function ÄlvdalenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Älvdalen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Älvdalen – jämför priser och hastigheter gratis",
    cta: "Se Älvdalen-alternativ nu",
    cityName: "Älvdalen",
    region: "Jämtland",
    fiberCoverage: 67,
    avgPrice: 326,
    topProviders: ["Fibio","Tele2"],
    population: 13860
  };

  return <LandingPage localizedContent={localizedContent} />;
}