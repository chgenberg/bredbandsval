import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Reimersholme 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Reimersholme. Jämför Tele2, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband reimersholme, fiber reimersholme, internet reimersholme, tv paket reimersholme, tele2 comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Reimersholme',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Reimersholme","population":12510,"region":"Gävleborg","fiberCoverage":83,"topProviders":["Tele2","Comhem"],"avgPrice":323}',
    'ai-local-keywords': 'bredband-reimersholme,fiber-reimersholme,internet-reimersholme',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '323-sek',
    'ai-top-providers': 'Tele2,Comhem'
  }
};

export default function ReimersholmeBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Reimersholme<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Reimersholme – jämför priser och hastigheter gratis",
    cta: "Se Reimersholme-alternativ nu",
    cityName: "Reimersholme",
    region: "Gävleborg",
    fiberCoverage: 83,
    avgPrice: 323,
    topProviders: ["Tele2","Comhem"],
    population: 12510
  };

  return <LandingPage localizedContent={localizedContent} />;
}