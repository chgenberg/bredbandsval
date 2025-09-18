import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vålådalen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vålådalen. Jämför Telenor, Fibio, Tele2, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 81% fiber-täckning. Helt gratis.",
  keywords: "bredband vålådalen, fiber vålådalen, internet vålådalen, tv paket vålådalen, telenor fibio tele2 comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vålådalen',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vålådalen","population":31451,"region":"Västerbotten","fiberCoverage":81,"topProviders":["Telenor","Fibio","Tele2","Comhem"],"avgPrice":338}',
    'ai-local-keywords': 'bredband-valadalen,fiber-valadalen,internet-valadalen',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '338-sek',
    'ai-top-providers': 'Telenor,Fibio,Tele2,Comhem'
  }
};

export default function VålådalenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vålådalen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vålådalen – jämför priser och hastigheter gratis",
    cta: "Se Vålådalen-alternativ nu",
    cityName: "Vålådalen",
    region: "Västerbotten",
    fiberCoverage: 81,
    avgPrice: 338,
    topProviders: ["Telenor","Fibio","Tele2","Comhem"],
    population: 31451
  };

  return <LandingPage localizedContent={localizedContent} />;
}