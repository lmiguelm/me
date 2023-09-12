import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/contexts/theme-provider";

import "../global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lmiguelm",
  description: "Portfólio de Luis Miguel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
