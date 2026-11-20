export interface ResearchGrantListItem {
  readonly id: string;
  readonly text: string;
}

export interface ResearchGrantScoreRow {
  readonly id: string;
  readonly factor: string;
  readonly score: string;
}

export const RESEARCH_GRANT_HEADING = "연구비 공모";

export const RESEARCH_GRANT_LEAD =
  "대한내시경로봇외과학회에서는 2026년 연구비 지원 사업 연구과제를 모집합니다. 회원 여러분들의 적극적인 참여 바랍니다.";

export const RESEARCH_GRANT_DEADLINE = "3월 23일 (월)";

export const RESEARCH_GRANT_PERIOD = "~3월 23일 (월)";

export const RESEARCH_GRANT_TYPE =
  "일반 연구과제 3편 (다학제/다기관 연구를 기본으로 하면서, 최소침습 수술의 교육, 술기개발, 수술의 안정성 확보에 도움이 될 연구 과제), 정책과제는 격년으로 모집";

export const RESEARCH_GRANT_CONTACT =
  "2026 대한내시경로봇외과학회 학술대회 준비사무국 (이메일: info@ksers.org)";

// 주석: 수정필요. 신청양식 파일은 실제 양식으로 교체한다.
export const RESEARCH_GRANT_FORM_HREF = "/KSERS2026_Poster.pdf";

export const RESEARCH_GRANT_FORM_FILE_NAME = "KSERS2026_Poster.pdf";

export const RESEARCH_GRANT_ELIGIBILITY = [
  {
    id: "membership",
    text: "학회 평생회원으로서 국내외 논문발표를 제1저자 및 연구 책임자로 5편 이상 한 연구자",
  },
  {
    id: "duplicate-funding",
    text: "책임 및 공동연구자는 동일한 연구과제로 다른 연구비를 지원받거나 학술상을 수상한 경력이 없어야 함.",
  },
] as const satisfies readonly ResearchGrantListItem[];

export const RESEARCH_GRANT_FUNDING = [
  {
    id: "amount",
    text: "일반 과제 지원금은 1천만원으로 한다.",
  },
  {
    id: "notice",
    text: "선정된 연구자 및 과제를 대한내시경로봇외과학회 홈페이지에 공고한다.",
  },
] as const satisfies readonly ResearchGrantListItem[];

export const RESEARCH_GRANT_OBLIGATIONS = [
  {
    id: "extension",
    text: "연구책임자는 추가 연구기간이 필요한 경우 연장신청서를 연구종료예정 시점까지 학회사무실에 제출하고 운영위원회에서 연구기간연장을 허가한 경우 최대 12개월까지 연장할 수 있다.",
  },
  {
    id: "interim-report",
    text: "연구책임자는 6개월 마다 중간보고서를 운영위원회에 서면으로 제출해야 한다. 운영위원회는 중간보고서를 심사하고, 연구의 지속, 연구비의 조정, 연구계획의 수정 혹은 연구 종료 등을 결정하여 책임연구자에게 통보한다.",
  },
  {
    id: "final-report",
    text: "연구책임자는 연구 종료 후 2개월 이내에 최종 결과보고서를 운영위원회에 제출하여야 한다. 연구책임자 혹은 공동 연구자는 연구기간 종료 1년이내에 대한내시경로봇외과학회 학술대회에서 연구성과를 발표하여야 하며, 또한 연구 종료 후 1년 이내에 학회 연구비의 보조를 받았음을 명시하여 Journal of Minimally Invasive Surgery (JMIS)에 그 결과를 발표하여야 한다. (Original Article) JMIS에 투고하지 않을 시 향후 5년간 연구비 공모 지원이 금지되며, 연구 종료 후 2년 내에도 결과 발표가 없으면, 소속 기관에 사실을 통보하고, 연구비 전액을 반환한다.",
  },
  {
    id: "duty-failure",
    text: "연구책임자는 연구비 수혜자의 의무를 이행하지 못한 경우 (연구책임자의 퇴사 및 이직 등)에 사유서를 제출하며, 운영위원회에서 이를 심사하여 연구비 반환 여부 및 액수를 결정한다. 단, 이직하는 기관에서 재계약 및 연구진행이 가능하다면, 연구위원회의 심사를 거쳐 결정한다.",
  },
  {
    id: "future-application",
    text: "연구자가 추후 학회가 주관하는 연구지원사업에 응모하는 경우, 기 수행과제의 연구 수행실적 평가에 따라 선정단계에서 가산점 혜택 혹은 불이익을 받을 수 있다.",
  },
  {
    id: "korean-acknowledgement",
    text: "결과보고 논문에는 “대한내시경로봇외과학회 연구 지원 사업 20○○년도 연구비에 의하여 이루어졌음 (KSERS-YY-00)”을 명기하여야 한다.",
  },
  {
    id: "english-acknowledgement",
    text: "영어논문에는 “This study was supported by The Research Supporting Program of the Korean Society of Endo-Laparoscopic & Robotic Surgery for 20○○ (KSERS-YY-00).”을 명기하여야 한다.",
  },
] as const satisfies readonly ResearchGrantListItem[];

