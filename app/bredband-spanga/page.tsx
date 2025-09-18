import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Spånga 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Spånga. Jämför Telia, Fibio, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband spånga, fiber spånga, internet spånga, tv paket spånga, telia fibio comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Spånga',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Spånga","population":8840,"region":"Västra Götaland","fiberCoverage":89,"topProviders":["Telia","Fibio","Comhem"],"avgPrice":361}',
    'ai-local-keywords': 'bredband-spanga,fiber-spanga,internet-spanga',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '361-sek',
    'ai-top-providers': 'Telia,Fibio,Comhem'
  }
};

export default function SpångaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Spånga<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Spånga – jämför priser och hastigheter gratis",
    cta: "Se Spånga-alternativ nu",
    cityName: "Spånga",
    region: "Västra Götaland",
    fiberCoverage: 89,
    avgPrice: 361,
    topProviders: ["Telia","Fibio","Comhem"],
    population: 8840
  };

  return <LandingPage localizedContent={localizedContent} />;
}