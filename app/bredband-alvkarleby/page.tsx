import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Älvkarleby 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Älvkarleby. Jämför Tele2, Telia, Comhem, Bahnhof och fler leverantörer. AI-driven analys på 30 sekunder. 76% fiber-täckning. Helt gratis.",
  keywords: "bredband älvkarleby, fiber älvkarleby, internet älvkarleby, tv paket älvkarleby, tele2 telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Älvkarleby',
    'geo.position': 'Jämtland',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Älvkarleby","population":26606,"region":"Jämtland","fiberCoverage":76,"topProviders":["Tele2","Telia","Comhem","Bahnhof"],"avgPrice":376}',
    'ai-local-keywords': 'bredband-alvkarleby,fiber-alvkarleby,internet-alvkarleby',
    'ai-fiber-coverage': '76%',
    'ai-avg-price': '376-sek',
    'ai-top-providers': 'Tele2,Telia,Comhem,Bahnhof'
  }
};

export default function ÄlvkarlebyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Älvkarleby<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Älvkarleby – jämför priser och hastigheter gratis",
    cta: "Se Älvkarleby-alternativ nu",
    cityName: "Älvkarleby",
    region: "Jämtland",
    fiberCoverage: 76,
    avgPrice: 376,
    topProviders: ["Tele2","Telia","Comhem","Bahnhof"],
    population: 26606
  };

  return <LandingPage localizedContent={localizedContent} />;
}