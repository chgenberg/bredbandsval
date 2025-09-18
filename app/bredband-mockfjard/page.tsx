import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Mockfjärd 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Mockfjärd. Jämför Tele2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband mockfjärd, fiber mockfjärd, internet mockfjärd, tv paket mockfjärd, tele2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Mockfjärd',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Mockfjärd","population":7261,"region":"Stockholm","fiberCoverage":89,"topProviders":["Tele2","Tre"],"avgPrice":332}',
    'ai-local-keywords': 'bredband-mockfjard,fiber-mockfjard,internet-mockfjard',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '332-sek',
    'ai-top-providers': 'Tele2,Tre'
  }
};

export default function MockfjärdBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Mockfjärd<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Mockfjärd – jämför priser och hastigheter gratis",
    cta: "Se Mockfjärd-alternativ nu",
    cityName: "Mockfjärd",
    region: "Stockholm",
    fiberCoverage: 89,
    avgPrice: 332,
    topProviders: ["Tele2","Tre"],
    population: 7261
  };

  return <LandingPage localizedContent={localizedContent} />;
}