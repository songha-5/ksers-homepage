import type { ReactElement } from "react";
import { ItpRecordTable } from "@/components/itp/ItpRecordTable";
import { ITP_KEY_DATE_ROWS } from "@/components/itp/itp-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function ItpKeyDates(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Key Dates" />
      <ItpRecordTable
        rows={ITP_KEY_DATE_ROWS.map((row) => ({
          id: row.id,
          label: row.label,
          align: "center",
          children: row.value,
        }))}
      />
    </div>
  );
}
