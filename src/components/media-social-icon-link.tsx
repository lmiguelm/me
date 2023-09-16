import Link from "next/link";
import { ElementType } from "react";

import { ButtonIcon } from "./button-icon";
import { ButtonProps } from "./ui/button";

type Props = ButtonProps & {
  icon: ElementType;
  url: string;
};

export function MediaSocialIconLink({ icon: Icon, url, ...props }: Props) {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={url}>
      <ButtonIcon icon={Icon} {...props} />
    </Link>
  );
}
