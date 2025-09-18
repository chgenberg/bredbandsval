import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sandviken 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sandviken. Jämför Telia, Bredband2, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband sandviken, fiber sandviken, internet sandviken, tv paket sandviken, telia bredband2 telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sandviken',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sandviken","population":25709,"region":"Gävleborg","fiberCoverage":78,"topProviders":["Telia","Bredband2","Telenor"],"avgPrice":345}',
    'ai-local-keywords': 'bredband-sandviken,fiber-sandviken,internet-sandviken',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '345-sek',
    'ai-top-providers': 'Telia,Bredband2,Telenor'
  }
};

export default function SandvikenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sandviken<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sandviken – jämför priser och hastigheter gratis",
    cta: "Se Sandviken-alternativ nu",
    cityName: "Sandviken",
    region: "Gävleborg",
    fiberCoverage: 78,
    avgPrice: 345,
    topProviders: ["Telia","Bredband2","Telenor"],
    population: 25709
  };

  return <LandingPage localizedContent={localizedContent} />;
}