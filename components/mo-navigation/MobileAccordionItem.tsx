"use client";

import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import type { NavigationMenu } from "@/types/navigation";
import { MobileSubmenu } from "@/components/mo-navigation/MobileSubmenu";
import { isNavigationMenuActive } from "@/utils/is-navigation-menu-active";

interface MobileAccordionItemProps {
  readonly menu: NavigationMenu;
  readonly isExpanded: boolean;
  readonly onToggle: (label: string) => void;
  readonly onNavigate: () => void;
}

export function MobileAccordionItem({
  menu,
  isExpanded,
  onToggle,
  onNavigate,
}: MobileAccordionItemProps): ReactElement {
  const pathname = usePathname();
  const isActive = isNavigationMenuActive(pathname, menu);
  const submenuId = toSubmenuId(menu.label);
  const panelClassName = isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]";
  const toneClassName = isActive
    ? "text-(--palette-danger)"
    : "text-foreground";

  return (
    <li>
      <button
        type="button"
        className={`w-full border-b border-[#e6e8eb] px-5 py-4 text-left text-base ${toneClassName}`}
        aria-current={isActive ? "true" : undefined}
        aria-expanded={isExpanded}
        aria-controls={submenuId}
        onClick={() => onToggle(menu.label)}
      >
        {menu.label}
      </button>
      <div
        id={submenuId}
        inert={!isExpanded}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${panelClassName}`}
      >
        <div className="min-h-0 overflow-hidden">
          <MobileSubmenu
            items={menu.items}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </li>
  );
}

function toSubmenuId(label: string): string {
  return `mobile-submenu-${label.toLowerCase().replaceAll(" ", "-")}`;
}
