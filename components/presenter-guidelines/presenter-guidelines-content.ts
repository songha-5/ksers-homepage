export const PRESENTER_GUIDELINES_HEADING = "Presenter Guidelines";

export const PRESENTER_EMPHASIS_CLASS_NAME = "font-bold text-[#263238]";

export const VISA_ASSISTANCE_HREF = "/2027/en/visa";

export const PRESENTER_GUIDELINE_TABS = [
  { id: "invited", label: "Invited / Oral / Video" },
  { id: "video", label: "Video Exhibition" },
  { id: "poster", label: "Poster Presentation" },
  { id: "eposter", label: "E-Poster Exhibition" },
] as const;

export type PresenterGuidelineTabId =
  (typeof PRESENTER_GUIDELINE_TABS)[number]["id"];

// 주석: 수정필요. 본문 문구, 템플릿, 제출 링크는 DB 내용으로 교체한다.
export const PPT_TEMPLATE_HREF =
  "/KSERS2026_Sponsorship_Application_Form.docx";

export const PPT_TEMPLATE_FILE_NAME =
  "KSERS2026_Sponsorship_Application_Form.docx";

export const VIDEO_TEMPLATE_HREF = "/KSERS2026_EXHIBITION_PROSPECTUS_kor.pdf";

export const VIDEO_TEMPLATE_FILE_NAME =
  "KSERS2026_EXHIBITION_PROSPECTUS_kor.pdf";

export const ZOOM_GUIDE_HREF = "/KSERS2026_Poster.pdf";

export const POWERPOINT_GUIDE_HREF = "/KSERS_LOGO.pdf";

export const POSTER_TEMPLATE_HREF = "/KSERS2026_Poster.pdf";

export const POSTER_TEMPLATE_FILE_NAME = "KSERS2026_Poster.pdf";

export const EPOSTER_TEMPLATE_HREF = "/KSERS2026_Poster.pdf";

export const EPOSTER_TEMPLATE_FILE_NAME = "KSERS2026_Poster.pdf";

export const VIDEO_SUBMIT_HREF = "/KSERS2026_EXHIBITION_PROSPECTUS_kor.pdf";

export const EPOSTER_SUBMIT_HREF = "/KSERS2026_Poster.pdf";

export const SECRETARIAT_EMAIL = "info@ksers.org";
