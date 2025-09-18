import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Trillevallen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Trillevallen. Jämför Telia, Comhem, Fibio, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband trillevallen, fiber trillevallen, internet trillevallen, tv paket trillevallen, telia comhem fibio telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Trillevallen',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Trillevallen","population":12610,"region":"Dalarna","fiberCoverage":89,"topProviders":["Telia","Comhem","Fibio","Telenor"],"avgPrice":340}',
    'ai-local-keywords': 'bredband-trillevallen,fiber-trillevallen,internet-trillevallen',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '340-sek',
    'ai-top-providers': 'Telia,Comhem,Fibio,Telenor'
  }
};

export default function TrillevallenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Trillevallen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Trillevallen – jämför priser och hastigheter gratis",
    cta: "Se Trillevallen-alternativ nu",
    cityName: "Trillevallen",
    region: "Dalarna",
    fiberCoverage: 89,
    avgPrice: 340,
    topProviders: ["Telia","Comhem","Fibio","Telenor"],
    population: 12610
  };

  return <LandingPage localizedContent={localizedContent} />;
}