import type { ReactElement } from "react";
import { EndoscopyHandsOnRegistration } from "@/components/endoscopy-hands-on/EndoscopyHandsOnRegistration";
import {
  KESEN_LEAD,
  KESEN_TITLE,
} from "@/components/endoscopy-hands-on/endoscopy-hands-on-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function EndoscopyHandsOnIntro(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title={KESEN_TITLE} />
      <p>{KESEN_LEAD}</p>
      <EndoscopyHandsOnRegistration />
    </div>
  );
}
