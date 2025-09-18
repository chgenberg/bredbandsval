import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Globen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Globen. Jämför Fibio, Tele2, Tre, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband globen, fiber globen, internet globen, tv paket globen, fibio tele2 tre bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Globen',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Globen","population":31503,"region":"Norrbotten","fiberCoverage":69,"topProviders":["Fibio","Tele2","Tre","Bredband2"],"avgPrice":415}',
    'ai-local-keywords': 'bredband-globen,fiber-globen,internet-globen',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Fibio,Tele2,Tre,Bredband2'
  }
};

export default function GlobenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Globen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Globen – jämför priser och hastigheter gratis",
    cta: "Se Globen-alternativ nu",
    cityName: "Globen",
    region: "Norrbotten",
    fiberCoverage: 69,
    avgPrice: 415,
    topProviders: ["Fibio","Tele2","Tre","Bredband2"],
    population: 31503
  };

  return <LandingPage localizedContent={localizedContent} />;
}