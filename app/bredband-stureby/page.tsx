import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stureby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Stureby. Jämför Bahnhof, Telia, Tre, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 68% fiber-täckning. Helt gratis.",
  keywords: "bredband stureby, fiber stureby, internet stureby, tv paket stureby, bahnhof telia tre comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stureby',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Stureby","population":33711,"region":"Norrbotten","fiberCoverage":68,"topProviders":["Bahnhof","Telia","Tre","Comhem"],"avgPrice":411}',
    'ai-local-keywords': 'bredband-stureby,fiber-stureby,internet-stureby',
    'ai-fiber-coverage': '68%',
    'ai-avg-price': '411-sek',
    'ai-top-providers': 'Bahnhof,Telia,Tre,Comhem'
  }
};

export default function SturebyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Stureby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Stureby – jämför priser och hastigheter gratis",
    cta: "Se Stureby-alternativ nu",
    cityName: "Stureby",
    region: "Norrbotten",
    fiberCoverage: 68,
    avgPrice: 411,
    topProviders: ["Bahnhof","Telia","Tre","Comhem"],
    population: 33711
  };

  return <LandingPage localizedContent={localizedContent} />;
}