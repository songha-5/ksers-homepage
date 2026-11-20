import type { NavigationMenu } from "@/types/navigation";

/** 현재 경로가 대분류 자신이나 그 하위 메뉴이면 true. */
export function isNavigationMenuActive(
  pathname: string,
  menu: NavigationMenu,
): boolean {
  return menu.items.some((item) => item.href === pathname);
}
