import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "./tooltip";

export function ProjectCard() {
  return (
    <Tooltip message="Project Name">
      <Link href="/projects/example">
        <Image
          height={500}
          width={500}
          alt="project"
          src="/thumbnail.svg"
          className="rounded transition-transform hover:scale-110 object-cover aspect-video"
        />
      </Link>
    </Tooltip>
  );
}
