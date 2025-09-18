import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Stockholm 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 95% fiber-täckning. Helt gratis.",
  keywords: "bredband stockholm, fiber stockholm, internet stockholm, tv paket stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Stockholm',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Stockholm","population":975551,"region":"Stockholm","fiberCoverage":95,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":450}',
    'ai-local-keywords': 'bredband-stockholm,fiber-stockholm,internet-stockholm',
    'ai-fiber-coverage': '95%',
    'ai-avg-price': '450-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2'
  }
};

export default function StockholmBredbandsPage() {
  const localizedContent = {
    headline: "Stockholms mest kompletta<br/>bredband & TV-jämförelse",
    subtext: "Jämför alla leverantörer i Stockholm på sekunder – AI-driven analys helt gratis",
    cta: "Hitta bästa bredband i Stockholm",
    cityName: "Stockholm",
    region: "Stockholm",
    fiberCoverage: 95,
    avgPrice: 450,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 975551
  };

  return <LandingPage localizedContent={localizedContent} />;
}