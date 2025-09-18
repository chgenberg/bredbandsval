import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kristineberg 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kristineberg. Jämför Bredband2, Telenor, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband kristineberg, fiber kristineberg, internet kristineberg, tv paket kristineberg, bredband2 telenor tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kristineberg',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kristineberg","population":5925,"region":"Skåne","fiberCoverage":93,"topProviders":["Bredband2","Telenor","Tele2"],"avgPrice":348}',
    'ai-local-keywords': 'bredband-kristineberg,fiber-kristineberg,internet-kristineberg',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '348-sek',
    'ai-top-providers': 'Bredband2,Telenor,Tele2'
  }
};

export default function KristinebergBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kristineberg<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kristineberg – jämför priser och hastigheter gratis",
    cta: "Se Kristineberg-alternativ nu",
    cityName: "Kristineberg",
    region: "Skåne",
    fiberCoverage: 93,
    avgPrice: 348,
    topProviders: ["Bredband2","Telenor","Tele2"],
    population: 5925
  };

  return <LandingPage localizedContent={localizedContent} />;
}