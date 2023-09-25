import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { AnimatedBorderEffect } from "@/components/animated-border-effect";
import { FloatActions } from "@/components/float-actions";
import { Link } from "@/components/link";
import { MotionDiv } from "@/components/motion-div";
import { formatUrlParam } from "@/utils/url-param";

type Props = {
  params: {
    uid: string;
  };
};

export default async function Page({ params }: Props) {
  const client = createClient();

  const response = await client.getByUID("post", params.uid, {
    fetchOptions: { next: { revalidate: 60 * 60 * 24 } }, // 1 day
  });

  const { tags, data } = response;

  const {
    application,
    carousel,
    content,
    repository,
    resume,
    thumbnail,
    title,
    video,
  } = data;

  return (
    <>
      <FloatActions />

      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <AnimatedBorderEffect>
          <div className="bg-background rounded">
            <PrismicNextImage field={thumbnail} className="rounded-t" />

            <div className="flex flex-col items-center p-[5%] space-y-20">
              <header className="flex flex-col items-center justify-center space-y-3">
                <h1 className="text-2xl leading-relaxed font-semibold">
                  {title}
                </h1>

                <p className="text-center text-muted-foreground max-sm:text-sm">
                  {resume}
                </p>

                <div className="flex justify-center items-center text-sm gap-3 text-muted-foreground">
                  {!!(application as any).url && (
                    <>
                      <PrismicNextLink
                        className="underline"
                        field={application}
                      >
                        Acessar
                      </PrismicNextLink>

                      <span>•</span>
                    </>
                  )}

                  <PrismicNextLink className="underline" field={repository}>
                    GitHub
                  </PrismicNextLink>
                </div>
              </header>

              <main className="prose prose-system max-sm:prose-sm text-justify prose-headings:">
                <PrismicRichText field={content} />
              </main>

              <footer className="flex flex-col gap-20">
                {!!carousel.length && (
                  <div className="flex flex-col space-y-3">
                    <p>📸 Imagens</p>

                    <div className="flex gap-3 overflow-x-auto pb-3">
                      {carousel.map(({ image }) => (
                        <PrismicNextImage
                          key={image.url}
                          field={image}
                          height={300}
                          width={300}
                          className="rounded aspect-square"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {(video as any).url && (
                  <div className="flex flex-col space-y-3">
                    <p>📽️ Vídeo de demonstração</p>

                    <video src={(video as any).url} controls />
                  </div>
                )}

                {!!tags.length && (
                  <div className="flex flex-col gap-3">
                    <p>🔗 Tags </p>

                    <div className="flex gap-3 text-muted-foreground">
                      {tags.map((tag) => (
                        <Link
                          key={tag}
                          title={tag}
                          href={`/projects/tag/${formatUrlParam(tag)}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </footer>
            </div>
          </div>
        </AnimatedBorderEffect>
      </MotionDiv>
    </>
  );
}
