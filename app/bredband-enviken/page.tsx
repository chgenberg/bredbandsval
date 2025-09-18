import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Enviken 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Enviken. Jämför Bredband2, Tele2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 76% fiber-täckning. Helt gratis.",
  keywords: "bredband enviken, fiber enviken, internet enviken, tv paket enviken, bredband2 tele2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Enviken',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Enviken","population":7868,"region":"Jämtland","fiberCoverage":76,"topProviders":["Bredband2","Tele2","Bahnhof"],"avgPrice":336}',
    'ai-local-keywords': 'bredband-enviken,fiber-enviken,internet-enviken',
    'ai-fiber-coverage': '76%',
    'ai-avg-price': '336-sek',
    'ai-top-providers': 'Bredband2,Tele2,Bahnhof'
  }
};

export default function EnvikenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Enviken<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Enviken – jämför priser och hastigheter gratis",
    cta: "Se Enviken-alternativ nu",
    cityName: "Enviken",
    region: "Jämtland",
    fiberCoverage: 76,
    avgPrice: 336,
    topProviders: ["Bredband2","Tele2","Bahnhof"],
    population: 7868
  };

  return <LandingPage localizedContent={localizedContent} />;
}