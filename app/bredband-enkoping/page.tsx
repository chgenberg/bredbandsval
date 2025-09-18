import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Enköping 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Enköping. Jämför Bredband2, Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 75% fiber-täckning. Helt gratis.",
  keywords: "bredband enköping, fiber enköping, internet enköping, tv paket enköping, bredband2 telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Enköping',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Enköping","population":17941,"region":"Stockholm","fiberCoverage":75,"topProviders":["Bredband2","Telenor","Tele2"],"avgPrice":384}',
    'ai-local-keywords': 'bredband-enkoping,fiber-enkoping,internet-enkoping',
    'ai-fiber-coverage': '75%',
    'ai-avg-price': '384-sek',
    'ai-top-providers': 'Bredband2,Telenor,Tele2'
  }
};

export default function EnköpingBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Enköping<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Enköping – jämför priser och hastigheter gratis",
    cta: "Se Enköping-alternativ nu",
    cityName: "Enköping",
    region: "Stockholm",
    fiberCoverage: 75,
    avgPrice: 384,
    topProviders: ["Bredband2","Telenor","Tele2"],
    population: 17941
  };

  return <LandingPage localizedContent={localizedContent} />;
}