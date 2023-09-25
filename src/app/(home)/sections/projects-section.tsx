import { createClient } from "@/prismicio";

import { LinearBackground } from "@/components/linear-background";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Subtitle } from "@/components/subtitle";

export async function ProjectsSection() {
  const client = createClient();

  const projects = await client.getAllByType("project", {
    limit: 3,
    orderings: { field: "document.first_publication_date", direction: "desc" },
  });

  return (
    <LinearBackground className="col-span-2 max-lg:col-span-1 p-3 gap-6 flex flex-col rounded-lg">
      <div className="flex justify-between items-center">
        <Subtitle>Projetos</Subtitle>
        <Link href="/projects" title="Ver Todos" />
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.uid}
            data={project.data}
            href={project.url!}
          />
        ))}
      </div>
    </LinearBackground>
  );
}
