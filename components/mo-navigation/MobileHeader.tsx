import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { MenuToggleButton } from "@/components/mo-navigation/MenuToggleButton";
import { SiteLogo } from "@/components/pc-navigation/SiteLogo";

interface MobileHeaderProps {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
  readonly onNavigate: () => void;
}

export function MobileHeader({
  isOpen,
  onToggle,
  onNavigate,
}: MobileHeaderProps): ReactElement {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white min-[1100px]:hidden">
      <ContentContainer className="flex h-16 items-center justify-between">
        <SiteLogo tone="dark" onNavigate={onNavigate} />
        <MenuToggleButton isOpen={isOpen} onToggle={onToggle} />
      </ContentContainer>
    </header>
  );
}
