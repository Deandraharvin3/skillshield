import type { Metadata } from "next";
import "./globals.css";
import PublicHeader from "@/components/layout/PublicHeader";
// import PublicFooter from "@/components/layout/PublicFooter";

export const metadata: Metadata = {
  title: "SkillShield - Hire by evidence",
  description: "Enterprise B2B HR Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@400,0..1,0,24&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col">
        <PublicHeader />
        <main className="flex-grow">
          {children}
        </main>
        {/* <PublicFooter /> */}
      </body>
    </html>
  );
}