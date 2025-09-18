import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Falun 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Falun. Jämför Telia, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 79% fiber-täckning. Helt gratis.",
  keywords: "bredband falun, fiber falun, internet falun, tv paket falun, telia telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Falun',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Falun","population":37291,"region":"Dalarna","fiberCoverage":79,"topProviders":["Telia","Telenor","Fibio"],"avgPrice":350}',
    'ai-local-keywords': 'bredband-falun,fiber-falun,internet-falun',
    'ai-fiber-coverage': '79%',
    'ai-avg-price': '350-sek',
    'ai-top-providers': 'Telia,Telenor,Fibio'
  }
};

export default function FalunBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Falun<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Falun – jämför priser och hastigheter gratis",
    cta: "Se Falun-alternativ nu",
    cityName: "Falun",
    region: "Dalarna",
    fiberCoverage: 79,
    avgPrice: 350,
    topProviders: ["Telia","Telenor","Fibio"],
    population: 37291
  };

  return <LandingPage localizedContent={localizedContent} />;
}