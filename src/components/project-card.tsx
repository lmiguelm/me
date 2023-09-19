import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "./tooltip";
import { AspectRatio } from "./ui/aspect-ratio";

export function ProjectCard() {
  return (
    <Tooltip message="Project Name">
      <Link href="#">
        <div className="overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              height={500}
              width={500}
              alt="project"
              src="/thumbnail.svg"
              className="rounded transition-transform hover:scale-105"
            />
          </AspectRatio>
        </div>
      </Link>
    </Tooltip>
  );
}
