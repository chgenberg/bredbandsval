import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lund 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Lund. Jämför Telia, Comhem, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband lund, fiber lund, internet lund, tv paket lund, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lund',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Lund","population":94703,"region":"Skåne","fiberCoverage":89,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":385}',
    'ai-local-keywords': 'bredband-lund,fiber-lund,internet-lund',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '385-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2'
  }
};

export default function LundBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Lund<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Lund – jämför priser och hastigheter gratis",
    cta: "Se Lund-alternativ nu",
    cityName: "Lund",
    region: "Skåne",
    fiberCoverage: 89,
    avgPrice: 385,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 94703
  };

  return <LandingPage localizedContent={localizedContent} />;
}