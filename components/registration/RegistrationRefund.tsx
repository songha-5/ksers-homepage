import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import {
  REFUND_COLUMNS,
  REFUND_ROWS,
  REGISTRATION_EMAIL,
} from "@/components/registration/registration-content";
import { SimpleTable } from "@/components/simple-table/SimpleTable";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function RegistrationRefund(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Cancellation and Refund Policy" />
      <SubpageBulletList
        items={[
          {
            id: "writing",
            children: "Only cancellations made in writing will be accepted.",
          },
          { id: "email", children: <CancellationEmailNote /> },
          {
            id: "bank-charge",
            children:
              "All bank charges for remittance must be paid by the registrant.",
          },
          {
            id: "timing",
            children:
              "Refunds will be given 1 month after the congress is over.",
          },
        ]}
      />
      <div className="mt-4">
        <SimpleTable columns={REFUND_COLUMNS} rows={REFUND_ROWS} />
      </div>
    </div>
  );
}

function CancellationEmailNote(): ReactElement {
  return (
    <>
      Written requests for cancellation should be sent by e-mail (
      <ExternalTextLink href={`mailto:${REGISTRATION_EMAIL}`}>
        {REGISTRATION_EMAIL}
      </ExternalTextLink>
      ).
    </>
  );
}
