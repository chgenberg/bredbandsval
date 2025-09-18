import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Hudiksvall 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Hudiksvall. Jämför Telia, Fibio, Tele2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 91% fiber-täckning. Helt gratis.",
  keywords: "bredband hudiksvall, fiber hudiksvall, internet hudiksvall, tv paket hudiksvall, telia fibio tele2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Hudiksvall',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Hudiksvall","population":19448,"region":"Norrbotten","fiberCoverage":91,"topProviders":["Telia","Fibio","Tele2","Bahnhof"],"avgPrice":376}',
    'ai-local-keywords': 'bredband-hudiksvall,fiber-hudiksvall,internet-hudiksvall',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '376-sek',
    'ai-top-providers': 'Telia,Fibio,Tele2,Bahnhof'
  }
};

export default function HudiksvallBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Hudiksvall<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Hudiksvall – jämför priser och hastigheter gratis",
    cta: "Se Hudiksvall-alternativ nu",
    cityName: "Hudiksvall",
    region: "Norrbotten",
    fiberCoverage: 91,
    avgPrice: 376,
    topProviders: ["Telia","Fibio","Tele2","Bahnhof"],
    population: 19448
  };

  return <LandingPage localizedContent={localizedContent} />;
}