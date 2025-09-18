import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Universitetet 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Universitetet. Jämför Tele2, Telia, Comhem, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 87% fiber-täckning. Helt gratis.",
  keywords: "bredband universitetet, fiber universitetet, internet universitetet, tv paket universitetet, tele2 telia comhem bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Universitetet',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Universitetet","population":12684,"region":"Norrbotten","fiberCoverage":87,"topProviders":["Tele2","Telia","Comhem","Bredband2"],"avgPrice":365}',
    'ai-local-keywords': 'bredband-universitetet,fiber-universitetet,internet-universitetet',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '365-sek',
    'ai-top-providers': 'Tele2,Telia,Comhem,Bredband2'
  }
};

export default function UniversitetetBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Universitetet<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Universitetet – jämför priser och hastigheter gratis",
    cta: "Se Universitetet-alternativ nu",
    cityName: "Universitetet",
    region: "Norrbotten",
    fiberCoverage: 87,
    avgPrice: 365,
    topProviders: ["Tele2","Telia","Comhem","Bredband2"],
    population: 12684
  };

  return <LandingPage localizedContent={localizedContent} />;
}