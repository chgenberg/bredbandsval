import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Södermalm 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Södermalm. Jämför Tele2, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband södermalm, fiber södermalm, internet södermalm, tv paket södermalm, tele2 telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Södermalm',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Södermalm","population":18332,"region":"Jämtland","fiberCoverage":66,"topProviders":["Tele2","Telenor"],"avgPrice":405}',
    'ai-local-keywords': 'bredband-sodermalm,fiber-sodermalm,internet-sodermalm',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '405-sek',
    'ai-top-providers': 'Tele2,Telenor'
  }
};

export default function SödermalmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Södermalm<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Södermalm – jämför priser och hastigheter gratis",
    cta: "Se Södermalm-alternativ nu",
    cityName: "Södermalm",
    region: "Jämtland",
    fiberCoverage: 66,
    avgPrice: 405,
    topProviders: ["Tele2","Telenor"],
    population: 18332
  };

  return <LandingPage localizedContent={localizedContent} />;
}