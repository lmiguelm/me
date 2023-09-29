import { Metadata } from "next";

import { Tags } from "@/components/tags";
import { parseUrlParam } from "@/utils/url-param";

type Props = {
  params: {
    tag: string;
    currentPage: number;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = params;
  const parsedTag = parseUrlParam(tag);

  return {
    title: `lmiguelm - ${parsedTag}`,
    description: `Projetos que utilizam ${parsedTag}`,
  };
}

export default async function Tag({ params }: Props) {
  return <Tags tag={params.tag} currentPage={params.currentPage} />;
}