export const RESEARCH_GRANT_REVIEW_STEPS = [
  {
    id: "ratio",
    text: "사전 심사 50%, 현장 심사 50% 를 통해 최종 연구비 수혜자를 선정한다.",
  },
  {
    id: "presentation",
    text: "사전 심사에서 예비합격자를 선정하고, 추계대한외과학회 중 대한내시경로봇외과학회 연구 발표 session 에서 현장 발표 후 현장 심사에서 최종 결정한다.",
  },
  {
    id: "criteria",
    text: "연구 계획서 평가 요소는 다음과 같다.",
  },
] as const satisfies readonly ResearchGrantListItem[];

export const RESEARCH_GRANT_SCORE_ROWS = [
  {
    id: "impact",
    factor: "① 연구성과의 파급 및 활용 효과 (30점)",
    score: "/30",
  },
  { id: "need", factor: "② 연구의 필요성 (20점)", score: "/20" },
  {
    id: "feasibility",
    factor: "③ 연구의 실현가능성 (20점)",
    score: "/20",
  },
  {
    id: "originality",
    factor: "④ 연구 목표의 타당성 및 연구의 창의성 (20점)",
    score: "/20",
  },
  { id: "budget", factor: "⑤ 연구비의 적정성 (5점)", score: "/5" },
  { id: "contribution", factor: "⑥ 학회 공헌도 (5점) *", score: "/5" },
  { id: "total", factor: "합계", score: "/100" },
] as const satisfies readonly ResearchGrantScoreRow[];

export const RESEARCH_GRANT_CONTRIBUTION_ROWS = [
  {
    id: "attendance",
    factor: "① 지난 3년간 학회 출석",
    score: "3회 이상 (5점) · 2회 (3점) · 1회 (2점) · 0회 (0점)",
  },
  {
    id: "presentation",
    factor: "② 지난 3년간 학회 발표 (Oral/Poster)",
    score: "3회 이상 (5점) · 2회 (3점) · 1회 (2점) · 0회 (0점)",
  },
  {
    id: "jmis",
    factor: "③ JMIS 학회지 논문 투고 여부",
    score: "있음 (5점) · 없음 (0점)",
  },
] as const satisfies readonly ResearchGrantScoreRow[];

export const RESEARCH_GRANT_BONUS_LEAD =
  "젊은 연구자들의 연구 능력 함양과 연구 활동 독려를 위해 부여";

export const RESEARCH_GRANT_BONUS_ROWS = [
  { id: "under-35", factor: "35세 이하 (3점)", score: "3" },
  { id: "under-45", factor: "45세 이하 (2점)", score: "2" },
] as const satisfies readonly ResearchGrantScoreRow[];
