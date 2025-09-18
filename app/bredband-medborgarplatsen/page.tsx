import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Medborgarplatsen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Medborgarplatsen. Jämför Telenor, Tre och fler leverantörer. AI-driven analys på 30 sekunder. 83% fiber-täckning. Helt gratis.",
  keywords: "bredband medborgarplatsen, fiber medborgarplatsen, internet medborgarplatsen, tv paket medborgarplatsen, telenor tre",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Medborgarplatsen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Medborgarplatsen","population":33713,"region":"Stockholm","fiberCoverage":83,"topProviders":["Telenor","Tre"],"avgPrice":323}',
    'ai-local-keywords': 'bredband-medborgarplatsen,fiber-medborgarplatsen,internet-medborgarplatsen',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '323-sek',
    'ai-top-providers': 'Telenor,Tre'
  }
};

export default function MedborgarplatsenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Medborgarplatsen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Medborgarplatsen – jämför priser och hastigheter gratis",
    cta: "Se Medborgarplatsen-alternativ nu",
    cityName: "Medborgarplatsen",
    region: "Stockholm",
    fiberCoverage: 83,
    avgPrice: 323,
    topProviders: ["Telenor","Tre"],
    population: 33713
  };

  return <LandingPage localizedContent={localizedContent} />;
}