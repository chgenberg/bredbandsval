import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}