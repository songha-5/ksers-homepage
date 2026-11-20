import Image from "next/image";
import type { ReactElement } from "react";

interface EventRibbonProps {
  readonly title: string;
}

const TITLE_CLASS_NAME =
  "relative px-10 text-center font-(family-name:--font-roboto) text-lg font-bold tracking-wide text-white min-[768px]:text-xl";

export function EventRibbon({ title }: EventRibbonProps): ReactElement {
  return (
    <h2 className="relative mx-auto flex h-16 w-full max-w-[640px] items-center justify-center min-[768px]:h-[4.5rem]">
      <Image
        src="/event-ribbon.svg"
        alt=""
        width={760}
        height={110}
        unoptimized
        className="absolute inset-0 h-full w-full"
      />
      <span className={TITLE_CLASS_NAME}>{title}</span>
    </h2>
  );
}
