import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skövde 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Skövde. Jämför Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 84% fiber-täckning. Helt gratis.",
  keywords: "bredband skövde, fiber skövde, internet skövde, tv paket skövde, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skövde',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Skövde","population":36855,"region":"Västra Götaland","fiberCoverage":84,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":365}',
    'ai-local-keywords': 'bredband-skovde,fiber-skovde,internet-skovde',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '365-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof'
  }
};

export default function SkövdeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skövde<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Skövde – jämför priser och hastigheter gratis",
    cta: "Se Skövde-alternativ nu",
    cityName: "Skövde",
    region: "Västra Götaland",
    fiberCoverage: 84,
    avgPrice: 365,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 36855
  };

  return <LandingPage localizedContent={localizedContent} />;
}