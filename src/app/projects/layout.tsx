import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LinearBackground } from "@/components/linear-background";
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

      <LinearBackground
        variant="secondary"
        className="min-h-full-with-header-and-footer flex flex-col py-[90px] px-[30%] max-md:px-[30px]"
      >
        {children}
      </LinearBackground>

      <Footer />
    </>
  );
}
