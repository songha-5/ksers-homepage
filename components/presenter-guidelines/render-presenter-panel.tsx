import type { ReactElement } from "react";
import { PresenterGuidelinesPanel } from "@/components/presenter-guidelines/PresenterGuidelinesPanel";
import type { PresenterGuidelineTabId } from "@/components/presenter-guidelines/presenter-guidelines-content";
import { EPOSTER_GUIDELINE_SECTIONS } from "@/components/presenter-guidelines/presenter-guidelines-eposter";
import { INVITED_GUIDELINE_SECTIONS } from "@/components/presenter-guidelines/presenter-guidelines-invited";
import type { PresenterSection } from "@/components/presenter-guidelines/presenter-guidelines-model";
import { POSTER_GUIDELINE_SECTIONS } from "@/components/presenter-guidelines/presenter-guidelines-poster";
import { VIDEO_GUIDELINE_SECTIONS } from "@/components/presenter-guidelines/presenter-guidelines-video";

const PRESENTER_SECTIONS: Record<
  PresenterGuidelineTabId,
  readonly PresenterSection[]
> = {
  invited: INVITED_GUIDELINE_SECTIONS,
  video: VIDEO_GUIDELINE_SECTIONS,
  poster: POSTER_GUIDELINE_SECTIONS,
  eposter: EPOSTER_GUIDELINE_SECTIONS,
};

export function renderPresenterPanel(
  tabId: PresenterGuidelineTabId,
): ReactElement {
  return <PresenterGuidelinesPanel sections={PRESENTER_SECTIONS[tabId]} />;
}
