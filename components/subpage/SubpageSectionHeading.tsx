import type { ReactElement } from "react";

interface SubpageSectionHeadingProps {
  readonly title: string;
}

const HEADING_CLASS_NAME =
  "mt-10 mb-4 font-(family-name:--font-roboto) text-xl leading-[1.4] font-bold text-[#263238] min-[1100px]:text-2xl";

export function SubpageSectionHeading({
  title,
}: SubpageSectionHeadingProps): ReactElement {
  return <h2 className={HEADING_CLASS_NAME}>{title}</h2>;
}
