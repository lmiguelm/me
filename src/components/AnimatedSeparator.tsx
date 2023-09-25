import { MotionDiv } from "./motion-div";
import { Separator } from "./ui/separator";

export function AnimatedSeparator() {
  return (
    <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Separator />
    </MotionDiv>
  );
}
