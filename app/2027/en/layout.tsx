import type { ReactElement } from "react";
import { PreparingCover } from "@/components/preparing-cover/PreparingCover";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";

export default function EnglishSectionLayout({
  children,
}: LayoutProps<"/2027/en">): ReactElement {
  return (
    // 가오픈 준비 중 표시. 대상은 config/preparing-pages.ts 이고, 페이지 본문은 그대로다.
    <PreparingCover>
      <SubpageHeader />
      {children}
    </PreparingCover>
  );
}
