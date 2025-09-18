import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vemdalen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vemdalen. Jämför Comhem, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband vemdalen, fiber vemdalen, internet vemdalen, tv paket vemdalen, comhem bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vemdalen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vemdalen","population":25754,"region":"Skåne","fiberCoverage":69,"topProviders":["Comhem","Bredband2"],"avgPrice":419}',
    'ai-local-keywords': 'bredband-vemdalen,fiber-vemdalen,internet-vemdalen',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '419-sek',
    'ai-top-providers': 'Comhem,Bredband2'
  }
};

export default function VemdalenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vemdalen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vemdalen – jämför priser och hastigheter gratis",
    cta: "Se Vemdalen-alternativ nu",
    cityName: "Vemdalen",
    region: "Skåne",
    fiberCoverage: 69,
    avgPrice: 419,
    topProviders: ["Comhem","Bredband2"],
    population: 25754
  };

  return <LandingPage localizedContent={localizedContent} />;
}