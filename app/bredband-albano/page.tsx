import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Albano 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Albano. Jämför Tele2, Telia, Comhem, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband albano, fiber albano, internet albano, tv paket albano, tele2 telia comhem fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Albano',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Albano","population":9056,"region":"Jämtland","fiberCoverage":75,"topProviders":["Tele2","Telia","Comhem","Fibio"],"avgPrice":412}',
    'ai-local-keywords': 'bredband-albano,fiber-albano,internet-albano',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '412-sek',
    'ai-top-providers': 'Tele2,Telia,Comhem,Fibio'
  }
};

export default function AlbanoBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Albano<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Albano – jämför priser och hastigheter gratis",
    cta: "Se Albano-alternativ nu",
    cityName: "Albano",
    region: "Jämtland",
    fiberCoverage: 75,
    avgPrice: 412,
    topProviders: ["Tele2","Telia","Comhem","Fibio"],
    population: 9056
  };

  return <LandingPage localizedContent={localizedContent} />;
}