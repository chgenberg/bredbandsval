import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bästa Bredband Täby Stockholm 2025 - Jämför Priser | Bredbandsval",
  description: "Hitta bästa bredband i Täby, Stockholm. Jämför Telia, Bahnhof, Bredband2 och fler leverantörer. 92% fiber-täckning. AI-analys gratis.",
  keywords: "bredband täby, fiber täby, internet täby, stockholm, telia bahnhof bredband2",
  other: {
    'geo.region': 'SE',
    'geo.placename': 'Täby',
    'geo.position': 'Stockholm',
    'ai-local-optimization': 'true',
    'ai-area-data': '{"name":"Täby","type":"kommun","population":70000,"region":"Stockholm","fiberCoverage":92,"topProviders":["Telia","Bahnhof","Bredband2"],"avgPrice":460,"searchVolume":2200,"competition":"medium"}',
    'ai-local-keywords': 'bredband-taby,fiber-taby,internet-taby',
    'ai-fiber-coverage': '92%',
    'ai-avg-price': '460-sek',
    'ai-top-providers': 'Telia,Bahnhof,Bredband2',
    'ai-search-volume': '2200',
    'ai-competition': 'medium',
    'ai-area-type': 'kommun',
    'ai-parent-city': 'Stockholm'
  }
};

export default function TbyBredbandsPage() {
  const localizedContent = {
    headline: "Bredband Täby<br/>– AI-driven jämförelse",
    subtext: "Smart rekommendation för Täby-boende. 92% fiber-täckning",
    cta: "Få din Täby-rekommendation",
    cityName: "Täby",
    region: "Stockholm",
    parentCity: "Stockholm",
    fiberCoverage: 92,
    avgPrice: 460,
    topProviders: ["Telia","Bahnhof","Bredband2"],
    population: 70000,
    areaType: "kommun",
    searchVolume: 2200,
    competition: "medium",
    localContent: {"localInfo":"Täby är ett kommun i Stockholm med cirka 70,000 invånare.","fiberInfo":"Fiber-täckningen i Täby ligger på 92%, vilket är mycket bra för området.","providerInfo":"De mest populära bredbandsoperatörerna i Täby är Telia, Bahnhof, Bredband2.","priceInfo":"Genomsnittspriset för bredband i Täby ligger på cirka 460 SEK per månad.","seoKeywords":"bredband täby, fiber täby, internet täby, stockholm"}
  };

  return <LandingPage localizedContent={localizedContent} />;
}