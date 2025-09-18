import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Odenplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Odenplan. Jämför Bredband2, Tele2, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband odenplan, fiber odenplan, internet odenplan, tv paket odenplan, bredband2 tele2 fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Odenplan',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Odenplan","population":12337,"region":"Dalarna","fiberCoverage":93,"topProviders":["Bredband2","Tele2","Fibio"],"avgPrice":340}',
    'ai-local-keywords': 'bredband-odenplan,fiber-odenplan,internet-odenplan',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '340-sek',
    'ai-top-providers': 'Bredband2,Tele2,Fibio'
  }
};

export default function OdenplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Odenplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Odenplan – jämför priser och hastigheter gratis",
    cta: "Se Odenplan-alternativ nu",
    cityName: "Odenplan",
    region: "Dalarna",
    fiberCoverage: 93,
    avgPrice: 340,
    topProviders: ["Bredband2","Tele2","Fibio"],
    population: 12337
  };

  return <LandingPage localizedContent={localizedContent} />;
}