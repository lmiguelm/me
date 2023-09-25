import type { Metadata } from "next";

import { ThemeProvider } from "@/contexts/theme-provider";

import "../global.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "lmiguelm | %s",
    default: "lmiguelm",
  },
  description: "Portfólio de Luis Miguel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning suppressContentEditableWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="32x32"
          type="image/x-icon"
        />

        <link
          rel="icon"
          href="/favicon.ico"
          sizes="16x16"
          type="image/x-icon"
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
