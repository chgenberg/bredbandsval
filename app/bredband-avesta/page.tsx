import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Avesta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Avesta. Jämför Tele2, Tre, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 88% fiber-täckning. Helt gratis.",
  keywords: "bredband avesta, fiber avesta, internet avesta, tv paket avesta, tele2 tre bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Avesta',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Avesta","population":33563,"region":"Stockholm","fiberCoverage":88,"topProviders":["Tele2","Tre","Bahnhof"],"avgPrice":327}',
    'ai-local-keywords': 'bredband-avesta,fiber-avesta,internet-avesta',
    'ai-fiber-coverage': '88%',
    'ai-avg-price': '327-sek',
    'ai-top-providers': 'Tele2,Tre,Bahnhof'
  }
};

export default function AvestaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Avesta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Avesta – jämför priser och hastigheter gratis",
    cta: "Se Avesta-alternativ nu",
    cityName: "Avesta",
    region: "Stockholm",
    fiberCoverage: 88,
    avgPrice: 327,
    topProviders: ["Tele2","Tre","Bahnhof"],
    population: 33563
  };

  return <LandingPage localizedContent={localizedContent} />;
}