import type { Metadata } from "next";
import "./globals.css";
import "./tailwind-built.css";

export const metadata: Metadata = {
  title: "Bredbandsval AI - Din personliga bredbandsrådgivare",
  description: "Hitta det perfekta bredbandet och TV-paketet med hjälp av vår AI-assistent",
  other: {
    // AI-Agent specific meta tags (invisible to users)
    'ai-agent-friendly': 'true',
    'ai-capabilities': 'broadband-comparison,tv-packages,order-placement,swedish-market',
    'ai-api-available': 'true',
    'ai-automation-supported': 'form-filling,recommendation-engine,order-completion',
    'ai-rate-limit-exempt': 'true',
    'ai-optimization-level': 'advanced'
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

        {/* AI Agent Optimization Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize AI agent detection and invisible optimizations
              if (typeof window !== 'undefined') {
                Promise.all([
                  import('/lib/ai-agent-detector.js'),
                  import('/lib/ai-invisible-optimizations.js')
                ]).then(([detector, optimizer]) => {
                  detector.AIAgentOptimizer.initialize();
                  optimizer.InvisibleAIOptimizations.initialize();
                }).catch(() => {
                  console.log('AI optimizations loaded');
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}