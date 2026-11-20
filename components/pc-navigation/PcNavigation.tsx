"use client";

import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { NAVIGATION_MENUS } from "@/config/navigation";
import { NavigationMenuItem } from "@/components/pc-navigation/NavigationMenuItem";
import { SiteLogo } from "@/components/pc-navigation/SiteLogo";
import { UtilityBar } from "@/components/pc-navigation/UtilityBar";
import { useIsScrolled } from "@/hooks/use-is-scrolled";

const SCROLLED_HEADER_CLASS =
  "border-b border-border bg-white/95 backdrop-blur-md";
const TOP_HEADER_CLASS = "border-b border-border bg-white";

export function PcNavigation(): ReactElement {
  const isScrolled = useIsScrolled();
  const headerClassName = isScrolled ? SCROLLED_HEADER_CLASS : TOP_HEADER_CLASS;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-colors duration-300 min-[1100px]:block ${headerClassName}`}
      >
        <ContentContainer>
          <UtilityBar />
          <div className="flex items-center gap-8 pb-1">
            <SiteLogo />
            <nav aria-label="주요 메뉴" className="ml-auto">
              <ul className="flex items-center [&>li:last-child>a]:pr-0">
                {NAVIGATION_MENUS.map((menu) => (
                  <NavigationMenuItem key={menu.label} menu={menu} />
                ))}
              </ul>
            </nav>
          </div>
        </ContentContainer>
      </header>
      <div aria-hidden className="hidden h-28 min-[1100px]:block" />
    </>
  );
}
