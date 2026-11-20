import type { ReactElement, ReactNode } from "react";

interface SubpageTitleProps {
  readonly children: ReactNode;
}

const TITLE_CLASS_NAME =
  "pb-[30px] text-center font-(family-name:--font-roboto) text-[30px] leading-[1.4] text-[#263238] min-[1100px]:pb-10 min-[1100px]:text-[36px]";

export function SubpageTitle({ children }: SubpageTitleProps): ReactElement {
  return <h1 className={TITLE_CLASS_NAME}>{children}</h1>;
}
