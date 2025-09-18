import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Johanneshov 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Johanneshov. Jämför Telia, Tre, Comhem, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband johanneshov, fiber johanneshov, internet johanneshov, tv paket johanneshov, telia tre comhem bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Johanneshov',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Johanneshov","population":34637,"region":"Dalarna","fiberCoverage":85,"topProviders":["Telia","Tre","Comhem","Bredband2"],"avgPrice":393}',
    'ai-local-keywords': 'bredband-johanneshov,fiber-johanneshov,internet-johanneshov',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '393-sek',
    'ai-top-providers': 'Telia,Tre,Comhem,Bredband2'
  }
};

export default function JohanneshovBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Johanneshov<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Johanneshov – jämför priser och hastigheter gratis",
    cta: "Se Johanneshov-alternativ nu",
    cityName: "Johanneshov",
    region: "Dalarna",
    fiberCoverage: 85,
    avgPrice: 393,
    topProviders: ["Telia","Tre","Comhem","Bredband2"],
    population: 34637
  };

  return <LandingPage localizedContent={localizedContent} />;
}