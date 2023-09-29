import { ImageField, KeyTextField } from "@prismicio/client";
import NextLink from "next/link";

// import { formatUrlParam } from "@/utils/url-param";
import { formatDateToNow } from "@/utils/format-date-to-now";
import { getReadingTime } from "@/utils/get-reading-time";
import { formatUrlParam } from "@/utils/url-param";
import { AnimatedBorderEffect } from "./animated-border-effect";
import { Image } from "./image";
import { Link } from "./link";
import { MotionDiv } from "./motion-div";
import { Title } from "./title";
import { Separator } from "./ui/separator";

type Data = {
  url: string;
  title: KeyTextField;
  resume: KeyTextField;
  thumbnail: ImageField;
  tags: string[];
  publication_date: Date;
  content: string;
};

type Props = {
  reverse?: boolean;
  data: Data;
};

export function ProjectCardDetail({ reverse = false, data }: Props) {
  return (
    <MotionDiv
      initial={{ x: reverse ? -25 : 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween" }}
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
            <div
              data-reverse={reverse}
              className="text-sm text-muted-foreground flex data-[reverse=true]:flex-row-reverse gap-3 items-center"
            >
              <span>{formatDateToNow(data.publication_date)}</span>

              <Separator orientation="vertical" className="h-3" />

              <span>{getReadingTime(data.content)}</span>
            </div>

            <Title>{data.title}</Title>

            <div className="bg-highlight/50 backdrop-blur-md p-3 rounded border w-full">
              <p className="leading-relaxed text-sm text-justify">
                {data.resume}
              </p>
            </div>
          </NextLink>

          <div className="flex items-center gap-3">
            {data.tags.map((tag, index) => (
              <>
                {index !== 0 && (
                  <Separator orientation="vertical" className="h-3" />
                )}

                <Link
                  key={tag}
                  href={`/tag/${formatUrlParam(tag)}`}
                  title={tag}
                />
              </>
            ))}
          </div>
        </div>

        <div
          data-reverse={reverse}
          className="absolute max-lg:relative data-[reverse=false]:right-0 data-[reverse=true]:left-0 rounded pt-10 pl-10 pb-3 max-lg:p-0 max-lg:inset-0 bg-highlight/10 backdrop-blur-md"
        >
          <AnimatedBorderEffect>
            <div className="overflow-hidden">
              <Image
                alt=""
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
