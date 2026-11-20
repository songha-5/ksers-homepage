import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import { ItpTextList } from "@/components/itp/ItpTextList";
import {
  ITP_APPLICATION_DEADLINE,
  ITP_DOCUMENT_ITEMS,
  ITP_SECRETARIAT_EMAIL,
  ITP_SUBMIT_STEP,
} from "@/components/itp/itp-content";

const DEADLINE_CLASS_NAME = "font-bold text-[#263238]";

export function ItpSubmitStep(): ReactElement {
  return (
    <>
      {ITP_SUBMIT_STEP} (
      <ExternalTextLink href={`mailto:${ITP_SECRETARIAT_EMAIL}`}>
        {ITP_SECRETARIAT_EMAIL}
      </ExternalTextLink>
      ) by <strong className={DEADLINE_CLASS_NAME}>{ITP_APPLICATION_DEADLINE}</strong>
      <div className="mt-2">
        <ItpTextList items={ITP_DOCUMENT_ITEMS} />
      </div>
    </>
  );
}
