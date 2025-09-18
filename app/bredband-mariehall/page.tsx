import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Mariehäll 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Mariehäll. Jämför Telia, Telenor, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband mariehäll, fiber mariehäll, internet mariehäll, tv paket mariehäll, telia telenor comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Mariehäll',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Mariehäll","population":8072,"region":"Skåne","fiberCoverage":80,"topProviders":["Telia","Telenor","Comhem"],"avgPrice":323}',
    'ai-local-keywords': 'bredband-mariehall,fiber-mariehall,internet-mariehall',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '323-sek',
    'ai-top-providers': 'Telia,Telenor,Comhem'
  }
};

export default function MariehällBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Mariehäll<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Mariehäll – jämför priser och hastigheter gratis",
    cta: "Se Mariehäll-alternativ nu",
    cityName: "Mariehäll",
    region: "Skåne",
    fiberCoverage: 80,
    avgPrice: 323,
    topProviders: ["Telia","Telenor","Comhem"],
    population: 8072
  };

  return <LandingPage localizedContent={localizedContent} />;
}