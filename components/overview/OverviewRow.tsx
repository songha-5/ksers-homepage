import type { ReactElement } from "react";
import { OverviewValue } from "@/components/overview/OverviewValue";
import type { OverviewRowContent } from "@/components/overview/overview-content";

interface OverviewRowProps {
  readonly row: OverviewRowContent;
}

const LABEL_CLASS_NAME =
  "block border-b border-[#e4e4e4] py-[5px] text-left align-middle font-bold text-[#263238] min-[768px]:table-cell min-[768px]:w-1/5 min-[768px]:py-5";

const VALUE_CLASS_NAME =
  "block border-b border-[#e4e4e4] py-[5px] text-left align-middle min-[768px]:table-cell min-[768px]:border-b-0 min-[768px]:py-5 min-[768px]:pl-5";

export function OverviewRow({ row }: OverviewRowProps): ReactElement {
  return (
    <tr>
      <th scope="row" className={LABEL_CLASS_NAME}>
        {row.label}
      </th>
      <td className={VALUE_CLASS_NAME}>
        <OverviewValue lines={row.lines} />
      </td>
    </tr>
  );
}
