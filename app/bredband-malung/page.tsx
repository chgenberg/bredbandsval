import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Malung 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Malung. Jämför Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 85% fiber-täckning. Helt gratis.",
  keywords: "bredband malung, fiber malung, internet malung, tv paket malung, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Malung',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Malung","population":19887,"region":"Stockholm","fiberCoverage":85,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":408}',
    'ai-local-keywords': 'bredband-malung,fiber-malung,internet-malung',
    'ai-fiber-coverage': '85%',
    'ai-avg-price': '408-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof'
  }
};

export default function MalungBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Malung<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Malung – jämför priser och hastigheter gratis",
    cta: "Se Malung-alternativ nu",
    cityName: "Malung",
    region: "Stockholm",
    fiberCoverage: 85,
    avgPrice: 408,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 19887
  };

  return <LandingPage localizedContent={localizedContent} />;
}