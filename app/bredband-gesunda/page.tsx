import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gesunda 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gesunda. Jämför Fibio, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband gesunda, fiber gesunda, internet gesunda, tv paket gesunda, fibio tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gesunda',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gesunda","population":22152,"region":"Norrbotten","fiberCoverage":71,"topProviders":["Fibio","Tele2"],"avgPrice":399}',
    'ai-local-keywords': 'bredband-gesunda,fiber-gesunda,internet-gesunda',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '399-sek',
    'ai-top-providers': 'Fibio,Tele2'
  }
};

export default function GesundaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gesunda<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gesunda – jämför priser och hastigheter gratis",
    cta: "Se Gesunda-alternativ nu",
    cityName: "Gesunda",
    region: "Norrbotten",
    fiberCoverage: 71,
    avgPrice: 399,
    topProviders: ["Fibio","Tele2"],
    population: 22152
  };

  return <LandingPage localizedContent={localizedContent} />;
}