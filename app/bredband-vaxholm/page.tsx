import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Vaxholm Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Vaxholm, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 83% fiber-täckning. AI-analys gratis.",
  keywords: "bredband vaxholm, fiber vaxholm, internet vaxholm, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Vaxholm',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Vaxholm","type":"kommun","population":11000,"region":"Stockholm","fiberCoverage":83,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":415,"searchVolume":700,"competition":"low"}',
    'ai-local-keywords': 'bredband-vaxholm,fiber-vaxholm,internet-vaxholm',
    'ai-fiber-coverage': '83%',
    'ai-avg-price': '415-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '700',
    'ai-competition': 'low',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function VaxholmBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Vaxholm<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Vaxholm, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Vaxholm-leverantörer",
    cityName: "Vaxholm",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 83,
    avgPrice: 415,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 11000,
    areaType: "kommun",
    searchVolume: 700,
    competition: "low",
    localContent: {"localInfo":"Vaxholm är ett kommun i Stockholm med cirka 11,000 invånare.","fiberInfo":"Fiber-täckningen i Vaxholm ligger på 83%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Vaxholm är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Vaxholm ligger på cirka 415 SEK per månad.","seoKeywords":"bredband vaxholm, fiber vaxholm, internet vaxholm, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}