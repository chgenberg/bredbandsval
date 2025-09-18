import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Långholmen 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Långholmen. Jämför Bredband2, Bahnhof, Comhem, Telia och fler leverantörer. AI-driven analys på 30 sekunder. 93% fiber-täckning. Helt gratis.",
  keywords: "bredband långholmen, fiber långholmen, internet långholmen, tv paket långholmen, bredband2 bahnhof comhem telia",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Långholmen',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Långholmen","population":32240,"region":"Gävleborg","fiberCoverage":93,"topProviders":["Bredband2","Bahnhof","Comhem","Telia"],"avgPrice":329}',
    'ai-local-keywords': 'bredband-langholmen,fiber-langholmen,internet-langholmen',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '329-sek',
    'ai-top-providers': 'Bredband2,Bahnhof,Comhem,Telia'
  }
};

export default function LångholmenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Långholmen<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Långholmen – jämför priser och hastigheter gratis",
    cta: "Se Långholmen-alternativ nu",
    cityName: "Långholmen",
    region: "Gävleborg",
    fiberCoverage: 93,
    avgPrice: 329,
    topProviders: ["Bredband2","Bahnhof","Comhem","Telia"],
    population: 32240
  };

  return <LandingPage localizedContent={localizedContent} />;
}