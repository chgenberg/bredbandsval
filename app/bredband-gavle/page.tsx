import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Gävle 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Gävle. Jämför Comhem, Tre, Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 70% fiber-täckning. Helt gratis.",
  keywords: "bredband gävle, fiber gävle, internet gävle, tv paket gävle, comhem tre telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Gävle',
    'geo.position': 'Västerbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Gävle","population":14304,"region":"Västerbotten","fiberCoverage":70,"topProviders":["Comhem","Tre","Telenor","Tele2"],"avgPrice":362}',
    'ai-local-keywords': 'bredband-gavle,fiber-gavle,internet-gavle',
    'ai-fiber-coverage': '70%',
    'ai-avg-price': '362-sek',
    'ai-top-providers': 'Comhem,Tre,Telenor,Tele2'
  }
};

export default function GävleBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Gävle<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Gävle – jämför priser och hastigheter gratis",
    cta: "Se Gävle-alternativ nu",
    cityName: "Gävle",
    region: "Västerbotten",
    fiberCoverage: 70,
    avgPrice: 362,
    topProviders: ["Comhem","Tre","Telenor","Tele2"],
    population: 14304
  };

  return <LandingPage localizedContent={localizedContent} />;
}