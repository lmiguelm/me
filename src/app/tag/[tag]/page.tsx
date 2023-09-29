import { Metadata } from "next";

import { createClient } from "@/prismicio";

import { Tags } from "@/components/tags";
import { formatUrlParam, parseUrlParam } from "@/utils/url-param";

export async function generateStaticParams() {
  const client = createClient();

  const tags = await client.getTags();

  return tags.map((tag) => ({
    tag: formatUrlParam(tag),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = params;
  const parsedTag = parseUrlParam(tag);

  return {
    title: `lmiguelm - ${parsedTag}`,
    description: `Projetos que utilizam ${parsedTag}`,
  };
}

type Props = {
  params: {
    tag: string;
  };
};

export default async function Tag({ params }: Props) {
  return <Tags tag={params.tag} />;
}
