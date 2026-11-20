import type { ReactElement } from "react";
import { EndoscopyHandsOnCourse } from "@/components/endoscopy-hands-on/EndoscopyHandsOnCourse";
import { EndoscopyHandsOnIntro } from "@/components/endoscopy-hands-on/EndoscopyHandsOnIntro";
import {
  ENDOSCOPY_HANDS_ON_COURSES,
  ENDOSCOPY_HANDS_ON_HEADING,
} from "@/components/endoscopy-hands-on/endoscopy-hands-on-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function EndoscopyHandsOnDetails(): ReactElement {
  return (
    <SubpageFrame title={ENDOSCOPY_HANDS_ON_HEADING}>
      <EndoscopyHandsOnIntro />
      {ENDOSCOPY_HANDS_ON_COURSES.map((course) => (
        <EndoscopyHandsOnCourse key={course.id} course={course} />
      ))}
    </SubpageFrame>
  );
}
