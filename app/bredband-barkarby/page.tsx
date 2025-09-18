import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Barkarby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Barkarby. Jämför Fibio, Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband barkarby, fiber barkarby, internet barkarby, tv paket barkarby, fibio telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Barkarby',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Barkarby","population":30349,"region":"Dalarna","fiberCoverage":80,"topProviders":["Fibio","Telia","Comhem"],"avgPrice":321}',
    'ai-local-keywords': 'bredband-barkarby,fiber-barkarby,internet-barkarby',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '321-sek',
    'ai-top-providers': 'Fibio,Telia,Comhem'
  }
};

export default function BarkarbyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Barkarby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Barkarby – jämför priser och hastigheter gratis",
    cta: "Se Barkarby-alternativ nu",
    cityName: "Barkarby",
    region: "Dalarna",
    fiberCoverage: 80,
    avgPrice: 321,
    topProviders: ["Fibio","Telia","Comhem"],
    population: 30349
  };

  return <LandingPage localizedContent={localizedContent} />;
}