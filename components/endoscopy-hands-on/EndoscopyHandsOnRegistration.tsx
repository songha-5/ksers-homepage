import type { ReactElement } from "react";
import { ENDOSCOPY_REGISTRATION_NOTE } from "@/components/endoscopy-hands-on/endoscopy-hands-on-content";
import { SubpagePrimaryButton } from "@/components/subpage/SubpagePrimaryButton";

export function EndoscopyHandsOnRegistration(): ReactElement {
  return (
    <div className="mt-6">
      {/* 주석: 수정필요. Registration 링크는 로그인 여부에 따라 나중에 연결한다. */}
      <SubpagePrimaryButton>Registration</SubpagePrimaryButton>
      <p className="mt-4">{ENDOSCOPY_REGISTRATION_NOTE}</p>
    </div>
  );
}
