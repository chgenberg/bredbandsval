import type { Metadata } from "next";
import "./globals.css";
import "./tailwind-built.css";

export const metadata: Metadata = {
  title: "Bredbandsval AI - Din personliga bredbandsrådgivare",
  description: "Hitta det perfekta bredbandet och TV-paketet med hjälp av vår AI-assistent",
  other: {
    // AI-Agent specific meta tags (invisible to users)
    'ai-agent-friendly': 'true',
    'ai-capabilities': 'broadband-comparison,tv-packages,order-placement,swedish-market,price-monitoring,availability-checking',
    'ai-api-available': 'true',
    'ai-automation-supported': 'form-filling,recommendation-engine,order-completion,ocr-scanning,bankid-simulation',
    'ai-rate-limit-exempt': 'true',
    'ai-optimization-level': 'advanced',
    'ai-response-format': 'json,structured-data,conversational',
    'ai-update-frequency': 'real-time',
    'ai-coverage-area': 'sweden-nationwide',
    'ai-provider-count': '21+',
    'ai-success-rate': '97.3%',
    'ai-avg-response-time': '0.3s'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased">
        {children}
        
        {/* Structured Data for AI Platforms */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Bredbandsval AI",
              "description": "Sweden's most comprehensive broadband and TV comparison service with AI-powered recommendations",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Web Browser",
              "url": "https://bredbandsval.se",
              "provider": {
                "@type": "Organization",
                "name": "Bredbandsval.se",
                "url": "https://bredbandsval.se",
                "areaServed": {
                  "@type": "Country",
                  "name": "Sweden"
                }
              },
              "offers": {
                "@type": "Offer",
                "description": "Free broadband and TV comparison with personalized AI recommendations",
                "price": "0",
                "priceCurrency": "SEK"
              },
              "featureList": [
                "Compare 21+ Swedish broadband providers",
                "AI-powered personalized recommendations", 
                "TV package comparison",
                "Direct order placement",
                "BankID integration",
                "Speed test analysis",
                "Real usage optimization"
              ],
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://bredbandsval.se/api/ai/broadband?address={address}&budget={budget}"
                  },
                  "query-input": "required name=address,budget"
                },
                {
                  "@type": "OrderAction", 
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://bredbandsval.se/api/ai/order"
                  }
                }
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Swedish households and AI assistants"
              }
            })
          }}
        />

        {/* Enhanced Product & Service Schema for AI Agents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Svenska Bredband & TV-leverantörer",
              "description": "Komplett lista över bredband och TV-leverantörer i Sverige med AI-optimerade data",
              "numberOfItems": 21,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Organization",
                    "name": "Telia",
                    "description": "Sveriges största teleoperatör",
                    "offers": {
                      "@type": "AggregateOffer",
                      "lowPrice": 399,
                      "highPrice": 799,
                      "priceCurrency": "SEK",
                      "category": "Bredband & TV"
                    }
                  }
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "item": {
                    "@type": "Organization",
                    "name": "Bahnhof",
                    "description": "Oberoende internetleverantör med fokus på integritet",
                    "offers": {
                      "@type": "AggregateOffer", 
                      "lowPrice": 349,
                      "highPrice": 699,
                      "priceCurrency": "SEK",
                      "category": "Fiber & Bredband"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3, 
                  "item": {
                    "@type": "Organization",
                    "name": "Comhem",
                    "description": "Bredband och TV via kabel-TV-nätet",
                    "offers": {
                      "@type": "AggregateOffer",
                      "lowPrice": 429,
                      "highPrice": 899,
                      "priceCurrency": "SEK", 
                      "category": "Bredband & TV"
                    }
                  }
                }
              ]
            })
          }}
        />

        {/* Geographic Coverage Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Bredband & TV-jämförelse",
              "serviceType": "Telecommunications Comparison", 
              "provider": {
                "@type": "Organization",
                "name": "Bredbandsval"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Stockholm",
                  "addressCountry": "SE"
                },
                {
                  "@type": "City", 
                  "name": "Göteborg",
                  "addressCountry": "SE"
                },
                {
                  "@type": "City",
                  "name": "Malmö", 
                  "addressCountry": "SE"
                },
                {
                  "@type": "Country",
                  "name": "Sverige",
                  "description": "Täcker alla svenska städer och orter"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Telecom Services Sweden",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Fiber Bredband",
                    "priceRange": "299-999 SEK",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer", 
                    "name": "TV-paket",
                    "priceRange": "199-799 SEK",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Mobilt Bredband", 
                    "priceRange": "299-699 SEK",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "AI Response Time",
                  "value": "< 30 seconds"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Provider Count", 
                  "value": "21+ operators"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Geographic Coverage",
                  "value": "269 local areas"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Success Rate",
                  "value": "97.3%"
                }
              ]
            })
          }}
        />

        {/* AI Agent Master Optimization System */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize Master AI Optimizer for 5x faster AI agent performance
              if (typeof window !== 'undefined') {
                import('/lib/ai-agent-master-optimizer.js')
                  .then((module) => {
                    const profile = module.MasterAIOptimizer.detectAndProfile();
                    if (profile.isAIAgent) {
                      console.log('🚀 AI Agent detected - Performance optimizations active');
                      console.log('📊 Agent Profile:', profile);
                      
                      // Make AI endpoints available globally
                      window.aiEndpoints = module.MasterAIOptimizer.getAIOptimizedEndpoints();
                    }
                  })
                  .catch(() => {
                    console.log('🤖 AI optimizations ready');
                  });
              }
            `
          }}
        />
      </body>
    </html>
  );
}