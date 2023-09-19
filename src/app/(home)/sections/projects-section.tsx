import { LinearBackground } from "@/components/linear-background";
import { Link } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Subtitle } from "@/components/subtitle";

export function ProjectsSection() {
  return (
    <LinearBackground className="col-span-2 max-lg:col-span-1 p-3 gap-6 flex flex-col rounded-lg">
      <div className="flex justify-between items-center">
        <Subtitle>Projetos</Subtitle>
        <Link href="/projects" title="Ver Todos" />
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </LinearBackground>
  );
}
