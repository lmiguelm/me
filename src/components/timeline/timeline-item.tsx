import { ComponentProps } from "react";
import { MotionDiv } from "../motion-div";

type Props = ComponentProps<"ol"> & {
  date: string;
  index?: number;
};

export function TimeLineItem({ index = 1, ...props }: Props) {
  return (
    <li className="flex flex-col max-w-2xl">
      <MotionDiv
        initial={{ x: index % 2 == 0 ? 25 : -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.6 }}
      >
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary" />

          <p className="text-sm text-muted-foreground italic">{props.date}</p>
        </div>

        <div className="flex flex-col space-y-3 p-3 mb-20">
          {props.children}
        </div>
      </MotionDiv>
    </li>
  );
}
