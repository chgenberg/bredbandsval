import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ovanåker 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ovanåker. Jämför Telenor, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband ovanåker, fiber ovanåker, internet ovanåker, tv paket ovanåker, telenor bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ovanåker',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ovanåker","population":17099,"region":"Jämtland","fiberCoverage":93,"topProviders":["Telenor","Bahnhof"],"avgPrice":372}',
    'ai-local-keywords': 'bredband-ovanaker,fiber-ovanaker,internet-ovanaker',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '372-sek',
    'ai-top-providers': 'Telenor,Bahnhof'
  }
};

export default function OvanåkerBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ovanåker<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ovanåker – jämför priser och hastigheter gratis",
    cta: "Se Ovanåker-alternativ nu",
    cityName: "Ovanåker",
    region: "Jämtland",
    fiberCoverage: 93,
    avgPrice: 372,
    topProviders: ["Telenor","Bahnhof"],
    population: 17099
  };

  return <LandingPage localizedContent={localizedContent} />;
}