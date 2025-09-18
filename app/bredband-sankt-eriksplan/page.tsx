import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sankt Eriksplan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sankt Eriksplan. Jämför Bredband2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 84% fiber-täckning. Helt gratis.",
  keywords: "bredband sankt eriksplan, fiber sankt eriksplan, internet sankt eriksplan, tv paket sankt eriksplan, bredband2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sankt Eriksplan',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sankt Eriksplan","population":22976,"region":"Skåne","fiberCoverage":84,"topProviders":["Bredband2","Bahnhof"],"avgPrice":342}',
    'ai-local-keywords': 'bredband-sankt-eriksplan,fiber-sankt-eriksplan,internet-sankt-eriksplan',
    'ai-fiber-coverage': '84%',
    'ai-avg-price': '342-sek',
    'ai-top-providers': 'Bredband2,Bahnhof'
  }
};

export default function SanktEriksplanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sankt Eriksplan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sankt Eriksplan – jämför priser och hastigheter gratis",
    cta: "Se Sankt Eriksplan-alternativ nu",
    cityName: "Sankt Eriksplan",
    region: "Skåne",
    fiberCoverage: 84,
    avgPrice: 342,
    topProviders: ["Bredband2","Bahnhof"],
    population: 22976
  };

  return <LandingPage localizedContent={localizedContent} />;
}