import type { ReactElement } from "react";
import { ScientificAwardGrantsTable } from "@/components/scientific-award/ScientificAwardGrantsTable";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function ScientificAwardGrants(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Grants" />
      <ScientificAwardGrantsTable />
    </div>
  );
}
