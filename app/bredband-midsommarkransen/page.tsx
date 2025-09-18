import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Midsommarkransen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Midsommarkransen. Jämför Tele2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband midsommarkransen, fiber midsommarkransen, internet midsommarkransen, tv paket midsommarkransen, tele2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Midsommarkransen',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Midsommarkransen","population":11244,"region":"Gävleborg","fiberCoverage":71,"topProviders":["Tele2","Tre"],"avgPrice":376}',
    'ai-local-keywords': 'bredband-midsommarkransen,fiber-midsommarkransen,internet-midsommarkransen',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '376-sek',
    'ai-top-providers': 'Tele2,Tre'
  }
};

export default function MidsommarkransenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Midsommarkransen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Midsommarkransen – jämför priser och hastigheter gratis",
    cta: "Se Midsommarkransen-alternativ nu",
    cityName: "Midsommarkransen",
    region: "Gävleborg",
    fiberCoverage: 71,
    avgPrice: 376,
    topProviders: ["Tele2","Tre"],
    population: 11244
  };

  return <LandingPage localizedContent={localizedContent} />;
}