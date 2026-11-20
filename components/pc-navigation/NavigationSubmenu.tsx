import Link from "next/link";
import type { ReactElement } from "react";
import type { NavigationLink } from "@/types/navigation";

interface NavigationSubmenuProps {
  readonly items: readonly NavigationLink[];
  readonly isOpen: boolean;
  readonly pathname: string;
  readonly onNavigate: () => void;
}

const PANEL_CLASS_NAME =
  "absolute top-full left-0 z-50 min-w-60 pt-1 transition-opacity";
const SUBMENU_LINK_CLASS_NAME =
  "block px-8 py-3.5 text-md whitespace-nowrap transition-colors hover:text-(--palette-danger)";

function submenuLinkClassName(isActive: boolean): string {
  const toneClassName = isActive
    ? "text-(--palette-danger)"
    : "text-(--palette-primary)";

  return `${SUBMENU_LINK_CLASS_NAME} ${toneClassName}`;
}

export function NavigationSubmenu({
  items,
  isOpen,
  pathname,
  onNavigate,
}: NavigationSubmenuProps): ReactElement {
  const visibilityClassName = isOpen
    ? "visible opacity-100"
    : "pointer-events-none invisible opacity-0";

  return (
    <div className={`${PANEL_CLASS_NAME} ${visibilityClassName}`}>
      <ul className="bg-[#d6ddeb]/95 py-4 shadow-xl">
        {items.map((item) => {
          const isActive = item.href === pathname;

          return (
            <li key={item.href}>
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
    </div>
  );
}
