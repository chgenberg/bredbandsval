import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Knivsta 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Knivsta. Jämför Telenor, Tele2, Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 70% fiber-täckning. Helt gratis.",
  keywords: "bredband knivsta, fiber knivsta, internet knivsta, tv paket knivsta, telenor tele2 telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Knivsta',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Knivsta","population":7632,"region":"Västra Götaland","fiberCoverage":70,"topProviders":["Telenor","Tele2","Telia","Comhem"],"avgPrice":359}',
    'ai-local-keywords': 'bredband-knivsta,fiber-knivsta,internet-knivsta',
    'ai-fiber-coverage': '70%',
    'ai-avg-price': '359-sek',
    'ai-top-providers': 'Telenor,Tele2,Telia,Comhem'
  }
};

export default function KnivstaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Knivsta<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Knivsta – jämför priser och hastigheter gratis",
    cta: "Se Knivsta-alternativ nu",
    cityName: "Knivsta",
    region: "Västra Götaland",
    fiberCoverage: 70,
    avgPrice: 359,
    topProviders: ["Telenor","Tele2","Telia","Comhem"],
    population: 7632
  };

  return <LandingPage localizedContent={localizedContent} />;
}