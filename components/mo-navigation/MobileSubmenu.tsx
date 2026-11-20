import Link from "next/link";
import type { ReactElement } from "react";
import type { NavigationLink } from "@/types/navigation";

interface MobileSubmenuProps {
  readonly items: readonly NavigationLink[];
  readonly pathname: string;
  readonly onNavigate: () => void;
}

const SUBMENU_LINK_CLASS_NAME =
  "block px-8 py-3.5 text-sm transition-colors duration-200 hover:text-(--palette-danger) focus-visible:text-(--palette-danger)";

function submenuLinkClassName(isActive: boolean): string {
  const toneClassName = isActive
    ? "text-(--palette-danger)"
    : "text-muted-foreground";

  return `${SUBMENU_LINK_CLASS_NAME} ${toneClassName}`;
}

export function MobileSubmenu({
  items,
  pathname,
  onNavigate,
}: MobileSubmenuProps): ReactElement {
  return (
    <ul className="bg-[#f3f5f8]">
      {items.map((item) => {
        const isActive = item.href === pathname;

        return (
          <li key={item.href} className="border-b border-[#e3e6ea]">
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={submenuLinkClassName(isActive)}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
