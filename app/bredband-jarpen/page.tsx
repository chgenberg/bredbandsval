import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Järpen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Järpen. Jämför Tele2, Telenor, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband järpen, fiber järpen, internet järpen, tv paket järpen, tele2 telenor tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Järpen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Järpen","population":22414,"region":"Skåne","fiberCoverage":92,"topProviders":["Tele2","Telenor","Tre"],"avgPrice":355}',
    'ai-local-keywords': 'bredband-jarpen,fiber-jarpen,internet-jarpen',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '355-sek',
    'ai-top-providers': 'Tele2,Telenor,Tre'
  }
};

export default function JärpenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Järpen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Järpen – jämför priser och hastigheter gratis",
    cta: "Se Järpen-alternativ nu",
    cityName: "Järpen",
    region: "Skåne",
    fiberCoverage: 92,
    avgPrice: 355,
    topProviders: ["Tele2","Telenor","Tre"],
    population: 22414
  };

  return <LandingPage localizedContent={localizedContent} />;
}