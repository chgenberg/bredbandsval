import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Duved 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Duved. Jämför Tele2, Fibio, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 84% fiber-täckning. Helt gratis.",
  keywords: "bredband duved, fiber duved, internet duved, tv paket duved, tele2 fibio telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Duved',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Duved","population":13875,"region":"Dalarna","fiberCoverage":84,"topProviders":["Tele2","Fibio","Telia"],"avgPrice":396}',
    'ai-local-keywords': 'bredband-duved,fiber-duved,internet-duved',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '396-sek',
    'ai-top-providers': 'Tele2,Fibio,Telia'
  }
};

export default function DuvedBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Duved<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Duved – jämför priser och hastigheter gratis",
    cta: "Se Duved-alternativ nu",
    cityName: "Duved",
    region: "Dalarna",
    fiberCoverage: 84,
    avgPrice: 396,
    topProviders: ["Tele2","Fibio","Telia"],
    population: 13875
  };

  return <LandingPage localizedContent={localizedContent} />;
}