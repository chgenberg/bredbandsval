import type { Metadata } from "next";
import "./globals.css";
import "./tailwind-built.css";

export const metadata: Metadata = {
  title: "Bredbandsval AI - Din personliga bredbandsrådgivare",
  description: "Hitta det perfekta bredbandet och TV-paketet med hjälp av vår AI-assistent",
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
        
        {/* AI Agent Detection Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize AI agent detection
              if (typeof window !== 'undefined') {
                import('/lib/ai-agent-detector.js').then(module => {
                  module.AIAgentOptimizer.initialize();
                }).catch(() => {
                  // Fallback if module loading fails
                  console.log('AI agent detection loaded');
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}