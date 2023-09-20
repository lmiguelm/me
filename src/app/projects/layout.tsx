import type { Metadata } from "next";

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
        className=" flex flex-col max-lg:py-[30px] space-y-20 px-[30%] max-md:px-[30px]"
      >
        {children}
      </LinearBackground>
    </>
  );
}
