import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vasastan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vasastan. Jämför Telia, Bredband2, Comhem, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 68% fiber-täckning. Helt gratis.",
  keywords: "bredband vasastan, fiber vasastan, internet vasastan, tv paket vasastan, telia bredband2 comhem tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vasastan',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vasastan","population":17385,"region":"Dalarna","fiberCoverage":68,"topProviders":["Telia","Bredband2","Comhem","Tre"],"avgPrice":326}',
    'ai-local-keywords': 'bredband-vasastan,fiber-vasastan,internet-vasastan',
    'ai-fiber-coverage': '68%',
    'ai-avg-price': '326-sek',
    'ai-top-providers': 'Telia,Bredband2,Comhem,Tre'
  }
};

export default function VasastanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vasastan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vasastan – jämför priser och hastigheter gratis",
    cta: "Se Vasastan-alternativ nu",
    cityName: "Vasastan",
    region: "Dalarna",
    fiberCoverage: 68,
    avgPrice: 326,
    topProviders: ["Telia","Bredband2","Comhem","Tre"],
    population: 17385
  };

  return <LandingPage localizedContent={localizedContent} />;
}