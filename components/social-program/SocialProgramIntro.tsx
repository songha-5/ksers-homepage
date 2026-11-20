import type { ReactElement } from "react";
import {
  SOCIAL_PROGRAM_LEAD,
  SOCIAL_PROGRAM_SUMMARY,
} from "@/components/social-program/social-program-content";

export function SocialProgramIntro(): ReactElement {
  return (
    <div className="mb-12 text-center">
      <p className="text-base font-bold text-[#263238]">{SOCIAL_PROGRAM_LEAD}</p>
      <p className="mt-2">{SOCIAL_PROGRAM_SUMMARY}</p>
    </div>
  );
}
