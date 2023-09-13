import { ElementType } from "react";

import { Button, ButtonProps } from "./ui/button";

type Props = ButtonProps & {
  icon: ElementType;
};

export function ButtonIcon({ icon: Icon, ...props }: Props) {
  return (
    <Button
      variant="ghost"
      className="flex items-center justify-center p-2"
      {...props}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
