import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tegefjäll 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tegefjäll. Jämför Tele2, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband tegefjäll, fiber tegefjäll, internet tegefjäll, tv paket tegefjäll, tele2 telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tegefjäll',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tegefjäll","population":27448,"region":"Dalarna","fiberCoverage":69,"topProviders":["Tele2","Telia"],"avgPrice":329}',
    'ai-local-keywords': 'bredband-tegefjall,fiber-tegefjall,internet-tegefjall',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '329-sek',
    'ai-top-providers': 'Tele2,Telia'
  }
};

export default function TegefjällBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tegefjäll<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tegefjäll – jämför priser och hastigheter gratis",
    cta: "Se Tegefjäll-alternativ nu",
    cityName: "Tegefjäll",
    region: "Dalarna",
    fiberCoverage: 69,
    avgPrice: 329,
    topProviders: ["Tele2","Telia"],
    population: 27448
  };

  return <LandingPage localizedContent={localizedContent} />;
}