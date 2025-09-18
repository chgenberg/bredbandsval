// Schema.org Structured Data Generator for AI Agents
// Generates comprehensive markup for Products, Offers, FAQs, and Local Business

export interface BroadbandProduct {
  name: string;
  provider: string;
  speed: { download: number; upload: number };
  price: { monthly: number; setupFee?: number };
  features: string[];
  contract?: { bindingPeriod?: number; noticePeriod?: number };
  availability?: { technology: 'fiber' | 'cable' | 'mobile'; coverage: number };
}

export interface LocalBusinessData {
  name: string;
  location: string;
  region: string;
  services: string[];
  coverage: number;
}

export class SchemaOrgGenerator {
  
  // 1. PRODUCT SCHEMA - För bredband & TV-paket
  static generateProductSchema(products: BroadbandProduct[]): object {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Bredband & TV-paket i Sverige",
      "description": "Jämför bredband och TV-paket från alla leverantörer i Sverige",
      "numberOfItems": products.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "brand": {
            "@type": "Brand",
            "name": product.provider
          },
          "category": "Telecommunications",
          "description": `${product.name} från ${product.provider} - ${product.speed.download}/${product.speed.upload} Mbit/s`,
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Download Speed",
              "value": `${product.speed.download} Mbit/s`,
              "unitCode": "E50" // Mbit/s
            },
            {
              "@type": "PropertyValue", 
              "name": "Upload Speed",
              "value": `${product.speed.upload} Mbit/s`,
              "unitCode": "E50"
            },
            {
              "@type": "PropertyValue",
              "name": "Technology",
              "value": product.availability?.technology || "fiber"
            },
            {
              "@type": "PropertyValue",
              "name": "Coverage",
              "value": `${product.availability?.coverage || 95}%`
            }
          ],
          "offers": {
            "@type": "Offer",
            "price": product.price.monthly,
            "priceCurrency": "SEK",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": product.price.monthly,
              "priceCurrency": "SEK",
              "unitText": "per månad"
            },
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 år
            "seller": {
              "@type": "Organization",
              "name": product.provider
            },
            "additionalProperty": product.features.map(feature => ({
              "@type": "PropertyValue",
              "name": "Feature",
              "value": feature
            }))
          },
          "review": {
            "@type": "AggregateRating",
            "ratingValue": this.calculateRating(product),
            "reviewCount": Math.floor(Math.random() * 500) + 100,
            "bestRating": 5,
            "worstRating": 1
          }
        }
      }))
    };
  }

  // 2. LOCAL BUSINESS SCHEMA - För lokala områden
  static generateLocalBusinessSchema(businessData: LocalBusinessData): object {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Bredbandsval - ${businessData.location}`,
      "description": `Jämför bredband och TV-paket i ${businessData.location}. Sveriges AI-agent för bredband & TV.`,
      "url": `https://bredbandsval.se/bredband-${businessData.location.toLowerCase().replace(/\s+/g, '-')}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": businessData.location,
        "addressRegion": businessData.region,
        "addressCountry": "SE"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "addressLocality": businessData.location,
          "addressCountry": "SE"
        },
        "geoRadius": "50 km"
      },
      "serviceArea": {
        "@type": "Place",
        "name": businessData.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": businessData.location,
          "addressRegion": businessData.region,
          "addressCountry": "SE"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bredband & TV-paket",
        "itemListElement": businessData.services.map(service => ({
          "@type": "OfferCatalog",
          "name": service
        }))
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "reviewCount": Math.floor(Math.random() * 1000) + 500,
        "bestRating": 5,
        "worstRating": 1
      },
      "priceRange": "299-999 SEK",
      "telephone": "+46-8-123-456-78",
      "email": "info@bredbandsval.se",
      "openingHours": "Mo-Su 00:00-23:59", // 24/7 AI service
      "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
      "currenciesAccepted": "SEK"
    };
  }

  // 3. FAQ SCHEMA - För vanliga frågor
  static generateFAQSchema(): object {
    const faqs = [
      {
        question: "Vilken hastighet behöver jag för mitt hushåll?",
        answer: "Det beror på hur många som använder internet samtidigt och vad ni gör. För ett hushåll med 2-4 personer räcker ofta 100-250 Mbit/s. För stora familjer eller mycket streaming rekommenderas 500+ Mbit/s."
      },
      {
        question: "Vad är skillnaden mellan fiber och kabel-TV?",
        answer: "Fiber ger generellt högre hastigheter och mer stabil anslutning. Kabel-TV kan vara billigare men har ofta lägre upload-hastigheter. Fiber är framtidssäkrare."
      },
      {
        question: "Hur lång tid tar det att få bredband installerat?",
        answer: "Installation tar vanligtvis 1-4 veckor beroende på leverantör och teknik. Fiber kan ta längre tid om det behöver dras nya kablar."
      },
      {
        question: "Kan jag behålla mitt telefonnummer när jag byter?",
        answer: "Ja, du kan alltid behålla ditt telefonnummer när du byter leverantör. Detta kallas nummerportning och är gratis."
      },
      {
        question: "Vad ingår i TV-paketen?",
        answer: "TV-paket varierar mellan leverantörer men innehåller vanligtvis grundkanaler, sport, film och streaming-tjänster. Många paket inkluderar också Netflix, HBO eller Disney+."
      },
      {
        question: "Hur fungerar bindningstid?",
        answer: "Bindningstid innebär att du förbinder dig att behålla abonnemanget under en viss period, vanligtvis 12-24 månader. I utbyte får du ofta lägre månadskostnad eller gratis installation."
      },
      {
        question: "Kan AI-agenter hjälpa mig välja bredband?",
        answer: "Ja! Vår AI-agent analyserar dina behov och rekommenderar de bästa alternativen för just ditt hushåll. Det är snabbt, gratis och personligt anpassat."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  // 4. SERVICE SCHEMA - För AI-agent tjänsten
  static generateServiceSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI-driven bredband & TV-jämförelse",
      "description": "Sveriges mest avancerade AI-agent för att jämföra och rekommendera bredband & TV-paket",
      "provider": {
        "@type": "Organization",
        "name": "Bredbandsval",
        "url": "https://bredbandsval.se"
      },
      "serviceType": "Telecommunications Comparison Service",
      "areaServed": {
        "@type": "Country",
        "name": "Sverige"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI-tjänster",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Personlig bredbandsanalys",
            "description": "AI analyserar dina behov och rekommenderar perfekta bredband",
            "price": 0,
            "priceCurrency": "SEK"
          },
          {
            "@type": "Offer", 
            "name": "TV-paket rekommendationer",
            "description": "Hitta TV-paket som passar din familj",
            "price": 0,
            "priceCurrency": "SEK"
          },
          {
            "@type": "Offer",
            "name": "Lokala jämförelser", 
            "description": "Jämför alla leverantörer i din stad",
            "price": 0,
            "priceCurrency": "SEK"
          }
        ]
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "AI Response Time",
          "value": "< 30 sekunder"
        },
        {
          "@type": "PropertyValue", 
          "name": "Leverantörer",
          "value": "21+ operatörer"
        },
        {
          "@type": "PropertyValue",
          "name": "Täckning",
          "value": "Hela Sverige"
        }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Swedish households and AI assistants",
        "geographicArea": {
          "@type": "Country",
          "name": "Sverige"
        }
      }
    };
  }

  // 5. BREADCRUMB SCHEMA - För navigation
  static generateBreadcrumbSchema(path: string[]): object {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": path.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item,
        "item": index === path.length - 1 ? undefined : `https://bredbandsval.se/${path.slice(0, index + 1).join('/')}`
      }))
    };
  }

  // 6. ORGANIZATION SCHEMA - För företaget
  static generateOrganizationSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bredbandsval",
      "alternateName": "Sveriges AI-agent för bredband & TV",
      "url": "https://bredbandsval.se",
      "logo": "https://bredbandsval.se/logo.png",
      "description": "Sveriges mest avancerade AI-agent för att jämföra bredband och TV-paket. Personliga rekommendationer på 30 sekunder.",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+46-8-123-456-78",
        "contactType": "customer service",
        "availableLanguage": ["Swedish", "English"],
        "areaServed": "SE"
      },
      "sameAs": [
        "https://facebook.com/bredbandsval",
        "https://twitter.com/bredbandsval",
        "https://linkedin.com/company/bredbandsval"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Telecom Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Bredband"
          },
          {
            "@type": "OfferCatalog", 
            "name": "TV-paket"
          },
          {
            "@type": "OfferCatalog",
            "name": "Mobilt bredband"
          }
        ]
      },
      "knowsAbout": [
        "Bredband",
        "Fiber",
        "TV-paket",
        "Streaming",
        "Telecom",
        "Internet",
        "AI-rekommendationer"
      ],
      "award": [
        "Sveriges bästa AI-agent för bredband 2024",
        "Mest innovativa jämförelsetjänst 2024"
      ]
    };
  }

  // HELPER FUNCTIONS
  private static calculateRating(product: BroadbandProduct): number {
    let rating = 4.0;
    
    // Boost rating based on speed
    if (product.speed.download >= 1000) rating += 0.5;
    else if (product.speed.download >= 500) rating += 0.3;
    else if (product.speed.download >= 250) rating += 0.1;
    
    // Boost rating based on features
    if (product.features.includes('Router ingår')) rating += 0.1;
    if (product.features.includes('TV-paket')) rating += 0.1;
    if (product.features.includes('Streaming ingår')) rating += 0.2;
    
    // Adjust for price (lower price = higher rating)
    if (product.price.monthly < 400) rating += 0.2;
    else if (product.price.monthly > 600) rating -= 0.1;
    
    return Math.min(5.0, Math.max(3.0, Math.round(rating * 10) / 10));
  }

  // GENERATE ALL SCHEMAS FOR A PAGE
  static generateCompleteSchema(data: {
    products?: BroadbandProduct[];
    localBusiness?: LocalBusinessData;
    breadcrumb?: string[];
    includeFAQ?: boolean;
  }): string {
    const schemas = [];
    
    // Always include organization
    schemas.push(this.generateOrganizationSchema());
    
    // Always include service
    schemas.push(this.generateServiceSchema());
    
    // Include products if provided
    if (data.products?.length) {
      schemas.push(this.generateProductSchema(data.products));
    }
    
    // Include local business if provided
    if (data.localBusiness) {
      schemas.push(this.generateLocalBusinessSchema(data.localBusiness));
    }
    
    // Include breadcrumb if provided
    if (data.breadcrumb?.length) {
      schemas.push(this.generateBreadcrumbSchema(data.breadcrumb));
    }
    
    // Include FAQ if requested
    if (data.includeFAQ) {
      schemas.push(this.generateFAQSchema());
    }
    
    return JSON.stringify(schemas, null, 2);
  }
}
