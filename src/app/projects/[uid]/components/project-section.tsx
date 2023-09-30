import { Subtitle } from "@/components/subtitle";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  exists?: boolean;
};

export function ProjectSection({ exists = true, ...props }: Props) {
  if (!exists) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-3">
      <Subtitle>{props.title}</Subtitle>

      {props.children}
    </div>
  );
}
