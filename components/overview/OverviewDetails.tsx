import type { ReactElement } from "react";
import { OverviewRow } from "@/components/overview/OverviewRow";
import { OVERVIEW_PAGE } from "@/components/overview/overview-content";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function OverviewDetails(): ReactElement {
  return (
    <SubpageFrame title={OVERVIEW_PAGE.heading}>
      {/* 원본은 768px 미만만 세로로 쌓는다. 태블릿부터는 라벨 열을 유지한다. */}
      <table className="w-full border-collapse [&_tr:first-child>th]:border-t min-[768px]:table-fixed">
        <tbody>
          {OVERVIEW_PAGE.rows.map((row) => (
            <OverviewRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </SubpageFrame>
  );
}
