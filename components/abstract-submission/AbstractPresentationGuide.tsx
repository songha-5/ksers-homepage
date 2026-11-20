import type { ReactElement } from "react";
import { SimpleTable } from "@/components/simple-table/SimpleTable";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import { AbstractVideoTable } from "@/components/abstract-submission/AbstractVideoTable";
import {
  ABSTRACT_EPOSTER_COLUMNS,
  ABSTRACT_EPOSTER_ROWS,
  ABSTRACT_ORAL_COLUMNS,
  ABSTRACT_ORAL_ROWS,
} from "@/components/abstract-submission/abstract-submission-content";

const SUBHEADING_CLASS_NAME = "mt-8 mb-3 text-lg font-bold text-[#263238]";

export function AbstractPresentationGuide(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Guide to Presentation Types" />
      <p>
        Authors may choose their presentation type preference. However, the
        scientific committee will make the final decision on presentation type
        after review of the abstracts.
      </p>
      <h3 className={SUBHEADING_CLASS_NAME}>Oral Presentation</h3>
      <SimpleTable
        columns={ABSTRACT_ORAL_COLUMNS}
        rows={ABSTRACT_ORAL_ROWS}
      />
      <h3 className={SUBHEADING_CLASS_NAME}>Video Presentation</h3>
      <AbstractVideoTable />
      <h3 className={SUBHEADING_CLASS_NAME}>E-Poster</h3>
      <SimpleTable
        columns={ABSTRACT_EPOSTER_COLUMNS}
        rows={ABSTRACT_EPOSTER_ROWS}
      />
    </div>
  );
}
