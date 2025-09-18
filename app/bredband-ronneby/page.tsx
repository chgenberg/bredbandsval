import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Ronneby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Ronneby. Jämför Telia, Tele2, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 80% fiber-täckning. Helt gratis.",
  keywords: "bredband ronneby, fiber ronneby, internet ronneby, tv paket ronneby, telia tele2 bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Ronneby',
    'geo.position': 'Blekinge',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Ronneby","population":12029,"region":"Blekinge","fiberCoverage":80,"topProviders":["Telia","Tele2","Bredband2"],"avgPrice":350}',
    'ai-local-keywords': 'bredband-ronneby,fiber-ronneby,internet-ronneby',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '350-sek',
    'ai-top-providers': 'Telia,Tele2,Bredband2'
  }
};

export default function RonnebyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Ronneby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Ronneby – jämför priser och hastigheter gratis",
    cta: "Se Ronneby-alternativ nu",
    cityName: "Ronneby",
    region: "Blekinge",
    fiberCoverage: 80,
    avgPrice: 350,
    topProviders: ["Telia","Tele2","Bredband2"],
    population: 12029
  };

  return <LandingPage localizedContent={localizedContent} />;
}