import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import { RegistrationPairTable } from "@/components/registration/RegistrationPairTable";
import {
  DOMESTIC_BANK_ROWS,
  ONLINE_PAYMENT_NOTES,
  OVERSEAS_BANK_ROWS,
  REGISTRATION_EMAIL,
} from "@/components/registration/registration-content";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

const SUBHEADING_CLASS_NAME = "mt-8 mb-3 text-lg font-bold text-[#263238]";

export function RegistrationPayment(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Payment Method" />
      <h3 className={SUBHEADING_CLASS_NAME}>Online Credit Card</h3>
      <SubpageBulletList
        items={ONLINE_PAYMENT_NOTES.map((note) => ({
          id: note.id,
          children: note.text,
        }))}
      />
      <h3 className={SUBHEADING_CLASS_NAME}>Wire Transfer</h3>
      <SubpageBulletList items={wireTransferNotes()} />
      <h3 className={SUBHEADING_CLASS_NAME}>[Overseas]</h3>
      <RegistrationPairTable rows={OVERSEAS_BANK_ROWS} />
      <h3 className={SUBHEADING_CLASS_NAME}>[Domestic(Korean)]</h3>
      <RegistrationPairTable rows={DOMESTIC_BANK_ROWS} />
    </div>
  );
}

function wireTransferNotes(): readonly {
  readonly id: string;
  readonly children: ReactElement | string;
}[] {
  return [
    {
      id: "bank-charge",
      children:
        "Direct bank transfers should be made to the account below. All bank charges for remittance must be paid by the registrants.",
    },
    { id: "receipt-copy", children: <ReceiptCopyNote /> },
    {
      id: "registrant-name",
      children:
        "Please note that the transfer must be made under the registrant’s name and must be stated on the receipt.",
    },
  ];
}

function ReceiptCopyNote(): ReactElement {
  return (
    <>
      A copy of the receipt of the bank remittance should be sent to the
      Secretariat by e-mail (
      <ExternalTextLink href={`mailto:${REGISTRATION_EMAIL}`}>
        {REGISTRATION_EMAIL}
      </ExternalTextLink>
      ).
    </>
  );
}
