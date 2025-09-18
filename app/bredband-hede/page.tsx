import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hede 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hede. Jämför Tele2, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 68% fiber-täckning. Helt gratis.",
  keywords: "bredband hede, fiber hede, internet hede, tv paket hede, tele2 telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hede',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hede","population":5370,"region":"Norrbotten","fiberCoverage":68,"topProviders":["Tele2","Telenor"],"avgPrice":387}',
    'ai-local-keywords': 'bredband-hede,fiber-hede,internet-hede',
    'ai-fiber-coverage': '68%',
    'ai-avg-price': '387-sek',
    'ai-top-providers': 'Tele2,Telenor'
  }
};

export default function HedeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hede<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hede – jämför priser och hastigheter gratis",
    cta: "Se Hede-alternativ nu",
    cityName: "Hede",
    region: "Norrbotten",
    fiberCoverage: 68,
    avgPrice: 387,
    topProviders: ["Tele2","Telenor"],
    population: 5370
  };

  return <LandingPage localizedContent={localizedContent} />;
}