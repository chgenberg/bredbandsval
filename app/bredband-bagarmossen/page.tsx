import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bagarmossen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Bagarmossen. Jämför Tele2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 79% fiber-täckning. Helt gratis.",
  keywords: "bredband bagarmossen, fiber bagarmossen, internet bagarmossen, tv paket bagarmossen, tele2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bagarmossen',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Bagarmossen","population":26743,"region":"Västra Götaland","fiberCoverage":79,"topProviders":["Tele2","Bahnhof"],"avgPrice":341}',
    'ai-local-keywords': 'bredband-bagarmossen,fiber-bagarmossen,internet-bagarmossen',
    'ai-fiber-coverage': '79%',
    'ai-avg-price': '341-sek',
    'ai-top-providers': 'Tele2,Bahnhof'
  }
};

export default function BagarmossenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bagarmossen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Bagarmossen – jämför priser och hastigheter gratis",
    cta: "Se Bagarmossen-alternativ nu",
    cityName: "Bagarmossen",
    region: "Västra Götaland",
    fiberCoverage: 79,
    avgPrice: 341,
    topProviders: ["Tele2","Bahnhof"],
    population: 26743
  };

  return <LandingPage localizedContent={localizedContent} />;
}