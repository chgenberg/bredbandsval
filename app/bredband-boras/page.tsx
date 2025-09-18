import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Borås 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Borås. Jämför Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 84% fiber-täckning. Helt gratis.",
  keywords: "bredband borås, fiber borås, internet borås, tv paket borås, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Borås',
    'geo.position': 'Västra Götaland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Borås","population":73768,"region":"Västra Götaland","fiberCoverage":84,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":365}',
    'ai-local-keywords': 'bredband-boras,fiber-boras,internet-boras',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '365-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof'
  }
};

export default function BoråsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Borås<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Borås – jämför priser och hastigheter gratis",
    cta: "Se Borås-alternativ nu",
    cityName: "Borås",
    region: "Västra Götaland",
    fiberCoverage: 84,
    avgPrice: 365,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 73768
  };

  return <LandingPage localizedContent={localizedContent} />;
}