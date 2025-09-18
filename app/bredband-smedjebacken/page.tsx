import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Smedjebacken 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Smedjebacken. Jämför Tre, Tele2, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 65% fiber-täckning. Helt gratis.",
  keywords: "bredband smedjebacken, fiber smedjebacken, internet smedjebacken, tv paket smedjebacken, tre tele2 comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Smedjebacken',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Smedjebacken","population":27375,"region":"Dalarna","fiberCoverage":65,"topProviders":["Tre","Tele2","Comhem"],"avgPrice":397}',
    'ai-local-keywords': 'bredband-smedjebacken,fiber-smedjebacken,internet-smedjebacken',
    'ai-fiber-coverage': '65%',
    'ai-avg-price': '397-sek',
    'ai-top-providers': 'Tre,Tele2,Comhem'
  }
};

export default function SmedjebackenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Smedjebacken<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Smedjebacken – jämför priser och hastigheter gratis",
    cta: "Se Smedjebacken-alternativ nu",
    cityName: "Smedjebacken",
    region: "Dalarna",
    fiberCoverage: 65,
    avgPrice: 397,
    topProviders: ["Tre","Tele2","Comhem"],
    population: 27375
  };

  return <LandingPage localizedContent={localizedContent} />;
}