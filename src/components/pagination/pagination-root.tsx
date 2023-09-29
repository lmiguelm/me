import { ComponentProps } from "react";
import { MotionDiv } from "../motion-div";

export function PaginationRoot(props: ComponentProps<"footer">) {
  return (
    <MotionDiv>
      <footer className="flex items-center justify-center gap-3">
        {props.children}
      </footer>
    </MotionDiv>
  );
}
