import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sollefteå 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sollefteå. Jämför Telia, Comhem, Bahnhof, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 70% fiber-täckning. Helt gratis.",
  keywords: "bredband sollefteå, fiber sollefteå, internet sollefteå, tv paket sollefteå, telia comhem bahnhof tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sollefteå',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sollefteå","population":23449,"region":"Västerbotten","fiberCoverage":70,"topProviders":["Telia","Comhem","Bahnhof","Tre"],"avgPrice":390}',
    'ai-local-keywords': 'bredband-solleftea,fiber-solleftea,internet-solleftea',
    'ai-fiber-coverage': '70%',
    'ai-avg-price': '390-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof,Tre'
  }
};

export default function SollefteåBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sollefteå<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sollefteå – jämför priser och hastigheter gratis",
    cta: "Se Sollefteå-alternativ nu",
    cityName: "Sollefteå",
    region: "Västerbotten",
    fiberCoverage: 70,
    avgPrice: 390,
    topProviders: ["Telia","Comhem","Bahnhof","Tre"],
    population: 23449
  };

  return <LandingPage localizedContent={localizedContent} />;
}