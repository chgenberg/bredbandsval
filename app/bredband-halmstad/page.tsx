import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Halmstad 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Halmstad. Jämför Telia, Comhem, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 86% fiber-täckning. Helt gratis.",
  keywords: "bredband halmstad, fiber halmstad, internet halmstad, tv paket halmstad, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Halmstad',
    'geo.position': 'Halland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Halmstad","population":67207,"region":"Halland","fiberCoverage":86,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":370}',
    'ai-local-keywords': 'bredband-halmstad,fiber-halmstad,internet-halmstad',
    'ai-fiber-coverage': '86%',
    'ai-avg-price': '370-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2'
  }
};

export default function HalmstadBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Halmstad<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Halmstad – jämför priser och hastigheter gratis",
    cta: "Se Halmstad-alternativ nu",
    cityName: "Halmstad",
    region: "Halland",
    fiberCoverage: 86,
    avgPrice: 370,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 67207
  };

  return <LandingPage localizedContent={localizedContent} />;
}