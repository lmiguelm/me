import { Metadata } from "next";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { createClient } from "@/prismicio";
import { DateField, asText } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { FloatAction } from "@/components/float-action";
import { Link } from "@/components/link";
import { SubHeader } from "@/components/sub-header";
import { Timeline } from "@/components/timeline";
import { Title } from "@/components/title";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Aqui você pode ver toda minha trajetória em programação.",
};

export default async function Page() {
  const client = createClient();

  const { data } = await client.getSingle("about");

  const { title, description, timeline, curriculum } = data;

  function formatDate(startDate?: DateField, endDate?: DateField) {
    const start = startDate && new Date(startDate);
    const end = endDate && new Date(endDate);

    if (!end && start) {
      return format(start as Date, "'Desde' LLLL 'de' yyyy", {
        locale: ptBR,
      });
    }

    if (!start && end) {
      return format(end as Date, "LLLL 'de' yyyy", {
        locale: ptBR,
      });
    }

    if (start && end) {
      return `${format(start as Date, "dd LLL 'de' yyyy", {
        locale: ptBR,
      })} - ${format(end as Date, "dd LLL 'de' yyyy", {
        locale: ptBR,
      })}`;
    }

    return "";
  }

  return (
    <>
      <FloatAction.Root>
        <FloatAction.Arrow />

        <FloatAction.Progress />

        <FloatAction.Link
          href={(curriculum as any).url}
          target="_blank"
          title="Ver Currículo"
          rel="noopener noreferrer"
        />
      </FloatAction.Root>

      <div className="flex flex-col items-center min-h-screen space-y-20">
        <SubHeader title={title!} message={asText(description)} />

        <Timeline.Root>
          {timeline.map(
            ({ content, credential, end_date, start_date, title }, index) => (
              <Timeline.Item
                index={index + 1}
                key={`${title}${start_date}${end_date}`}
                date={formatDate(start_date, end_date)}
              >
                <Title className="text-xl font-semibold">{title}</Title>

                <div className="prose prose-system">
                  <PrismicRichText field={content} />
                </div>

                {!!(credential as any).url && (
                  <Link href={(credential as any).url} title="Ver credencial" />
                )}
              </Timeline.Item>
            )
          )}
        </Timeline.Root>
      </div>
    </>
  );
}
