import { intervalToDuration } from "date-fns";

import { createClient } from "@/prismicio";

import { Card } from "@/components/card";

export async function CardsSection() {
  const client = createClient();
  const projects = await client.getAllByType("project");

  const { years: experience } = intervalToDuration({
    start: new Date(2018, 1, 1),
    end: new Date(),
  });

  return (
    <div className="flex-1 flex max-lg:flex-col gap-3">
      <Card title={projects.length} message="Projetos desenvolvidos" />
      <Card title={experience!} message="Anos de experiência" />
    </div>
  );
}
