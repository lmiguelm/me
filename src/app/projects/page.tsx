import { FloatActions } from "@/components/float-actions";
import { ProjectCardDetail } from "@/components/project-card-detail";

import { Separator } from "@/components/ui/separator";

export default async function Projects() {
  return (
    <div className="flex flex-col gap-20">
      <FloatActions />

      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/thumbnail.svg" reverse />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
    </div>
  );
}
