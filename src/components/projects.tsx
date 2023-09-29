import React from "react";

import { ProjectCardDetail } from "@/components/project-card-detail";

import { AnimatedSeparator } from "@/components/AnimatedSeparator";
import { PaginationComponent } from "@/components/pagination/pagination";
import { SubHeader } from "@/components/sub-header";
import { createClient } from "@/prismicio";

type Props = {
  currentPage?: number;
};

export async function Projects({ currentPage = 1 }: Props) {
  const client = createClient();

  const response = await client.getByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetch: ["project.title", "project.resume", "project.thumbnail"],
    pageSize: 5,
    page: currentPage,
  });

  return (
    <div className="flex flex-col gap-32 max-sm:gap-20 space-y-10">
      <SubHeader
        title="Projetos"
        message=" Aqui você encontra todos os projetos que já desenvolvi em toda minha
          trajetória, desde pessoais, até comerciais."
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
        defaultPath="/projects"
      />
    </div>
  );
}
