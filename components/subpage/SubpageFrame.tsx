import type { ReactElement, ReactNode } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { SubpageTitle } from "@/components/subpage/SubpageTitle";

interface SubpageFrameProps {
  readonly title: string;
  readonly children: ReactNode;
}

const SECTION_CLASS_NAME =
  "pt-10 pb-16 text-sm leading-[1.6] text-[#595959] min-[1100px]:pt-16";

export function SubpageFrame({
  title,
  children,
}: SubpageFrameProps): ReactElement {
  return (
    <section className={SECTION_CLASS_NAME}>
      <ContentContainer>
        <SubpageTitle>{title}</SubpageTitle>
        {children}
      </ContentContainer>
    </section>
  );
}
