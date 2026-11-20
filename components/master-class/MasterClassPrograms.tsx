import type { ReactElement } from "react";
import { MasterClassApplyButton } from "@/components/master-class/MasterClassApplyButton";
import { MasterClassProgramTable } from "@/components/master-class/MasterClassProgramTable";
import { MASTER_CLASS_PROGRAMS_TITLE } from "@/components/master-class/master-class-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function MasterClassPrograms(): ReactElement {
  return (
    <section>
      <SubpageSectionHeading title={MASTER_CLASS_PROGRAMS_TITLE} />
      <MasterClassProgramTable />
      <div className="mt-6 flex justify-center">
        <MasterClassApplyButton />
      </div>
    </section>
  );
}
