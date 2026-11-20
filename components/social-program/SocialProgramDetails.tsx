import type { ReactElement } from "react";
import { SocialProgramIntro } from "@/components/social-program/SocialProgramIntro";
import { SocialProgramSchedule } from "@/components/social-program/SocialProgramSchedule";
import { SOCIAL_PROGRAM_HEADING } from "@/components/social-program/social-program-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function SocialProgramDetails(): ReactElement {
  return (
    <SubpageFrame title={SOCIAL_PROGRAM_HEADING}>
      <SocialProgramIntro />
      <SocialProgramSchedule />
    </SubpageFrame>
  );
}
