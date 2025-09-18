import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Lindängen Malmö 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Lindängen, Malmö. Jämför Telia, Comhem, Tele2 och fler leverantörer. 80% fiber-täckning. AI-analys gratis.",
  keywords: "bredband lindängen, fiber lindängen, internet lindängen, malmö, telia comhem tele2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Lindängen',
    'geo.position': 'Skåne',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Lindängen","type":"stadsdel","population":6000,"region":"Skåne","fiberCoverage":80,"topProviders":["Telia","Comhem","Tele2"],"avgPrice":375,"searchVolume":450,"competition":"low"}',
    'ai-local-keywords': 'bredband-lindangen,fiber-lindangen,internet-lindangen',
    'ai-fiber-coverage': '80%',
    'ai-avg-price': '375-sek',
    'ai-top-providers': 'Telia,Comhem,Tele2',
    'ai-search-volume': '450',
    'ai-competition': 'low',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Malmö'
  }
};

export default function LindngenBredbandsPage() {
  const localizedContent = {
    headline: "Bredband i Lindängen<br/>– Alla alternativ",
    subtext: "Komplett översikt av bredband i Lindängen, Malmö. Jämför Telia, Comhem, Tele2 och fler",
    cta: "Jämför Lindängen-leverantörer",
    cityName: "Lindängen",
    region: "Skåne",
    parentCity: "Malmö",
    fiberCoverage: 80,
    avgPrice: 375,
    topProviders: ["Telia","Comhem","Tele2"],
    population: 6000,
    areaType: "stadsdel",
    searchVolume: 450,
    competition: "low",
    localContent: {"localInfo":"Lindängen är ett stadsdel i Malmö med cirka 6,000 invånare.","fiberInfo":"Fiber-täckningen i Lindängen ligger på 80%, vilket är genomsnittligt för området.","providerInfo":"De mest populära bredbandsoperatörerna i Lindängen är Telia, Comhem, Tele2.","priceInfo":"Genomsnittspriset för bredband i Lindängen ligger på cirka 375 SEK per månad.","seoKeywords":"bredband lindängen, fiber lindängen, internet lindängen, malmö"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}