import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Beckholmen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Beckholmen. Jämför Fibio, Telenor, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 79% fiber-täckning. Helt gratis.",
  keywords: "bredband beckholmen, fiber beckholmen, internet beckholmen, tv paket beckholmen, fibio telenor telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Beckholmen',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Beckholmen","population":23015,"region":"Gävleborg","fiberCoverage":79,"topProviders":["Fibio","Telenor","Telia"],"avgPrice":395}',
    'ai-local-keywords': 'bredband-beckholmen,fiber-beckholmen,internet-beckholmen',
    'ai-fiber-coverage': '79%',
    'ai-avg-price': '395-sek',
    'ai-top-providers': 'Fibio,Telenor,Telia'
  }
};

export default function BeckholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Beckholmen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Beckholmen – jämför priser och hastigheter gratis",
    cta: "Se Beckholmen-alternativ nu",
    cityName: "Beckholmen",
    region: "Gävleborg",
    fiberCoverage: 79,
    avgPrice: 395,
    topProviders: ["Fibio","Telenor","Telia"],
    population: 23015
  };

  return <LandingPage localizedContent={localizedContent} />;
}