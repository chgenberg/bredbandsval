import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Handöl 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Handöl. Jämför Tre, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 76% fiber-täckning. Helt gratis.",
  keywords: "bredband handöl, fiber handöl, internet handöl, tv paket handöl, tre tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Handöl',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Handöl","population":5929,"region":"Västerbotten","fiberCoverage":76,"topProviders":["Tre","Tele2"],"avgPrice":322}',
    'ai-local-keywords': 'bredband-handol,fiber-handol,internet-handol',
    'ai-fiber-coverage': '76%',
    'ai-avg-price': '322-sek',
    'ai-top-providers': 'Tre,Tele2'
  }
};

export default function HandölBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Handöl<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Handöl – jämför priser och hastigheter gratis",
    cta: "Se Handöl-alternativ nu",
    cityName: "Handöl",
    region: "Västerbotten",
    fiberCoverage: 76,
    avgPrice: 322,
    topProviders: ["Tre","Tele2"],
    population: 5929
  };

  return <LandingPage localizedContent={localizedContent} />;
}