import type { ReactElement } from "react";

interface SocialProgramTimelineLinesProps {
  readonly showLineAbove: boolean;
  readonly showLineBelow: boolean;
}

const ABOVE_CLASS_NAME =
  "absolute left-[5px] -top-8 hidden h-[calc(2rem+13px)] w-px -translate-x-1/2 bg-[#d5dee8] min-[1100px]:block";

const BELOW_CLASS_NAME =
  "absolute left-[5px] top-[23px] -bottom-8 hidden w-px -translate-x-1/2 bg-[#d5dee8] min-[1100px]:block";

export function SocialProgramTimelineLines({
  showLineAbove,
  showLineBelow,
}: SocialProgramTimelineLinesProps): ReactElement {
  return (
    <>
      {showLineAbove ? <span className={ABOVE_CLASS_NAME} /> : null}
      {showLineBelow ? <span className={BELOW_CLASS_NAME} /> : null}
    </>
  );
}
