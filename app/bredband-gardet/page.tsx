import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gärdet 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gärdet. Jämför Telia, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband gärdet, fiber gärdet, internet gärdet, tv paket gärdet, telia bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gärdet',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gärdet","population":21043,"region":"Västra Götaland","fiberCoverage":69,"topProviders":["Telia","Bredband2"],"avgPrice":358}',
    'ai-local-keywords': 'bredband-gardet,fiber-gardet,internet-gardet',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '358-sek',
    'ai-top-providers': 'Telia,Bredband2'
  }
};

export default function GärdetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gärdet<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gärdet – jämför priser och hastigheter gratis",
    cta: "Se Gärdet-alternativ nu",
    cityName: "Gärdet",
    region: "Västra Götaland",
    fiberCoverage: 69,
    avgPrice: 358,
    topProviders: ["Telia","Bredband2"],
    population: 21043
  };

  return <LandingPage localizedContent={localizedContent} />;
}