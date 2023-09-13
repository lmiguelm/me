import Link from "next/link";
import { ElementType } from "react";

import { ButtonIcon } from "./ButtonIcon";

type Props = {
  icon: ElementType;
  url: string;
};

export function MediaSocialIconLink({ icon: Icon, url }: Props) {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={url}>
      <ButtonIcon icon={Icon} />
    </Link>
  );
}
