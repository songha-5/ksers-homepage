import type { ReactElement } from "react";
import { MasterClassFacts } from "@/components/master-class/MasterClassFacts";
import { MasterClassScheduleView } from "@/components/master-class/MasterClassScheduleView";
import type { MasterClassCourse as MasterClassCourseData } from "@/components/master-class/master-class-model";

interface MasterClassCourseProps {
  readonly course: MasterClassCourseData;
}

const TITLE_CLASS_NAME =
  "mt-20 mb-4 scroll-mt-24 font-(family-name:--font-roboto) text-xl leading-[1.4] font-bold text-primary min-[768px]:mt-34 min-[1100px]:scroll-mt-36 min-[1100px]:text-2xl";

export function MasterClassCourse({
  course,
}: MasterClassCourseProps): ReactElement {
  return (
    <section>
      <h2 id={course.id} className={TITLE_CLASS_NAME}>
        {course.title}
      </h2>
      <MasterClassFacts facts={course.facts} align={course.factsAlign} />
      {course.schedules.map((schedule) => (
        <MasterClassScheduleView key={schedule.id} schedule={schedule} />
      ))}
    </section>
  );
}
