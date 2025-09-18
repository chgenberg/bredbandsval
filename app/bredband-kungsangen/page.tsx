import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Kungsängen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Kungsängen. Jämför Tre, Tele2, Fibio, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 78% fiber-täckning. Helt gratis.",
  keywords: "bredband kungsängen, fiber kungsängen, internet kungsängen, tv paket kungsängen, tre tele2 fibio bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Kungsängen',
    'geo.position': 'Dalarna',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Kungsängen","population":8609,"region":"Dalarna","fiberCoverage":78,"topProviders":["Tre","Tele2","Fibio","Bahnhof"],"avgPrice":348}',
    'ai-local-keywords': 'bredband-kungsangen,fiber-kungsangen,internet-kungsangen',
    'ai-fiber-coverage': '78%',
    'ai-avg-price': '348-sek',
    'ai-top-providers': 'Tre,Tele2,Fibio,Bahnhof'
  }
};

export default function KungsängenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Kungsängen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Kungsängen – jämför priser och hastigheter gratis",
    cta: "Se Kungsängen-alternativ nu",
    cityName: "Kungsängen",
    region: "Dalarna",
    fiberCoverage: 78,
    avgPrice: 348,
    topProviders: ["Tre","Tele2","Fibio","Bahnhof"],
    population: 8609
  };

  return <LandingPage localizedContent={localizedContent} />;
}