"use client";

import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";

import { fugaz_one } from "@/app/fonts";
import { LinearBackground } from "./linear-background";

type Props = {
  title: number;
  message: string;
};

export function Card({ title, message }: Props) {
  return (
    <LinearBackground
      variant="highlight"
      className="rounded-xl flex flex-col items-center justify-center flex-1 p-3 bg-gradient-to-b"
    >
      <h1
        className={twMerge(
          fugaz_one.className,
          "text-5xl max-sm:text-4xl text-muted-foreground"
        )}
      >
        <CountUp
          start={0}
          end={title}
          duration={4}
          formattingFn={(value) => `+${value.toLocaleString("pt-BR")}`}
        />
      </h1>

      <span className="max-sm:text-sm text-center text-muted-foreground">
        {message}
      </span>
    </LinearBackground>
  );
}
