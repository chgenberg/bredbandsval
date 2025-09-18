import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Sälen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Sälen. Jämför Tele2, Telia, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 69% fiber-täckning. Helt gratis.",
  keywords: "bredband sälen, fiber sälen, internet sälen, tv paket sälen, tele2 telia tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Sälen',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Sälen","population":31746,"region":"Dalarna","fiberCoverage":69,"topProviders":["Tele2","Telia","Tre"],"avgPrice":330}',
    'ai-local-keywords': 'bredband-salen,fiber-salen,internet-salen',
    'ai-fiber-coverage': '69%',
    'ai-avg-price': '330-sek',
    'ai-top-providers': 'Tele2,Telia,Tre'
  }
};

export default function SälenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Sälen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Sälen – jämför priser och hastigheter gratis",
    cta: "Se Sälen-alternativ nu",
    cityName: "Sälen",
    region: "Dalarna",
    fiberCoverage: 69,
    avgPrice: 330,
    topProviders: ["Tele2","Telia","Tre"],
    population: 31746
  };

  return <LandingPage localizedContent={localizedContent} />;
}