import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ytterhogdal 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ytterhogdal. Jämför Tele2, Fibio, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 89% fiber-täckning. Helt gratis.",
  keywords: "bredband ytterhogdal, fiber ytterhogdal, internet ytterhogdal, tv paket ytterhogdal, tele2 fibio bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ytterhogdal',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ytterhogdal","population":7168,"region":"Skåne","fiberCoverage":89,"topProviders":["Tele2","Fibio","Bahnhof"],"avgPrice":323}',
    'ai-local-keywords': 'bredband-ytterhogdal,fiber-ytterhogdal,internet-ytterhogdal',
    'ai-fiber-coverage': '89%',
    'ai-avg-price': '323-sek',
    'ai-top-providers': 'Tele2,Fibio,Bahnhof'
  }
};

export default function YtterhogdalBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ytterhogdal<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ytterhogdal – jämför priser och hastigheter gratis",
    cta: "Se Ytterhogdal-alternativ nu",
    cityName: "Ytterhogdal",
    region: "Skåne",
    fiberCoverage: 89,
    avgPrice: 323,
    topProviders: ["Tele2","Fibio","Bahnhof"],
    population: 7168
  };

  return <LandingPage localizedContent={localizedContent} />;
}