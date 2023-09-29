import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

import { Button, ButtonProps } from "./ui/button";

type Props = ButtonProps & {
  icon: ElementType;
  iconclassname?: string;
};

export function ButtonIcon({ icon: Icon, ...props }: Props) {
  return (
    <Button
      variant="ghost"
      className="flex items-center justify-center p-2"
      {...props}
    >
      <Icon className={twMerge("h-4 w-4", props.iconclassname)} />
    </Button>
  );
}
