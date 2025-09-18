import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vallentuna 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Vallentuna. Jämför Comhem, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband vallentuna, fiber vallentuna, internet vallentuna, tv paket vallentuna, comhem telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vallentuna',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Vallentuna","population":13677,"region":"Jämtland","fiberCoverage":66,"topProviders":["Comhem","Telia"],"avgPrice":417}',
    'ai-local-keywords': 'bredband-vallentuna,fiber-vallentuna,internet-vallentuna',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '417-sek',
    'ai-top-providers': 'Comhem,Telia'
  }
};

export default function VallentunaBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vallentuna<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Vallentuna – jämför priser och hastigheter gratis",
    cta: "Se Vallentuna-alternativ nu",
    cityName: "Vallentuna",
    region: "Jämtland",
    fiberCoverage: 66,
    avgPrice: 417,
    topProviders: ["Comhem","Telia"],
    population: 13677
  };

  return <LandingPage localizedContent={localizedContent} />;
}