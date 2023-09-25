import { ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import NextLink from "next/link";

// import { formatUrlParam } from "@/utils/url-param";
import { formatUrlParam } from "@/utils/url-param";
import { AnimatedBorderEffect } from "./animated-border-effect";
import { Link } from "./link";
import { MotionDiv } from "./motion-div";
import { Subtitle } from "./subtitle";

type Data = {
  url: string;
  title: KeyTextField;
  resume: KeyTextField;
  thumbnail: ImageField;
  tags: string[];
};

type Props = {
  reverse?: boolean;
  data: Data;
};

export function ProjectCardDetail({ reverse = false, data }: Props) {
  return (
    <MotionDiv
      initial={{ x: reverse ? -50 : 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <div
        data-reverse={reverse}
        className="relative flex data-[reverse=true]:flex-row-reverse max-lg:data-[reverse=true]:flex-col-reverse items-center max-lg:flex-col-reverse"
      >
        <div
          data-reverse={reverse}
          className="space-y-6 z-10 w-3/5 max-lg:w-full flex flex-col data-[reverse=true]:items-end max-lg:pt-6"
        >
          <NextLink
            href={data.url}
            data-reverse={reverse}
            className="flex w-full flex-col data-[reverse=true]:items-end hover:text-muted-foreground transition-all space-y-2"
          >
            <Subtitle>{data.title}</Subtitle>

            <div className="bg-highlight/50 backdrop-blur-md p-3 rounded border w-full">
              <p className="leading-relaxed text-sm text-justify">
                {data.resume}
              </p>
            </div>
          </NextLink>

          <div className="flex gap-3">
            {data.tags.map((tag) => (
              <Link
                key={tag}
                href={`/projects/tag/${formatUrlParam(tag)}`}
                title={tag}
              />
            ))}
          </div>
        </div>

        <div
          data-reverse={reverse}
          className="absolute max-lg:relative data-[reverse=false]:right-0 data-[reverse=true]:left-0 rounded pt-10 pl-10 pb-3 max-lg:p-0 max-lg:inset-0 bg-highlight/10 backdrop-blur-md"
        >
          <AnimatedBorderEffect>
            <div className="overflow-hidden">
              <PrismicNextImage
                field={data.thumbnail}
                height={500}
                width={500}
                className="h-[250px] w-[400px] rounded rounded-r-none transition-transform hover:scale-110"
              />
            </div>
          </AnimatedBorderEffect>
        </div>
      </div>
    </MotionDiv>
  );
}
