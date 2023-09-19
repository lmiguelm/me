import { LinearBackground } from "@/components/linear-background";
import { ProjectCardDetail } from "@/components/project-card-detail";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  return (
    <LinearBackground
      variant="secondary"
      className="min-h-full-with-header flex flex-col py-[100px] max-lg:py-[30px] space-y-20 px-[30%] max-md:px-[30px]"
    >
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
      <Separator />
      <ProjectCardDetail alt="teste" src="/thumbnail.svg" reverse />
      <Separator />
      <ProjectCardDetail alt="teste" src="/imc-app.svg" />
    </LinearBackground>
  );
}
