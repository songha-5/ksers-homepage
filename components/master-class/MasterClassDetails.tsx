import type { ReactElement } from "react";
import { MasterClassCourse } from "@/components/master-class/MasterClassCourse";
import { MasterClassIntro } from "@/components/master-class/MasterClassIntro";
import { MasterClassPrograms } from "@/components/master-class/MasterClassPrograms";
import { MASTER_CLASS_COURSES } from "@/components/master-class/master-class-courses";
import { MASTER_CLASS_HEADING } from "@/components/master-class/master-class-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function MasterClassDetails(): ReactElement {
  return (
    <SubpageFrame title={MASTER_CLASS_HEADING}>
      <MasterClassIntro />
      <MasterClassPrograms />
      {MASTER_CLASS_COURSES.map((course) => (
        <MasterClassCourse key={course.id} course={course} />
      ))}
    </SubpageFrame>
  );
}
