import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Tännäs 2025 - Jämför Priser & Hastigheter | Bredbandsval",
  description: "Hitta bästa bredband i Tännäs. Jämför Tele2, Comhem, Bredband2 och fler leverantörer. AI-driven analys på 30 sekunder. 66% fiber-täckning. Helt gratis.",
  keywords: "bredband tännäs, fiber tännäs, internet tännäs, tv paket tännäs, tele2 comhem bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Tännäs',
    'geo.position': 'Gävleborg',
    'ai-local-optimization': 'true',
    'ai-city-data': '{"name":"Tännäs","population":27763,"region":"Gävleborg","fiberCoverage":66,"topProviders":["Tele2","Comhem","Bredband2"],"avgPrice":406}',
    'ai-local-keywords': 'bredband-tannas,fiber-tannas,internet-tannas',
    'ai-fiber-coverage': '66%',
    'ai-avg-price': '406-sek',
    'ai-top-providers': 'Tele2,Comhem,Bredband2'
  }
};

export default function TännäsBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Tännäs<br/>– Alla tillgängliga alternativ",
    subtext: "Komplett guide till bredband i Tännäs – jämför priser och hastigheter gratis",
    cta: "Se Tännäs-alternativ nu",
    cityName: "Tännäs",
    region: "Gävleborg",
    fiberCoverage: 66,
    avgPrice: 406,
    topProviders: ["Tele2","Comhem","Bredband2"],
    population: 27763
  };

  return <LandingPage localizedContent={localizedContent} />;
}