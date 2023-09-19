import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { AnimatedBorderEffect } from "./animated-border-effect";
import { Subtitle } from "./subtitle";

type Props = ImageProps & {
  reverse?: boolean;
};

export function ProjectCardDetail({ reverse = false, ...props }: Props) {
  return (
    <div
      data-reverse={reverse}
      className="relative flex data-[reverse=true]:flex-row-reverse max-lg:data-[reverse=true]:flex-col-reverse items-center max-lg:flex-col-reverse"
    >
      <div
        data-reverse={reverse}
        className="space-y-6 z-10 w-3/5 max-lg:w-full flex flex-col data-[reverse=true]:items-end max-lg:pt-6"
      >
        <Link
          href="#"
          className="underline hover:text-muted-foreground transition-all "
        >
          <Subtitle>Example Project</Subtitle>
        </Link>

        <div className="bg-highlight/50 backdrop-blur-md p-3 rounded border">
          <p className="leading-relaxed text-sm text-justify">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        <p className="text-sm text-muted-foreground italic">#react #next</p>
      </div>

      <div
        data-reverse={reverse}
        className="absolute max-lg:relative data-[reverse=false]:right-0 data-[reverse=true]:left-0 rounded pt-10 pl-10 pb-3 max-lg:p-0 max-lg:inset-0 bg-highlight/10 backdrop-blur-md"
      >
        <AnimatedBorderEffect>
          <div className="overflow-hidden">
            <Link href="#">
              <Image
                height={500}
                width={500}
                className="h-[250px] w-[400px] rounded rounded-r-none transition-transform hover:scale-110"
                {...props}
              />
            </Link>
          </div>
        </AnimatedBorderEffect>
      </div>
    </div>
  );
}
