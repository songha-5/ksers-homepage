import type { ReactElement } from "react";
import { PastCongressLinks } from "@/components/past-congress/PastCongressLinks";
import type { PastCongressEntry } from "@/components/past-congress/past-congress-model";
import { SUBPAGE_TABLE_CELL_CLASS_NAME } from "@/components/subpage/subpage-table-styles";

interface PastCongressRowProps {
  readonly entry: PastCongressEntry;
}

export function PastCongressRow({ entry }: PastCongressRowProps): ReactElement {
  return (
    <tr>
      <th scope="row" className={`${SUBPAGE_TABLE_CELL_CLASS_NAME} font-normal`}>
        <span className="block font-bold text-[#263238]">{entry.name}</span>
        <span className="mt-1 block">{entry.description}</span>
      </th>
      <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>{entry.date}</td>
      <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>{entry.venue}</td>
      <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>{entry.theme}</td>
      <td className={SUBPAGE_TABLE_CELL_CLASS_NAME}>
        <PastCongressLinks congressName={entry.name} links={entry.links} />
      </td>
    </tr>
  );
}
