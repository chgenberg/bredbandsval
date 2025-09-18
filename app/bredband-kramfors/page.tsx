import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kramfors 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kramfors. Jämför Telia, Comhem, Bredband2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband kramfors, fiber kramfors, internet kramfors, tv paket kramfors, telia comhem bredband2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kramfors',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kramfors","population":21942,"region":"Norrbotten","fiberCoverage":85,"topProviders":["Telia","Comhem","Bredband2","Tre"],"avgPrice":396}',
    'ai-local-keywords': 'bredband-kramfors,fiber-kramfors,internet-kramfors',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '396-sek',
    'ai-top-providers': 'Telia,Comhem,Bredband2,Tre'
  }
};

export default function KramforsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kramfors<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kramfors – jämför priser och hastigheter gratis",
    cta: "Se Kramfors-alternativ nu",
    cityName: "Kramfors",
    region: "Norrbotten",
    fiberCoverage: 85,
    avgPrice: 396,
    topProviders: ["Telia","Comhem","Bredband2","Tre"],
    population: 21942
  };

  return <LandingPage localizedContent={localizedContent} />;
}