import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Härjedalen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Härjedalen. Jämför Bahnhof, Fibio, Tele2, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband härjedalen, fiber härjedalen, internet härjedalen, tv paket härjedalen, bahnhof fibio tele2 comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Härjedalen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Härjedalen","population":32890,"region":"Stockholm","fiberCoverage":66,"topProviders":["Bahnhof","Fibio","Tele2","Comhem"],"avgPrice":330}',
    'ai-local-keywords': 'bredband-harjedalen,fiber-harjedalen,internet-harjedalen',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '330-sek',
    'ai-top-providers': 'Bahnhof,Fibio,Tele2,Comhem'
  }
};

export default function HärjedalenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Härjedalen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Härjedalen – jämför priser och hastigheter gratis",
    cta: "Se Härjedalen-alternativ nu",
    cityName: "Härjedalen",
    region: "Stockholm",
    fiberCoverage: 66,
    avgPrice: 330,
    topProviders: ["Bahnhof","Fibio","Tele2","Comhem"],
    population: 32890
  };

  return <LandingPage localizedContent={localizedContent} />;
}