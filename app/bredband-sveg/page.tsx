import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sveg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sveg. Jämför Telia, Bredband2, Telenor, Fibio och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband sveg, fiber sveg, internet sveg, tv paket sveg, telia bredband2 telenor fibio",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sveg',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sveg","population":29258,"region":"Jämtland","fiberCoverage":66,"topProviders":["Telia","Bredband2","Telenor","Fibio"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-sveg,fiber-sveg,internet-sveg',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Telia,Bredband2,Telenor,Fibio'
  }
};

export default function SvegBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sveg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sveg – jämför priser och hastigheter gratis",
    cta: "Se Sveg-alternativ nu",
    cityName: "Sveg",
    region: "Jämtland",
    fiberCoverage: 66,
    avgPrice: 360,
    topProviders: ["Telia","Bredband2","Telenor","Fibio"],
    population: 29258
  };

  return <LandingPage localizedContent={localizedContent} />;
}