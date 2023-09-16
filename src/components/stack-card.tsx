import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { Tooltip } from "@/components/tooltip";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = ImageProps & {
  url: string;
};

export function StackCard({ url, ...props }: Props) {
  return (
    <Tooltip message={props.alt}>
      <Link rel="noopener noreferrer" target="_blank" href={url}>
        <div
          className={twMerge(
            `bg-gradient-to-r from-background p-3 h-[90px] max-sm:h-[60px] hover:bg-current/5 rounded transition-colors flex justify-center items-center`,
            `to-highlight`
          )}
        >
          <AspectRatio
            ratio={4 / 4}
            className="flex justify-center items-center"
          >
            <Image
              height={60}
              width={60}
              className="max-w-none max-lg:w-[30px] hover:scale-110 transition-transform"
              {...props}
            />
          </AspectRatio>
        </div>
      </Link>
    </Tooltip>
  );
}
