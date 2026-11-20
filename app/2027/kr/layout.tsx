import type { ReactElement } from "react";
import { PreparingCover } from "@/components/preparing-cover/PreparingCover";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";

export default function KoreanSectionLayout({
  children,
}: LayoutProps<"/2027/kr">): ReactElement {
  return (
    // 가오픈 준비 중 표시. 대상은 config/preparing-pages.ts 의 연구비 공모다.
    <PreparingCover>
      <SubpageHeader />
      {children}
    </PreparingCover>
  );
}
