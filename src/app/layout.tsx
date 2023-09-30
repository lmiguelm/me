import type { Metadata } from "next";

import { ThemeProvider } from "@/contexts/theme-provider";

import "../global.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "lmiguelm - %s",
    default: "lmiguelm",
  },
  description: "Portfólio de Luis Miguel",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning suppressContentEditableWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
