import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hedemora 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hedemora. Jämför Tre, Bahnhof, Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 68% fiber-täckning. Helt gratis.",
  keywords: "bredband hedemora, fiber hedemora, internet hedemora, tv paket hedemora, tre bahnhof telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hedemora',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hedemora","population":27842,"region":"Gävleborg","fiberCoverage":68,"topProviders":["Tre","Bahnhof","Telia","Telenor"],"avgPrice":410}',
    'ai-local-keywords': 'bredband-hedemora,fiber-hedemora,internet-hedemora',
    'ai-fiber-coverage': '68%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Tre,Bahnhof,Telia,Telenor'
  }
};

export default function HedemoraBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hedemora<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hedemora – jämför priser och hastigheter gratis",
    cta: "Se Hedemora-alternativ nu",
    cityName: "Hedemora",
    region: "Gävleborg",
    fiberCoverage: 68,
    avgPrice: 410,
    topProviders: ["Tre","Bahnhof","Telia","Telenor"],
    population: 27842
  };

  return <LandingPage localizedContent={localizedContent} />;
}