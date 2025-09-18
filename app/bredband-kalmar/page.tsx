import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kalmar 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kalmar. Jämför Telia, Tele2, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband kalmar, fiber kalmar, internet kalmar, tv paket kalmar, telia tele2 bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kalmar',
    'geo.position': 'Kalmar',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kalmar","population":42634,"region":"Kalmar","fiberCoverage":83,"topProviders":["Telia","Tele2","Bredband2"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-kalmar,fiber-kalmar,internet-kalmar',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Telia,Tele2,Bredband2'
  }
};

export default function KalmarBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kalmar<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kalmar – jämför priser och hastigheter gratis",
    cta: "Se Kalmar-alternativ nu",
    cityName: "Kalmar",
    region: "Kalmar",
    fiberCoverage: 83,
    avgPrice: 360,
    topProviders: ["Telia","Tele2","Bredband2"],
    population: 42634
  };

  return <LandingPage localizedContent={localizedContent} />;
}