import type { ReactElement } from "react";
import { ScientificProgramBoard } from "@/components/scientific-program/ScientificProgramBoard";
import type { ScientificProgramPage } from "@/components/scientific-program/scientific-program-model";
import { SubpageTitle } from "@/components/subpage/SubpageTitle";

interface ScientificProgramDetailsProps {
  readonly page: ScientificProgramPage;
}

const SECTION_CLASS_NAME =
  "mx-auto w-full max-w-[1200px] px-[30px] pt-10 pb-16 text-sm leading-[1.6] text-[#595959] min-[1100px]:px-10 min-[1100px]:pt-16";

export function ScientificProgramDetails({
  page,
}: ScientificProgramDetailsProps): ReactElement {
  return (
    <section className={SECTION_CLASS_NAME}>
      <SubpageTitle>{page.heading}</SubpageTitle>
      <ScientificProgramBoard categories={page.categories} />
    </section>
  );
}
