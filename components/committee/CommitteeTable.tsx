import type { ReactElement } from "react";
import { CommitteeMemberRow } from "@/components/committee/CommitteeMemberRow";
import type {
  CommitteeLayout,
  CommitteeTab,
} from "@/components/committee/committee-model";
import { buildCommitteeRows } from "@/components/committee/committee-rows";

interface CommitteeTableProps {
  readonly tab: CommitteeTab;
}

function renderColumns(layout: CommitteeLayout): ReactElement {
  switch (layout) {
    case "simple":
      return (
        <colgroup>
          <col className="w-[40%]" />
          <col className="w-[20%]" />
          <col className="w-[40%]" />
        </colgroup>
      );
    case "grouped":
      return (
        <colgroup>
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-[40%]" />
        </colgroup>
      );
    default: {
      const unreachable: never = layout;
      return unreachable;
    }
  }
}

export function CommitteeTable({ tab }: CommitteeTableProps): ReactElement {
  const rows = buildCommitteeRows(tab);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] border-collapse border border-[#e4e4e4] text-sm">
        {renderColumns(tab.layout)}
        <tbody>
          {rows.map((row) => (
            <CommitteeMemberRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
