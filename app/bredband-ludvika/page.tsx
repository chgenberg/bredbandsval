import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ludvika 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ludvika. Jämför Tele2, Telia, Telenor och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband ludvika, fiber ludvika, internet ludvika, tv paket ludvika, tele2 telia telenor",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ludvika',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ludvika","population":27949,"region":"Jämtland","fiberCoverage":69,"topProviders":["Tele2","Telia","Telenor"],"avgPrice":390}',
    'ai-local-keywords': 'bredband-ludvika,fiber-ludvika,internet-ludvika',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '390-sek',
    'ai-top-providers': 'Tele2,Telia,Telenor'
  }
};

export default function LudvikaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ludvika<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ludvika – jämför priser och hastigheter gratis",
    cta: "Se Ludvika-alternativ nu",
    cityName: "Ludvika",
    region: "Jämtland",
    fiberCoverage: 69,
    avgPrice: 390,
    topProviders: ["Tele2","Telia","Telenor"],
    population: 27949
  };

  return <LandingPage localizedContent={localizedContent} />;
}