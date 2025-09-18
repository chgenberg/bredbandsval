import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Uppsala 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Uppsala. Jämför Tele2, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband uppsala, fiber uppsala, internet uppsala, tv paket uppsala, tele2 tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Uppsala',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Uppsala","population":6654,"region":"Gävleborg","fiberCoverage":78,"topProviders":["Tele2","Tre"],"avgPrice":398}',
    'ai-local-keywords': 'bredband-uppsala,fiber-uppsala,internet-uppsala',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '398-sek',
    'ai-top-providers': 'Tele2,Tre'
  }
};

export default function UppsalaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Uppsala<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Uppsala – jämför priser och hastigheter gratis",
    cta: "Se Uppsala-alternativ nu",
    cityName: "Uppsala",
    region: "Gävleborg",
    fiberCoverage: 78,
    avgPrice: 398,
    topProviders: ["Tele2","Tre"],
    population: 6654
  };

  return <LandingPage localizedContent={localizedContent} />;
}