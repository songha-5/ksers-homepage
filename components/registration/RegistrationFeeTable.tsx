import { Fragment, type ReactElement } from "react";
import {
  FEE_PERIODS,
  FREE_FEE_ROWS,
  OVERSEAS_PHYSICIAN_FEES,
  PHYSICIAN_CATEGORY,
  PHYSICIAN_FEES,
  TRAINEE_FEES,
  TRAINEE_LABEL,
} from "@/components/registration/registration-content";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";

const HEADER_CLASS_NAME = SIMPLE_TABLE_HEADER_CLASS;
const CELL_CLASS_NAME = SIMPLE_TABLE_CELL_CLASS;

function FeeHeader(): ReactElement {
  return (
    <thead>
      <tr>
        <th colSpan={2} rowSpan={2} scope="col" className={HEADER_CLASS_NAME}>
          Category
        </th>
        {FEE_PERIODS.map((period) => (
          <th
            key={period.id}
            colSpan={2}
            scope="col"
            className={HEADER_CLASS_NAME}
          >
            {period.label}
          </th>
        ))}
      </tr>
      <tr>
        {FEE_PERIODS.map((period) => (
          <Fragment key={period.id}>
            <th scope="col" className={HEADER_CLASS_NAME}>
              Domestic
            </th>
            <th scope="col" className={HEADER_CLASS_NAME}>
              Overseas
            </th>
          </Fragment>
        ))}
      </tr>
    </thead>
  );
}

function PhysicianRows(): ReactElement {
  return (
    <>
      {PHYSICIAN_FEES.map((row, index) => (
        <tr key={row.id}>
          {index === 0 ? (
            <th
              rowSpan={PHYSICIAN_FEES.length}
              scope="row"
              className={HEADER_CLASS_NAME}
            >
              {PHYSICIAN_CATEGORY}
            </th>
          ) : null}
          <th scope="row" className={HEADER_CLASS_NAME}>
            {row.label}
          </th>
          {row.domestic.map((amount, amountIndex) => (
            <Fragment key={`${row.id}-${FEE_PERIODS[amountIndex]?.id}`}>
              <td className={CELL_CLASS_NAME}>{amount}</td>
              {index === 0 ? (
                <td rowSpan={PHYSICIAN_FEES.length} className={CELL_CLASS_NAME}>
                  {OVERSEAS_PHYSICIAN_FEES[amountIndex]}
                </td>
              ) : null}
            </Fragment>
          ))}
        </tr>
      ))}
    </>
  );
}

function TraineeRow(): ReactElement {
  return (
    <tr>
      <th
        colSpan={2}
        scope="row"
        className={`${HEADER_CLASS_NAME} whitespace-pre-line`}
      >
        {TRAINEE_LABEL}
      </th>
      {TRAINEE_FEES.map((amount, index) => (
        <td key={`${amount}-${index}`} className={CELL_CLASS_NAME}>
          {amount}
        </td>
      ))}
    </tr>
  );
}

function FreeRows(): ReactElement {
  return (
    <>
      {FREE_FEE_ROWS.map((row) => (
        <tr key={row.id}>
          <th colSpan={2} scope="row" className={HEADER_CLASS_NAME}>
            {row.label}
          </th>
          <td
            colSpan={6}
            className={`${CELL_CLASS_NAME} whitespace-pre-line`}
          >
            {row.note}
          </td>
        </tr>
      ))}
    </>
  );
}

export function RegistrationFeeTable(): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[960px] border-collapse text-sm">
        <FeeHeader />
        <tbody>
          <PhysicianRows />
          <TraineeRow />
          <FreeRows />
        </tbody>
      </table>
    </div>
  );
}
