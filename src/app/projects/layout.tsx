import type { Metadata } from "next";

import { Header } from "@/components/header";
import "../../global.css";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos desenvolvidos por Luis Miguel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
