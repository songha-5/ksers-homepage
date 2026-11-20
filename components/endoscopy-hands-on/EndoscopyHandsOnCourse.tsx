import type { ReactElement } from "react";
import { EndoscopyHandsOnFacts } from "@/components/endoscopy-hands-on/EndoscopyHandsOnFacts";
import { EndoscopyHandsOnProgram } from "@/components/endoscopy-hands-on/EndoscopyHandsOnProgram";
import type { HandsOnCourse } from "@/components/endoscopy-hands-on/endoscopy-hands-on-content";
import { SimpleTable } from "@/components/simple-table/SimpleTable";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

interface EndoscopyHandsOnCourseProps {
  readonly course: HandsOnCourse;
}

export function EndoscopyHandsOnCourse({
  course,
}: EndoscopyHandsOnCourseProps): ReactElement {
  return (
    <section>
      <SubpageSectionHeading title={course.title} />
      <EndoscopyHandsOnFacts facts={course.facts} />
      <EndoscopyHandsOnProgram
        label={course.programLabel}
        items={course.program}
      />
      <div className="mt-4">
        <SimpleTable
          columns={course.table.columns}
          rows={course.table.rows}
        />
      </div>
    </section>
  );
}
