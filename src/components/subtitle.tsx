import { ubuntu_500 } from "@/app/fonts";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"h2">;

export function Subtitle(props: Props) {
  return (
    <h2 className={twMerge(ubuntu_500.className, "text-lg")}>
      {props.children}
    </h2>
  );
}
