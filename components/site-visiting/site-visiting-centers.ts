import { SITE_VISITING_CENTERS_EARLY } from "@/components/site-visiting/site-visiting-centers-early";
import { SITE_VISITING_CENTERS_LATE } from "@/components/site-visiting/site-visiting-centers-late";
import { EWHA_ENDOCRINE_CENTER } from "@/components/site-visiting/site-visiting-ewha-endocrine";
import type { SiteVisitingCenter } from "@/components/site-visiting/site-visiting-model";

export const SITE_VISITING_CENTERS: readonly SiteVisitingCenter[] = [
  ...SITE_VISITING_CENTERS_EARLY.slice(0, 3),
  EWHA_ENDOCRINE_CENTER,
  ...SITE_VISITING_CENTERS_EARLY.slice(3),
  ...SITE_VISITING_CENTERS_LATE,
];
