import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import {
  SITE_VISITING_LABEL_CLASS_NAME,
  SITE_VISITING_VALUE_CLASS_NAME,
} from "@/components/site-visiting/site-visiting-table-styles";

interface SiteVisitingHomepageRowProps {
  readonly homepage: string;
}

export function SiteVisitingHomepageRow({
  homepage,
}: SiteVisitingHomepageRowProps): ReactElement {
  return (
    <tr>
      <th scope="row" className={SITE_VISITING_LABEL_CLASS_NAME}>
        Homepage
      </th>
      <td className={SITE_VISITING_VALUE_CLASS_NAME} colSpan={3}>
        <ExternalTextLink href={homepage} className="break-all">
          {homepage}
        </ExternalTextLink>
      </td>
    </tr>
  );
}
