import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

import { AnimatedBorderEffect } from "@/components/animated-border-effect";
import { Carousel } from "@/components/carousel";
import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { MotionDiv } from "@/components/motion-div";
import { Title } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { formatUrlParam } from "@/utils/url-param";
import { notFound } from "next/navigation";
import { ProjectSection } from "./components/project-section";

type Props = {
  params: {
    uid: string;
  };
};

const DOCUMENT_TYPE = "project";

async function getProjectBySlug(slug: string) {
  try {
    const client = createClient();
    const response = await client.getByUID(DOCUMENT_TYPE, slug);

    return response;
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const client = createClient();
  const projects = await client.getAllByType(DOCUMENT_TYPE);

  return projects.map((project) => ({
    uid: project.uid,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getProjectBySlug(params.uid);

  return {
    title: response.data.title,
    description: response.data.resume,
    openGraph: {
      type: "website",
      title: response.data.title!,
      description: response.data.resume!,
      images: [
        {
          url: response.data.thumbnail.url!,
          width: 1200,
          height: 630,
          alt: response.data.title!,
        },
      ],
      siteName: "lmiguelm",
    },
  };
}

export default async function Page({ params }: Props) {
  const response = await getProjectBySlug(params.uid);

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
    <MotionDiv
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <AnimatedBorderEffect>
        <div className="bg-background rounded">
          <Image alt="" field={thumbnail} className="rounded-t" />

          <div className="flex flex-col items-center p-[5%] space-y-20">
            <header className="flex flex-col items-center justify-center space-y-3">
              <Title className="leading-relaxed font-semibold">{title}</Title>

              <p className="text-center text-muted-foreground max-sm:text-sm">
                {resume}
              </p>

              <div className="flex justify-center items-center text-sm gap-3 text-muted-foreground">
                {!!(application as any).url && (
                  <>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Acessar"
                      href={(application as any).url}
                    />

                    <Separator className="h-3" orientation="vertical" />
                  </>
                )}

                {!!(repository as any).url && (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    href={(repository as any).url}
                  />
                )}
              </div>
            </header>

            <main className="prose prose-system max-sm:prose-sm text-justify">
              <PrismicRichText field={content} />
            </main>

            <footer className="flex flex-col gap-20">
              <ProjectSection
                exists={!!carousel[0]?.image.url}
                title="📸 Imagens"
              >
                <Carousel images={carousel.map((c) => c.image)} />
              </ProjectSection>

              <ProjectSection
                exists={(video as any).url}
                title="📽️ Vídeo demonstrativo"
              >
                <video
                  className="aspect-video"
                  src={(video as any).url}
                  controls
                />
              </ProjectSection>

              <ProjectSection exists={!!tags.length} title="🔗 Tags">
                <div className="flex gap-3 text-muted-foreground">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      title={tag}
                      href={`/tag/${formatUrlParam(tag)}`}
                    />
                  ))}
                </div>
              </ProjectSection>
            </footer>
          </div>
        </div>
      </AnimatedBorderEffect>
    </MotionDiv>
  );
}
