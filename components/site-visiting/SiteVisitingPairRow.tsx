import type { ReactElement } from "react";
import {
  SITE_VISITING_LABEL_CLASS_NAME,
  SITE_VISITING_VALUE_CLASS_NAME,
} from "@/components/site-visiting/site-visiting-table-styles";

interface SiteVisitingPairRowProps {
  readonly leftLabel: string;
  readonly leftValue: string;
  readonly rightLabel: string;
  readonly rightValue: string;
}

export function SiteVisitingPairRow({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
}: SiteVisitingPairRowProps): ReactElement {
  return (
    <tr>
      <th scope="row" className={SITE_VISITING_LABEL_CLASS_NAME}>
        {leftLabel}
      </th>
      <td className={SITE_VISITING_VALUE_CLASS_NAME}>{leftValue}</td>
      <th scope="row" className={SITE_VISITING_LABEL_CLASS_NAME}>
        {rightLabel}
      </th>
      <td className={SITE_VISITING_VALUE_CLASS_NAME}>{rightValue}</td>
    </tr>
  );
}
