import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Åkeshov 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Åkeshov. Jämför Bredband2, Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 67% fiber-täckning. Helt gratis.",
  keywords: "bredband åkeshov, fiber åkeshov, internet åkeshov, tv paket åkeshov, bredband2 telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Åkeshov',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Åkeshov","population":15473,"region":"Norrbotten","fiberCoverage":67,"topProviders":["Bredband2","Telenor","Tele2"],"avgPrice":391}',
    'ai-local-keywords': 'bredband-akeshov,fiber-akeshov,internet-akeshov',
    'ai-fiber-coverage': '67%',
    'ai-avg-price': '391-sek',
    'ai-top-providers': 'Bredband2,Telenor,Tele2'
  }
};

export default function ÅkeshovBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Åkeshov<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Åkeshov – jämför priser och hastigheter gratis",
    cta: "Se Åkeshov-alternativ nu",
    cityName: "Åkeshov",
    region: "Norrbotten",
    fiberCoverage: 67,
    avgPrice: 391,
    topProviders: ["Bredband2","Telenor","Tele2"],
    population: 15473
  };

  return <LandingPage localizedContent={localizedContent} />;
}