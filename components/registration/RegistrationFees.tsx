import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import { RegistrationFeeTable } from "@/components/registration/RegistrationFeeTable";
import { SubpageSecondaryLink } from "@/components/subpage/SubpageSecondaryLink";
import {
  REGISTRATION_DOCUMENT_URL,
  REGISTRATION_EMAIL,
  REGISTRATION_GROUP_FORM_URL,
} from "@/components/registration/registration-content";
import { SubpageBulletList } from "@/components/subpage/SubpageBulletList";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

export function RegistrationFees(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Registration Fees" />
      <RegistrationFeeTable />
      <div className="mt-4">
        <SubpageBulletList items={feeNotes()} />
      </div>
    </div>
  );
}

function feeNotes(): readonly {
  readonly id: string;
  readonly children: ReactElement;
}[] {
  return [
    { id: "group-form", children: <GroupFormNote /> },
  ];
}

function GroupFormNote(): ReactElement {
  return (
    <>
      기관 단체 등록 시, 양식에 맞게 기재하여{" "}
      <ExternalTextLink href={`mailto:${REGISTRATION_EMAIL}`}>
        {REGISTRATION_EMAIL}
      </ExternalTextLink>
      으로 송부해주시기 바랍니다.{" "}
      {/* 주석: 수정필요. KSERS2026_groupregi_pre (Kor).xlsx */}
      <SubpageSecondaryLink kind="blank" href={REGISTRATION_GROUP_FORM_URL}>
        양식 다운로드
      </SubpageSecondaryLink>
    </>
  );
}
