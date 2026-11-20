import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import {
  KETA_APPLY_URL,
  KETA_NOTES,
  KETA_SITE_URL,
} from "@/components/visa-assistance/visa-assistance-content";
import { VisaExternalButton } from "@/components/visa-assistance/VisaExternalButton";

export function VisaKetaSection(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Korea Electronic Travel Authorization (K-ETA)" />
      <p>
        K-ETA is mandatory for nationals from visa-free entry countries who
        enter Korea without a visa. You should apply for the K-ETA at least 72
        hours prior to boarding the flight bound for the Republic of Korea. You
        can apply for K-ETA website (
        <ExternalTextLink href={KETA_SITE_URL}>www.k-eta.go.kr</ExternalTextLink>
        ) or mobile app (K-ETA).
      </p>
      <div className="mt-4">
        <SubpageBulletList
          items={KETA_NOTES.map((note) => ({
            id: note.id,
            children: note.text,
          }))}
        />
      </div>
      <p className="mt-8 text-center">
        <VisaExternalButton href={KETA_APPLY_URL}>
          Apply for K-ETA
        </VisaExternalButton>
      </p>
    </div>
  );
}
