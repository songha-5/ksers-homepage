export interface PreparingPage {
  readonly name: string;
  readonly path: string;
}

/**
 * 가오픈 동안 기존 화면 위에 준비 중 표시를 얹는 페이지.
 * 페이지 구현은 바꾸지 않는다. 확정되면 해당 항목만 이 목록에서 지우면 원래 화면이 다시 보인다.
 * 메인, 로그인, 확정 완료 페이지는 여기에 넣지 않는다.
 */
export const PREPARING_PAGES = [
  // 확정 진행 중
  // { name: "Committee", path: "/2027/en/committee" },
  // { name: "Related Events", path: "/2027/en/related-events" },
  { name: "Accommodation", path: "/2027/en/accommodation" },
  { name: "Travel Grants", path: "/2027/en/grants" },
  { name: "연구비 공모", path: "/2027/kr/research-grant" },
  { name: "Presenter Guidelines", path: "/2027/en/guidelines" },
  { name: "Sponsorship Opportunities", path: "/2027/en/sponsorship-oppt" },
  // 준비 중. 가오픈 때 확정한 뒤 적용한다.
  { name: "Social Program", path: "/2027/en/social-event" },
  { name: "Event", path: "/2027/en/event" },
  { name: "Scientific Program", path: "/2027/en/scientific-program" },
  { name: "Master Class: Hands-On Meeting", path: "/2027/en/master-class" },
  {
    name: "Master Class: Site Visiting Program",
    path: "/2027/en/site-visiting",
  },
  { name: "Endoscopy Hands-On", path: "/2027/en/endoscopy" },
  { name: "International Training", path: "/2027/en/training" },
  { name: "Gallery", path: "/2027/en/photo-gallery" },
] as const satisfies readonly PreparingPage[];

export function findPreparingPage(pathname: string): PreparingPage | null {
  return (
    PREPARING_PAGES.find(
      (page) => pathname === page.path || pathname.startsWith(`${page.path}/`),
    ) ?? null
  );
}
