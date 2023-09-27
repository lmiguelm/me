import React from "react";

import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";

import { ProjectCardDetail } from "@/components/project-card-detail";

import { AnimatedSeparator } from "@/components/AnimatedSeparator";
import { SubHeader } from "@/components/sub-header";
import { formatUrlParam, parseUrlParam } from "@/utils/url-param";

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const client = createClient();

  const tags = await client.getTags();

  return tags.map((tag) => ({
    tag: formatUrlParam(tag),
  }));
}

export default async function Tag({ params }: Props) {
  const { tag } = params;
  const parsedTag = parseUrlParam(tag);

  const client = createClient();

  const projects = await client.getByType("project", {
    filters: [filter.at("document.tags", [parsedTag])],
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetch: ["project.title", "project.resume", "project.thumbnail"],
  });

  const projectQuantity = projects.results.length;

  return (
    <div className="flex flex-col gap-32 max-sm:gap-20 space-y-10">
      <SubHeader
        title={parsedTag}
        message={
          projectQuantity === 0
            ? "Nenhum projeto encontrado com esta tag."
            : projectQuantity === 1
            ? `${projectQuantity} projeto encontrado com esta tag.`
            : `${projectQuantity} projetos encontrado com esta tag.`
        }
      />

      {projects.results.map((project, index) => (
        <React.Fragment key={project.id}>
          <ProjectCardDetail
            reverse={index % 2 === 0}
            data={{
              title: project.data.title,
              resume: project.data.resume,
              thumbnail: project.data.thumbnail,
              url: project.url!,
              tags: project.tags,
            }}
          />

          <AnimatedSeparator />
        </React.Fragment>
      ))}
    </div>
  );
}
