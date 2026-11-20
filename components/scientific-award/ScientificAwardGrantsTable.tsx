import type { ReactElement } from "react";
import {
  AWARD_GRADE_HEADERS,
  AWARD_PLENARY_PRIZES,
  AWARD_SINGLE_PRIZES,
} from "@/components/scientific-award/scientific-award-content";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

const PRIZE_ROW_COUNT = AWARD_PLENARY_PRIZES.length;

function AwardHeader(): ReactElement {
  return (
    <thead>
      <tr>
        {AWARD_GRADE_HEADERS.map((header) => (
          <th key={header} scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function SinglePrizeCells(): ReactElement {
  return (
    <>
      {AWARD_SINGLE_PRIZES.map((prize) => (
        <td key={prize.id} rowSpan={PRIZE_ROW_COUNT} className={SIMPLE_TABLE_CELL_CLASS}>
          {prize.amount}
        </td>
      ))}
    </>
  );
}

function PrizeLabel(): ReactElement {
  return (
    <th scope="row" rowSpan={PRIZE_ROW_COUNT} className={SIMPLE_TABLE_HEADER_CLASS}>
      Prize
    </th>
  );
}

function PlenaryRows(): ReactElement {
  return (
    <>
      {AWARD_PLENARY_PRIZES.map((prize, index) => (
        <tr key={prize.id}>
          {index === 0 ? <PrizeLabel /> : null}
          <td className={SIMPLE_TABLE_CELL_CLASS}>{prize.text}</td>
          {index === 0 ? <SinglePrizeCells /> : null}
        </tr>
      ))}
    </>
  );
}

export function ScientificAwardGrantsTable(): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[960px] border-collapse text-sm">
        <AwardHeader />
        <tbody>
          <PlenaryRows />
        </tbody>
      </table>
    </div>
  );
}
