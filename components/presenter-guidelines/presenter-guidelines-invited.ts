import { INVITED_OPENING_SECTIONS } from "@/components/presenter-guidelines/presenter-guidelines-invited-opening";
import { INVITED_SESSION_SECTIONS } from "@/components/presenter-guidelines/presenter-guidelines-invited-session";
import type { PresenterSection } from "@/components/presenter-guidelines/presenter-guidelines-model";

export const INVITED_GUIDELINE_SECTIONS: readonly PresenterSection[] = [
  ...INVITED_OPENING_SECTIONS,
  ...INVITED_SESSION_SECTIONS,
];
