import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Leksand 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Leksand. Jämför Tre, Tele2, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 72% fiber-täckning. Helt gratis.",
  keywords: "bredband leksand, fiber leksand, internet leksand, tv paket leksand, tre tele2 bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Leksand',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Leksand","population":31083,"region":"Västerbotten","fiberCoverage":72,"topProviders":["Tre","Tele2","Bredband2"],"avgPrice":335}',
    'ai-local-keywords': 'bredband-leksand,fiber-leksand,internet-leksand',
    'ai-fiber-coverage': '72%',
    'ai-avg-price': '335-sek',
    'ai-top-providers': 'Tre,Tele2,Bredband2'
  }
};

export default function LeksandBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Leksand<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Leksand – jämför priser och hastigheter gratis",
    cta: "Se Leksand-alternativ nu",
    cityName: "Leksand",
    region: "Västerbotten",
    fiberCoverage: 72,
    avgPrice: 335,
    topProviders: ["Tre","Tele2","Bredband2"],
    population: 31083
  };

  return <LandingPage localizedContent={localizedContent} />;
}