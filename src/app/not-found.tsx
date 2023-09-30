import { Suspense } from "react";

import { AnimatedBorderEffect } from "@/components/animated-border-effect";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LinearBackground } from "@/components/linear-background";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Suspense fallback={<Skeleton className="w-full h-14" />}>
        <Header.Root>
          <Header.Content />
          <Header.Footer />
        </Header.Root>
      </Suspense>

      <LinearBackground
        variant="secondary"
        className="min-h-full-with-header-and-footer flex flex-col py-[90px] px-[30%] max-md:px-[30px]"
      >
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <AnimatedBorderEffect>
            <main className="bg-background min-h-full-with-header-and-footer flex flex-col items-center justify-center space-y-6">
              <Title className="text-[100px]">404</Title>

              <div className="flex flex-col items-center leading-relaxed">
                <Subtitle>Página não encontrada</Subtitle>

                <p className="text-sm">
                  Infelizmente, a página que procurava não foi encontrada.
                </p>
              </div>

              <Link href="/">
                <Button>Ir para Home</Button>
              </Link>
            </main>
          </AnimatedBorderEffect>
        </Suspense>
      </LinearBackground>

      <Suspense fallback={<Skeleton className="w-full h-80" />}>
        <Footer />
      </Suspense>
    </>
  );
}
