"use client";

import type { ReactElement } from "react";
import { MobileHeader } from "@/components/mo-navigation/MobileHeader";
import { MobileMenuOverlay } from "@/components/mo-navigation/MobileMenuOverlay";
import { MobileMenuPanel } from "@/components/mo-navigation/MobileMenuPanel";
import { useMobileMenuState } from "@/components/mo-navigation/use-mobile-menu-state";

export function MoNavigation(): ReactElement {
  const menu = useMobileMenuState();

  return (
    <>
      <MobileHeader
        isOpen={menu.isOpen}
        onToggle={menu.toggleMenu}
        onNavigate={menu.closeMenu}
      />
      <MobileMenuOverlay isOpen={menu.isOpen} onClose={menu.closeMenu} />
      <MobileMenuPanel
        isOpen={menu.isOpen}
        expandedLabel={menu.expandedLabel}
        onToggleSection={menu.toggleSection}
        onNavigate={menu.closeMenu}
      />
      <div aria-hidden className="h-16 min-[1100px]:hidden" />
    </>
  );
}
