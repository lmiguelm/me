import { LinearBackground } from "./linear-background";
import { MotionDiv } from "./motion-div";
import { Title } from "./title";

type Props = {
  title?: string;
  message?: string;
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
      </LinearBackground>
    </MotionDiv>
  );
}
