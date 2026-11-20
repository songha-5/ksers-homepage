import type { ReactElement } from "react";
import { ScientificAwardGrants } from "@/components/scientific-award/ScientificAwardGrants";
import { ScientificAwardNotes } from "@/components/scientific-award/ScientificAwardNotes";
import {
  SCIENTIFIC_AWARD_HEADING,
  SCIENTIFIC_AWARD_LEAD,
} from "@/components/scientific-award/scientific-award-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function ScientificAwardDetails(): ReactElement {
  return (
    <SubpageFrame title={SCIENTIFIC_AWARD_HEADING}>
      <p>{SCIENTIFIC_AWARD_LEAD}</p>
      <ScientificAwardGrants />
      <ScientificAwardNotes />
    </SubpageFrame>
  );
}
