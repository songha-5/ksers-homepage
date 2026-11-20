import type { ReactElement } from "react";
import { SubpageSecondaryLink } from "@/components/subpage/SubpageSecondaryLink";
import { ItpClosedNote } from "@/components/itp/ItpClosedNote";
import { ItpSubmitStep } from "@/components/itp/ItpSubmitStep";
import {
  ITP_DOWNLOAD_STEP,
  ITP_FORM_HREF,
  ITP_FORM_LABEL,
} from "@/components/itp/itp-content";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function ItpApplicationProcess(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Application Process" />
      <p className="-mt-2 mb-4">
        <ItpClosedNote />
      </p>
      <ol className="flex list-decimal flex-col gap-4 pl-5">
        <li>
          {ITP_DOWNLOAD_STEP}{" "}
          <SubpageSecondaryLink kind="blank" href={ITP_FORM_HREF}>
            {ITP_FORM_LABEL}
          </SubpageSecondaryLink>
        </li>
        <li>
          <ItpSubmitStep />
        </li>
      </ol>
    </div>
  );
}
