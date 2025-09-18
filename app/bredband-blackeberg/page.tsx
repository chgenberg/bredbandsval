import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Blackeberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Blackeberg. Jämför Comhem, Telia, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband blackeberg, fiber blackeberg, internet blackeberg, tv paket blackeberg, comhem telia tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Blackeberg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Blackeberg","population":17977,"region":"Skåne","fiberCoverage":93,"topProviders":["Comhem","Telia","Tre"],"avgPrice":332}',
    'ai-local-keywords': 'bredband-blackeberg,fiber-blackeberg,internet-blackeberg',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '332-sek',
    'ai-top-providers': 'Comhem,Telia,Tre'
  }
};

export default function BlackebergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Blackeberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Blackeberg – jämför priser och hastigheter gratis",
    cta: "Se Blackeberg-alternativ nu",
    cityName: "Blackeberg",
    region: "Skåne",
    fiberCoverage: 93,
    avgPrice: 332,
    topProviders: ["Comhem","Telia","Tre"],
    population: 17977
  };

  return <LandingPage localizedContent={localizedContent} />;
}