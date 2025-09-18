import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Frescati 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Frescati. Jämför Tele2, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 65% fiber-täckning. Helt gratis.",
  keywords: "bredband frescati, fiber frescati, internet frescati, tv paket frescati, tele2 bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Frescati',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Frescati","population":12638,"region":"Jämtland","fiberCoverage":65,"topProviders":["Tele2","Bredband2"],"avgPrice":388}',
    'ai-local-keywords': 'bredband-frescati,fiber-frescati,internet-frescati',
    'ai-fiber-coverage': '65%',
    'ai-avg-price': '388-sek',
    'ai-top-providers': 'Tele2,Bredband2'
  }
};

export default function FrescatiBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Frescati<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Frescati – jämför priser och hastigheter gratis",
    cta: "Se Frescati-alternativ nu",
    cityName: "Frescati",
    region: "Jämtland",
    fiberCoverage: 65,
    avgPrice: 388,
    topProviders: ["Tele2","Bredband2"],
    population: 12638
  };

  return <LandingPage localizedContent={localizedContent} />;
}