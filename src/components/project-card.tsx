import Link from "next/link";

import { ProjectDocumentData, Simplify } from "../../prismicio-types";

import { Image } from "./image";
import { Tooltip } from "./tooltip";

type Props = {
  data: Simplify<ProjectDocumentData>;
  href: string;
};

export function ProjectCard({ data, href }: Props) {
  return (
    <Tooltip message={data.title!}>
      <Link href={href}>
        <Image
          field={data.thumbnail}
          height={500}
          width={500}
          className="rounded transition-transform hover:scale-110 object-cover aspect-video"
        />
      </Link>
    </Tooltip>
  );
}
