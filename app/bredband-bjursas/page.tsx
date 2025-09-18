import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bjursås 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Bjursås. Jämför Telia, Bredband2, Tele2 och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband bjursås, fiber bjursås, internet bjursås, tv paket bjursås, telia bredband2 tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bjursås',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Bjursås","population":29255,"region":"Skåne","fiberCoverage":93,"topProviders":["Telia","Bredband2","Tele2"],"avgPrice":413}',
    'ai-local-keywords': 'bredband-bjursas,fiber-bjursas,internet-bjursas',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '413-sek',
    'ai-top-providers': 'Telia,Bredband2,Tele2'
  }
};

export default function BjursåsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Bjursås<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Bjursås – jämför priser och hastigheter gratis",
    cta: "Se Bjursås-alternativ nu",
    cityName: "Bjursås",
    region: "Skåne",
    fiberCoverage: 93,
    avgPrice: 413,
    topProviders: ["Telia","Bredband2","Tele2"],
    population: 29255
  };

  return <LandingPage localizedContent={localizedContent} />;
}