import type { ReactElement } from "react";
import {
  SITE_VISITING_LABEL_CLASS_NAME,
  SITE_VISITING_VALUE_CLASS_NAME,
} from "@/components/site-visiting/site-visiting-table-styles";

interface SiteVisitingContentRowProps {
  readonly content: readonly string[];
}

const SPECIALIZED_FIELDS_LABEL = "Specialized fields:";

export function SiteVisitingContentRow({
  content,
}: SiteVisitingContentRowProps): ReactElement {
  return (
    <tr>
      <th scope="row" className={SITE_VISITING_LABEL_CLASS_NAME}>
        Educational Content
      </th>
      <td className={SITE_VISITING_VALUE_CLASS_NAME} colSpan={3}>
        {content.map((line) => (
          <span key={line} className="block">
            {renderLine(line)}
          </span>
        ))}
      </td>
    </tr>
  );
}

function renderLine(line: string): ReactElement {
  if (!line.startsWith(SPECIALIZED_FIELDS_LABEL)) {
    return <>{line}</>;
  }

  return (
    <>
      <strong className="font-bold text-[#263238]">
        {SPECIALIZED_FIELDS_LABEL}
      </strong>
      {line.slice(SPECIALIZED_FIELDS_LABEL.length)}
    </>
  );
}
