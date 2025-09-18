import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Aspudden 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Aspudden. Jämför Tele2, Comhem, Bredband2, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband aspudden, fiber aspudden, internet aspudden, tv paket aspudden, tele2 comhem bredband2 fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Aspudden',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Aspudden","population":11039,"region":"Dalarna","fiberCoverage":80,"topProviders":["Tele2","Comhem","Bredband2","Fibio"],"avgPrice":386}',
    'ai-local-keywords': 'bredband-aspudden,fiber-aspudden,internet-aspudden',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '386-sek',
    'ai-top-providers': 'Tele2,Comhem,Bredband2,Fibio'
  }
};

export default function AspuddenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Aspudden<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Aspudden – jämför priser och hastigheter gratis",
    cta: "Se Aspudden-alternativ nu",
    cityName: "Aspudden",
    region: "Dalarna",
    fiberCoverage: 80,
    avgPrice: 386,
    topProviders: ["Tele2","Comhem","Bredband2","Fibio"],
    population: 11039
  };

  return <LandingPage localizedContent={localizedContent} />;
}