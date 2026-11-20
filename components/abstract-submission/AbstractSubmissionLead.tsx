import type { ReactElement } from "react";
import { AbstractImportantDates } from "@/components/abstract-submission/AbstractImportantDates";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import {
  ABSTRACT_JMIS_URL,
  ABSTRACT_SECRETARIAT_EMAIL,
  ABSTRACT_SUBMISSION_DEADLINE,
} from "@/components/abstract-submission/abstract-submission-content";

const DATE_CLASS_NAME = "font-bold text-[#09428f]";

export function AbstractSubmissionLead(): ReactElement {
  return (
    <div className="flex flex-col gap-5">
      <p>
        The KSERS 2027 Congress organizing committee cordially invites you to
        submit abstracts. All abstracts must be submitted online via the
        &quot;Online Submission System&quot; and must be written in clear
        English and submitted by{" "}
        <strong className={DATE_CLASS_NAME}>
          {ABSTRACT_SUBMISSION_DEADLINE}
        </strong>
        .
      </p>
      <p>
        KSERS (Korean Society of Endo-Laparoscopic & Robotic Surgery)
        encourages you
        to submit your paper to the JMIS (Journal of Minimally Invasive
        Surgery), the official journal of KSERS. For more information, please
        visit. <ExternalTextLink href={ABSTRACT_JMIS_URL}>Click</ExternalTextLink>
      </p>
      <AbstractImportantDates />
      <p>
        For any questions regarding abstract submission, please contact the
        secretariat (Email:{" "}
        <ExternalTextLink href={`mailto:${ABSTRACT_SECRETARIAT_EMAIL}`}>
          {ABSTRACT_SECRETARIAT_EMAIL}
        </ExternalTextLink>
        ).
      </p>
    </div>
  );
}
