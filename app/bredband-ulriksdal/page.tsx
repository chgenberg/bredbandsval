import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ulriksdal 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ulriksdal. Jämför Bredband2, Telia, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 77% fiber-täckning. Helt gratis.",
  keywords: "bredband ulriksdal, fiber ulriksdal, internet ulriksdal, tv paket ulriksdal, bredband2 telia tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ulriksdal',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ulriksdal","population":17546,"region":"Västra Götaland","fiberCoverage":77,"topProviders":["Bredband2","Telia","Tre"],"avgPrice":329}',
    'ai-local-keywords': 'bredband-ulriksdal,fiber-ulriksdal,internet-ulriksdal',
    'ai-fiber-coverage': '77%',
    'ai-avg-price': '329-sek',
    'ai-top-providers': 'Bredband2,Telia,Tre'
  }
};

export default function UlriksdalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ulriksdal<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ulriksdal – jämför priser och hastigheter gratis",
    cta: "Se Ulriksdal-alternativ nu",
    cityName: "Ulriksdal",
    region: "Västra Götaland",
    fiberCoverage: 77,
    avgPrice: 329,
    topProviders: ["Bredband2","Telia","Tre"],
    population: 17546
  };

  return <LandingPage localizedContent={localizedContent} />;
}