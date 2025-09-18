import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Skarpnäck Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Skarpnäck, Stockholm. Jämför Telia, Comhem, Bahnhof och fler leverantörer. 87% fiber-täckning. AI-analys gratis.",
  keywords: "bredband skarpnäck, fiber skarpnäck, internet skarpnäck, stockholm, telia comhem bahnhof",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Skarpnäck',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Skarpnäck","type":"stadsdel","population":11000,"region":"Stockholm","fiberCoverage":87,"topProviders":["Telia","Comhem","Bahnhof"],"avgPrice":425,"searchVolume":750,"competition":"low"}',
    'ai-local-keywords': 'bredband-skarpnack,fiber-skarpnack,internet-skarpnack',
    'ai-fiber-coverage': '87%',
    'ai-avg-price': '425-sek',
    'ai-top-providers': 'Telia,Comhem,Bahnhof',
    'ai-search-volume': '750',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function SkarpnckBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Skarpnäck<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Skarpnäck, Stockholm. Jämför Telia, Comhem, Bahnhof och fler",
    cta: "Jämför Skarpnäck-leverantörer",
    cityName: "Skarpnäck",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 87,
    avgPrice: 425,
    topProviders: ["Telia","Comhem","Bahnhof"],
    population: 11000,
    areaType: "stadsdel",
    searchVolume: 750,
    competition: "low",
    localContent: {"localInfo":"Skarpnäck är ett stadsdel i Stockholm med cirka 11,000 invånare.","fiberInfo":"Fiber-täckningen i Skarpnäck ligger på 87%, vilket är bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Skarpnäck är Telia, Comhem, Bahnhof.","priceInfo":"Genomsnittspriset för bredband i Skarpnäck ligger på cirka 425 SEK per månad.","seoKeywords":"bredband skarpnäck, fiber skarpnäck, internet skarpnäck, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}