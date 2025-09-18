import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Storlien 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Storlien. Jämför Telenor, Tele2, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 91% fiber-täckning. Helt gratis.",
  keywords: "bredband storlien, fiber storlien, internet storlien, tv paket storlien, telenor tele2 bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Storlien',
    'geo.position': 'Norrbotten',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Storlien","population":9823,"region":"Norrbotten","fiberCoverage":91,"topProviders":["Telenor","Tele2","Bahnhof"],"avgPrice":379}',
    'ai-local-keywords': 'bredband-storlien,fiber-storlien,internet-storlien',
    'ai-fiber-coverage': '91%',
    'ai-avg-price': '379-sek',
    'ai-top-providers': 'Telenor,Tele2,Bahnhof'
  }
};

export default function StorlienBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Storlien<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Storlien – jämför priser och hastigheter gratis",
    cta: "Se Storlien-alternativ nu",
    cityName: "Storlien",
    region: "Norrbotten",
    fiberCoverage: 91,
    avgPrice: 379,
    topProviders: ["Telenor","Tele2","Bahnhof"],
    population: 9823
  };

  return <LandingPage localizedContent={localizedContent} />;
}