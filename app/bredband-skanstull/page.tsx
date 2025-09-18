import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skanstull 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Skanstull. Jämför Bredband2, Tre, Bahnhof, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband skanstull, fiber skanstull, internet skanstull, tv paket skanstull, bredband2 tre bahnhof comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skanstull',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Skanstull","population":24455,"region":"Dalarna","fiberCoverage":93,"topProviders":["Bredband2","Tre","Bahnhof","Comhem"],"avgPrice":410}',
    'ai-local-keywords': 'bredband-skanstull,fiber-skanstull,internet-skanstull',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '410-sek',
    'ai-top-providers': 'Bredband2,Tre,Bahnhof,Comhem'
  }
};

export default function SkanstullBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skanstull<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Skanstull – jämför priser och hastigheter gratis",
    cta: "Se Skanstull-alternativ nu",
    cityName: "Skanstull",
    region: "Dalarna",
    fiberCoverage: 93,
    avgPrice: 410,
    topProviders: ["Bredband2","Tre","Bahnhof","Comhem"],
    population: 24455
  };

  return <LandingPage localizedContent={localizedContent} />;
}