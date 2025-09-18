import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hofors 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hofors. Jämför Telenor, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 71% fiber-täckning. Helt gratis.",
  keywords: "bredband hofors, fiber hofors, internet hofors, tv paket hofors, telenor bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hofors',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hofors","population":34945,"region":"Gävleborg","fiberCoverage":71,"topProviders":["Telenor","Bredband2"],"avgPrice":360}',
    'ai-local-keywords': 'bredband-hofors,fiber-hofors,internet-hofors',
    'ai-fiber-coverage': '71%',
    'ai-avg-price': '360-sek',
    'ai-top-providers': 'Telenor,Bredband2'
  }
};

export default function HoforsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hofors<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hofors – jämför priser och hastigheter gratis",
    cta: "Se Hofors-alternativ nu",
    cityName: "Hofors",
    region: "Gävleborg",
    fiberCoverage: 71,
    avgPrice: 360,
    topProviders: ["Telenor","Bredband2"],
    population: 34945
  };

  return <LandingPage localizedContent={localizedContent} />;
}