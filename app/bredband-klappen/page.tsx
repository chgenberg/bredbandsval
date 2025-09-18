import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kläppen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kläppen. Jämför Tre, Bredband2, Telenor, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 92% fiber-täckning. Helt gratis.",
  keywords: "bredband kläppen, fiber kläppen, internet kläppen, tv paket kläppen, tre bredband2 telenor telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kläppen',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kläppen","population":23474,"region":"Stockholm","fiberCoverage":92,"topProviders":["Tre","Bredband2","Telenor","Telia"],"avgPrice":400}',
    'ai-local-keywords': 'bredband-klappen,fiber-klappen,internet-klappen',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '400-sek',
    'ai-top-providers': 'Tre,Bredband2,Telenor,Telia'
  }
};

export default function KläppenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kläppen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kläppen – jämför priser och hastigheter gratis",
    cta: "Se Kläppen-alternativ nu",
    cityName: "Kläppen",
    region: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 400,
    topProviders: ["Tre","Bredband2","Telenor","Telia"],
    population: 23474
  };

  return <LandingPage localizedContent={localizedContent} />;
}