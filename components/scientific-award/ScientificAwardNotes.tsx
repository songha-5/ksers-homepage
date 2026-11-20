import type { ReactElement } from "react";
import {
  AWARD_ELIGIBILITY,
  AWARD_NOTIFICATIONS,
} from "@/components/scientific-award/scientific-award-content";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

function toBulletItems(
  items: readonly { readonly id: string; readonly text: string }[],
): readonly { readonly id: string; readonly children: string }[] {
  return items.map((item) => ({ id: item.id, children: item.text }));
}

export function ScientificAwardNotes(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Eligibility" />
      <SubpageBulletList items={toBulletItems(AWARD_ELIGIBILITY)} />
      <SubpageSectionHeading title="Notification" />
      <SubpageBulletList items={toBulletItems(AWARD_NOTIFICATIONS)} />
    </div>
  );
}
