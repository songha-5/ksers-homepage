import type { CommitteeTab } from "@/components/committee/committee-model";
import { ORGANIZING_BLOCKS } from "@/components/committee/organizing-committee";
import { SCIENTIFIC_BLOCKS } from "@/components/committee/scientific-committee";

export const COMMITTEE_HEADING = "Committee";

export const COMMITTEE_TABS = [
  {
    id: "organizing",
    label: "Organizing Committee",
    layout: "simple",
    blocks: ORGANIZING_BLOCKS,
  },
  {
    id: "scientific",
    label: "Scientific Committee",
    layout: "grouped",
    blocks: SCIENTIFIC_BLOCKS,
  },
] as const satisfies readonly CommitteeTab[];
