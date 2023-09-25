import React from "react";

import { FloatActions } from "@/components/float-actions";
import { ProjectCardDetail } from "@/components/project-card-detail";

import { AnimatedSeparator } from "@/components/AnimatedSeparator";
import { SubHeader } from "@/components/sub-header";
import { createClient } from "@/prismicio";
import { formatUrlParam, parseUrlParam } from "@/utils/url-param";

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const client = createClient();

  const tags = await client.getTags();

  return tags.map((tag) => ({
    tag: formatUrlParam(tag),
  }));
}

export default async function Tag({ params }: Props) {
  const { tag } = params;
  const parsedTag = parseUrlParam(tag);

  const client = createClient();

  const posts = await client.getAllByTag(parsedTag, {
    fetchOptions: {
      next: {
        revalidate: 60 * 30, // 30 minutes
      },
    },
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  console.log(posts);

  const postQuantity = posts.length;

  return (
    <>
      <FloatActions />

      <div className="flex flex-col gap-32 max-sm:gap-20 space-y-10">
        <SubHeader
          title={parsedTag}
          message={
            postQuantity === 0
              ? "Nenhum projeto encontrado com esta tag."
              : postQuantity === 1
              ? `${postQuantity} projeto encontrado com esta tag.`
              : `${postQuantity} projetos encontrado com esta tag.`
          }
        />

        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <ProjectCardDetail
              reverse={index % 2 === 0}
              data={{
                title: post.data.title,
                resume: post.data.resume,
                thumbnail: post.data.thumbnail,
                url: post.url!,
                tags: post.tags,
              }}
            />

            <AnimatedSeparator />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
