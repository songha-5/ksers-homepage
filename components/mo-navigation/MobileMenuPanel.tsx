import type { ReactElement } from "react";
import { NAVIGATION_MENUS } from "@/config/navigation";
import { MobileAccordionItem } from "@/components/mo-navigation/MobileAccordionItem";
import { MobileUtilityLinks } from "@/components/mo-navigation/MobileUtilityLinks";

interface MobileMenuPanelProps {
  readonly isOpen: boolean;
  readonly expandedLabel: string | null;
  readonly onToggleSection: (label: string) => void;
  readonly onNavigate: () => void;
}

export function MobileMenuPanel({
  isOpen,
  expandedLabel,
  onToggleSection,
  onNavigate,
}: MobileMenuPanelProps): ReactElement {
  const panelClassName = isOpen
    ? "opacity-100"
    : "pointer-events-none opacity-0";

  return (
    <nav
      id="mobile-navigation-panel"
      aria-label="주요 메뉴"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-white shadow-md transition-opacity duration-300 min-[1100px]:hidden ${panelClassName}`}
    >
      <ul>
        {NAVIGATION_MENUS.map((menu) => (
          <MobileAccordionItem
            key={menu.label}
            menu={menu}
            isExpanded={expandedLabel === menu.label}
            onToggle={onToggleSection}
            onNavigate={onNavigate}
          />
        ))}
        <MobileUtilityLinks onNavigate={onNavigate} />
      </ul>
    </nav>
  );
}
