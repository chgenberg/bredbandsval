import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Östersund 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Östersund. Jämför Telia, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband östersund, fiber östersund, internet östersund, tv paket östersund, telia telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Östersund',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Östersund","population":31158,"region":"Jämtland","fiberCoverage":75,"topProviders":["Telia","Telenor","Fibio"],"avgPrice":340}',
    'ai-local-keywords': 'bredband-ostersund,fiber-ostersund,internet-ostersund',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '340-sek',
    'ai-top-providers': 'Telia,Telenor,Fibio'
  }
};

export default function ÖstersundBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Östersund<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Östersund – jämför priser och hastigheter gratis",
    cta: "Se Östersund-alternativ nu",
    cityName: "Östersund",
    region: "Jämtland",
    fiberCoverage: 75,
    avgPrice: 340,
    topProviders: ["Telia","Telenor","Fibio"],
    population: 31158
  };

  return <LandingPage localizedContent={localizedContent} />;
}