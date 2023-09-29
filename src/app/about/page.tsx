import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

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

  return (
    <div className="flex flex-col items-center min-h-screen space-y-20">
      <SubHeader
        title={title!}
        message={asText(description)}
        links={[{ title: "Ver currículo", url: (curriculum as any).url }]}
      />

      <Timeline.Root>
        {timeline.map(
          ({ content, credential, end_date, start_date, title }, index) => (
            <Timeline.Item
              index={index + 1}
              key={`${title}${start_date}${end_date}`}
              startDate={start_date && new Date(start_date)}
              endDate={end_date && new Date(end_date)}
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
  );
}
