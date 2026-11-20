import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import { REGISTRATION_EMAIL } from "@/components/registration/registration-content";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function RegistrationConfirmation(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Registration Confirmation (Receipt)" />
      <p>
        An official receipt will be issued on-site upon completion of
        registration and payment.
      </p>
      <div className="mt-3">
        <SubpageBulletList
          items={[
            {
              id: "payment-confirm",
              children:
                "Please note that the receipt will be issued after your payment is confirmed by the Secretariat.",
            },
            { id: "missing-receipt", children: <MissingReceiptNote /> },
          ]}
        />
      </div>
    </div>
  );
}

function MissingReceiptNote(): ReactElement {
  return (
    <>
      If you have not received the receipt on-site for obvious reasons, please
      contact the Secretariat (
      <ExternalTextLink href={`mailto:${REGISTRATION_EMAIL}`}>
        {REGISTRATION_EMAIL}
      </ExternalTextLink>
      ) then we will send you the receipt by email.
    </>
  );
}
