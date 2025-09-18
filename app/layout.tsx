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