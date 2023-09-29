import { notFound } from "next/navigation";
import React from "react";

import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";

import { parseUrlParam } from "@/utils/url-param";
import { AnimatedSeparator } from "./AnimatedSeparator";
import { PaginationComponent } from "./pagination/pagination";
import { ProjectCardDetail } from "./project-card-detail";
import { SubHeader } from "./sub-header";

type Props = {
  tag: string;
  currentPage?: number;
};

export async function Tags({ tag, currentPage = 1 }: Props) {
  const client = createClient();
  const parsedTag = parseUrlParam(tag);

  const response = await client.getByType("project", {
    filters: [filter.at("document.tags", [parsedTag])],
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetch: ["project.title", "project.resume", "project.thumbnail"],
    pageSize: 5,
    page: currentPage,
  });

  const projectQuantity = response.total_results_size;

  if (!projectQuantity) {
    notFound();
  }

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

      {response.results.map((project, index) => (
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

      <PaginationComponent
        currentPage={response.page}
        totalPages={response.total_pages}
        defaultPath={`/tag/${tag}`}
      />
    </div>
  );
}
