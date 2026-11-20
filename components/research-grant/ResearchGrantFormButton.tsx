import type { ReactElement } from "react";
import {
  RESEARCH_GRANT_FORM_FILE_NAME,
  RESEARCH_GRANT_FORM_HREF,
} from "@/components/research-grant/research-grant-content";

const BUTTON_CLASS_NAME =
  "inline-flex items-center justify-center bg-[#09428f] px-8 py-3 text-center text-base font-bold text-white";

export function ResearchGrantFormButton(): ReactElement {
  return (
    <p className="mt-6 text-center">
      {/* 주석: 수정필요. 연구비 공모과제 신청양식 파일은 교체한다. */}
      <a
        href={RESEARCH_GRANT_FORM_HREF}
        download={RESEARCH_GRANT_FORM_FILE_NAME}
        className={BUTTON_CLASS_NAME}
      >
        연구비 공모과제 신청양식 다운로드
      </a>
    </p>
  );
}
