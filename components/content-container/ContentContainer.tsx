import type { ReactElement, ReactNode } from "react";

/**
 * News & Notices와 같은 좌우 여백이다.
 * 768px 미만은 24px, 768–1099px은 40px, 1100px 이상은 24px.
 */
const CONTENT_GUTTER_CLASS = "px-6 min-[768px]:px-10 min-[1100px]:px-6";

/** 가운데 정렬된 본문 최대 너비. 안쪽 1200px 끝이 영역끼리 맞는다. */
const CONTENT_WIDTH_CLASS = "mx-auto w-full max-w-[1200px]";

interface ContentContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function ContentContainer({
  children,
  className,
}: ContentContainerProps): ReactElement {
  const innerClassName = className
    ? `${CONTENT_WIDTH_CLASS} ${className}`
    : CONTENT_WIDTH_CLASS;

  return (
    <div className={CONTENT_GUTTER_CLASS}>
      <div className={innerClassName}>{children}</div>
    </div>
  );
}
