import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stadshagen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Stadshagen. Jämför Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband stadshagen, fiber stadshagen, internet stadshagen, tv paket stadshagen, telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stadshagen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Stadshagen","population":13903,"region":"Västra Götaland","fiberCoverage":71,"topProviders":["Telia","Comhem"],"avgPrice":352}',
    'ai-local-keywords': 'bredband-stadshagen,fiber-stadshagen,internet-stadshagen',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '352-sek',
    'ai-top-providers': 'Telia,Comhem'
  }
};

export default function StadshagenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Stadshagen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Stadshagen – jämför priser och hastigheter gratis",
    cta: "Se Stadshagen-alternativ nu",
    cityName: "Stadshagen",
    region: "Västra Götaland",
    fiberCoverage: 71,
    avgPrice: 352,
    topProviders: ["Telia","Comhem"],
    population: 13903
  };

  return <LandingPage localizedContent={localizedContent} />;
}