import { Card } from "@/components/card";

export function CardsSection() {
  return (
    <div className="flex-1 flex max-lg:flex-col gap-3">
      <Card title={4000} message="Visualizações" />
      <Card title={3} message="Anos de experiência" />
      <Card title={10} message="Projetos desenvolvidos" />
    </div>
  );
}
