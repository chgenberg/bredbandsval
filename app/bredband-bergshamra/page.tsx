import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Bergshamra Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Bergshamra, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 93% fiber-täckning. AI-analys gratis.",
  keywords: "bredband bergshamra, fiber bergshamra, internet bergshamra, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Bergshamra',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Bergshamra","type":"stadsdel","population":3000,"region":"Stockholm","fiberCoverage":93,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":460,"searchVolume":600,"competition":"medium"}',
    'ai-local-keywords': 'bredband-bergshamra,fiber-bergshamra,internet-bergshamra',
    'ai-fiber-coverage': '93%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '600',
    'ai-competition': 'medium',
    'ai-area-type': 'stadsdel',
    'ai-parent-city': 'Stockholm'
  }
};

export default function BergshamraBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Bergshamra<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Bergshamra-boende. 93% fiber-täckning",
    cta: "Få din Bergshamra-rekommendation",
    cityName: "Bergshamra",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 93,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 3000,
    areaType: "stadsdel",
    searchVolume: 600,
    competition: "medium",
    localContent: {"localInfo":"Bergshamra är ett stadsdel i Stockholm med cirka 3,000 invånare.","fiberInfo":"Fiber-täckningen i Bergshamra ligger på 93%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Bergshamra är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Bergshamra ligger på cirka 460 SEK per månad.","seoKeywords":"bredband bergshamra, fiber bergshamra, internet bergshamra, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}