import React from "react";

import { FloatActions } from "@/components/float-actions";
import { ProjectCardDetail } from "@/components/project-card-detail";

import { AnimatedSeparator } from "@/components/AnimatedSeparator";
import { SubHeader } from "@/components/sub-header";
import { createClient } from "@/prismicio";

export default async function Projects() {
  const client = createClient();

  const posts = await client.getAllByType("post", {
    fetchOptions: {
      next: {
        revalidate: 60 * 30, // 30 minutes
      },
    },
  });

  return (
    <>
      <FloatActions />

      <div className="flex flex-col gap-32 max-sm:gap-20 space-y-10">
        <SubHeader
          title="Portfólio"
          message=" Aqui você encontra todos os projetos que já desenvolvi em toda minha
          trajetória, desde pessoais, até comerciais."
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
