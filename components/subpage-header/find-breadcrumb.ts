import { NAVIGATION_MENUS } from "@/config/navigation";

export interface BreadcrumbTrail {
  readonly category: string | null;
  readonly current: string;
}

const EXTRA_PAGE_LABELS: Readonly<Record<string, string>> = {
  "/2027/en/program-book": "Program Book",
  "/2027/en/abstract-book": "Abstract Book",
};

/** 현재 경로의 대분류와 페이지 이름을 찾는다. */
export function findBreadcrumb(pathname: string): BreadcrumbTrail | null {
  for (const menu of NAVIGATION_MENUS) {
    const current = menu.items.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    );
    if (current) {
      return { category: menu.label, current: current.label };
    }
  }

  const extraLabel = EXTRA_PAGE_LABELS[pathname];
  if (extraLabel) {
    return { category: null, current: extraLabel };
  }

  return null;
}
