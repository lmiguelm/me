import React from "react";

import { ProjectCardDetail } from "@/components/project-card-detail";

import { AnimatedSeparator } from "@/components/AnimatedSeparator";
import { SubHeader } from "@/components/sub-header";
import { createClient } from "@/prismicio";

export default async function Projects() {
  const client = createClient();

  const projects = await client.getAllByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetch: ["project.title", "project.resume", "project.thumbnail"],
  });

  return (
    <div className="flex flex-col gap-32 max-sm:gap-20 space-y-10">
      <SubHeader
        title="Projetos"
        message=" Aqui você encontra todos os projetos que já desenvolvi em toda minha
          trajetória, desde pessoais, até comerciais."
      />

      {projects.map((project, index) => (
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
