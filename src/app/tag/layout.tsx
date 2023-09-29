import { Suspense } from "react";

import type { Metadata } from "next";

import { FloatAction } from "@/components/float-action";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LinearBackground } from "@/components/linear-background";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos desenvolvidos por Luis Miguel por tag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatAction.Root>
        <FloatAction.Arrow />
        <FloatAction.Progress />
        <FloatAction.Share />
      </FloatAction.Root>

      <Suspense fallback={<Skeleton className="w-full h-14" />}>
        <Header />
      </Suspense>

      <LinearBackground
        variant="secondary"
        className="min-h-full-with-header-and-footer flex flex-col py-[90px] px-[30%] max-md:px-[30px]"
      >
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          {children}
        </Suspense>
      </LinearBackground>

      <Suspense fallback={<Skeleton className="w-full h-80" />}>
        <Footer />
      </Suspense>
    </>
  );
}
