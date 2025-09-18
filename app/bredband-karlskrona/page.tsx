import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Karlskrona 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Karlskrona. Jämför Telia, Tele2, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 81% fiber-täckning. Helt gratis.",
  keywords: "bredband karlskrona, fiber karlskrona, internet karlskrona, tv paket karlskrona, telia tele2 bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Karlskrona',
    'geo.position': 'Blekinge',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Karlskrona","population":36304,"region":"Blekinge","fiberCoverage":81,"topProviders":["Telia","Tele2","Bredband2"],"avgPrice":355}',
    'ai-local-keywords': 'bredband-karlskrona,fiber-karlskrona,internet-karlskrona',
    'ai-fiber-coverage': '81%',
    'ai-avg-price': '355-sek',
    'ai-top-providers': 'Telia,Tele2,Bredband2'
  }
};

export default function KarlskronaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Karlskrona<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Karlskrona – jämför priser och hastigheter gratis",
    cta: "Se Karlskrona-alternativ nu",
    cityName: "Karlskrona",
    region: "Blekinge",
    fiberCoverage: 81,
    avgPrice: 355,
    topProviders: ["Telia","Tele2","Bredband2"],
    population: 36304
  };

  return <LandingPage localizedContent={localizedContent} />;
}