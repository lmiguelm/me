import { LinearBackground } from "./linear-background";
import { Link } from "./link";
import { MotionDiv } from "./motion-div";
import { Title } from "./title";
import { Separator } from "./ui/separator";

type Props = {
  title?: string;
  message?: string;
  links?: { url: string; title: string }[];
};

export function SubHeader(props: Props) {
  return (
    <MotionDiv
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      className="w-full"
    >
      <LinearBackground
        variant="highlight"
        className="rounded flex flex-col items-center space-y-3 p-3 backdrop-blur-3xl"
      >
        <Title>{props.title}</Title>

        <p className="leading-relaxed text-sm text-center">{props.message}</p>

        <div>
          {!!props.links &&
            props.links.map((link, index) => (
              <div className="flex items-center gap-3" key={link.url}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  key={link.url}
                  title={link.title}
                />

                {index !== props.links?.length! - 1 && (
                  <Separator orientation="vertical" className="h-3" />
                )}
              </div>
            ))}
        </div>
      </LinearBackground>
    </MotionDiv>
  );
}
