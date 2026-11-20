import type { ReactElement } from "react";
import { ItpClosedNote } from "@/components/itp/ItpClosedNote";
import { ItpRecordTable, type ItpTableRow } from "@/components/itp/ItpRecordTable";
import { ItpTextList } from "@/components/itp/ItpTextList";
import {
  ITP_APPLICATION_DEADLINE,
  ITP_ELIGIBILITY_ITEMS,
  ITP_ELIGIBILITY_LABEL,
  ITP_FACTS,
  ITP_OBLIGATION_ITEMS,
  ITP_OBLIGATION_LABEL,
} from "@/components/itp/itp-content";

export function ItpOverview(): ReactElement {
  return <ItpRecordTable rows={overviewRows()} />;
}

function overviewRows(): readonly ItpTableRow[] {
  return [
    ...ITP_FACTS.map((fact) => ({
      id: fact.id,
      label: fact.label,
      align: "center" as const,
      children: fact.value,
    })),
    {
      id: "deadline",
      label: "Application Deadline",
      align: "center",
      children: (
        <>
          {ITP_APPLICATION_DEADLINE} <ItpClosedNote />
        </>
      ),
    },
    {
      id: "eligibility",
      label: ITP_ELIGIBILITY_LABEL,
      align: "left",
      children: <ItpTextList items={ITP_ELIGIBILITY_ITEMS} />,
    },
    {
      id: "obligations",
      label: ITP_OBLIGATION_LABEL,
      align: "left",
      children: <ItpTextList items={ITP_OBLIGATION_ITEMS} />,
    },
  ];
}
