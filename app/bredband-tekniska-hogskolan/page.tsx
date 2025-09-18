import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tekniska Högskolan 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tekniska Högskolan. Jämför Telia, Comhem och fler leverantörer. AI-driven analys på 30 sekunder. 76% fiber-täckning. Helt gratis.",
  keywords: "bredband tekniska högskolan, fiber tekniska högskolan, internet tekniska högskolan, tv paket tekniska högskolan, telia comhem",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tekniska Högskolan',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tekniska Högskolan","population":22511,"region":"Norrbotten","fiberCoverage":76,"topProviders":["Telia","Comhem"],"avgPrice":354}',
    'ai-local-keywords': 'bredband-tekniska-hogskolan,fiber-tekniska-hogskolan,internet-tekniska-hogskolan',
    'ai-fiber-coverage': '76%',
    'ai-avg-price': '354-sek',
    'ai-top-providers': 'Telia,Comhem'
  }
};

export default function TekniskaHögskolanBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tekniska Högskolan<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tekniska Högskolan – jämför priser och hastigheter gratis",
    cta: "Se Tekniska Högskolan-alternativ nu",
    cityName: "Tekniska Högskolan",
    region: "Norrbotten",
    fiberCoverage: 76,
    avgPrice: 354,
    topProviders: ["Telia","Comhem"],
    population: 22511
  };

  return <LandingPage localizedContent={localizedContent} />;
}