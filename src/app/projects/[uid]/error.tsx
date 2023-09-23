"use client";

import Link from "next/link";

import Lottie from "react-lottie";
import Animation from "../../../../public/lottie/not-found-animation.json";

import { AnimatedBorderEffect } from "@/components/animated-border-effect";
import { MotionDiv } from "@/components/motion-div";
import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <MotionDiv
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <AnimatedBorderEffect>
        <div className="flex flex-col items-center space-y-10 bg-background rounded p-10">
          <Lottie
            options={{ animationData: Animation, loop: true, autoplay: true }}
            height={250}
            width={250}
          />

          <div className="flex flex-col items-center">
            <h2 className="text-lg mb-3 leading-relaxed">
              Parece que algo deu errado.
            </h2>

            <p className="text-sm text-center leading-relaxed text-muted-foreground">
              Não existe nenhum projeto com este nome.
            </p>

            <p className="text-sm text-center leading-relaxed text-muted-foreground">
              Clicando no botão abaixo você será redirecionado a lista de
              projetos.
            </p>
          </div>

          <Link href="/projects">
            <Button>Ir para Projetos</Button>
          </Link>
        </div>
      </AnimatedBorderEffect>
    </MotionDiv>
  );
}
