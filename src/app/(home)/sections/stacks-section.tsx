import { LinearBackground } from "@/components/linear-background";
import { StackCard } from "@/components/stack-card";
import { Subtitle } from "@/components/subtitle";

import { skills } from "@/utils/skills";

export function StacksSection() {
  return (
    <LinearBackground className="flex flex-col p-3 gap-6 rounded-xl">
      <Subtitle>Domínio técnico</Subtitle>

      <div className="grid grid-cols-8 max-sm:grid-cols-4 items-center gap-3">
        {Object.entries(skills).map(([stack, { path, url }]) => (
          <StackCard key={stack} alt={stack} src={path} url={url} />
        ))}
      </div>
    </LinearBackground>
  );
}
