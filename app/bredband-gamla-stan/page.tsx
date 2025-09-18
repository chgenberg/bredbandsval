import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gamla Stan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gamla Stan. Jämför Fibio, Telia, Tre, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband gamla stan, fiber gamla stan, internet gamla stan, tv paket gamla stan, fibio telia tre comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gamla Stan',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gamla Stan","population":20000,"region":"Västerbotten","fiberCoverage":75,"topProviders":["Fibio","Telia","Tre","Comhem"],"avgPrice":354}',
    'ai-local-keywords': 'bredband-gamla-stan,fiber-gamla-stan,internet-gamla-stan',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '354-sek',
    'ai-top-providers': 'Fibio,Telia,Tre,Comhem'
  }
};

export default function GamlaStanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gamla Stan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gamla Stan – jämför priser och hastigheter gratis",
    cta: "Se Gamla Stan-alternativ nu",
    cityName: "Gamla Stan",
    region: "Västerbotten",
    fiberCoverage: 75,
    avgPrice: 354,
    topProviders: ["Fibio","Telia","Tre","Comhem"],
    population: 20000
  };

  return <LandingPage localizedContent={localizedContent} />;
}