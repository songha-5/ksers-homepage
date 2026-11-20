import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { BannerShortcutLink } from "@/components/main-banner/BannerShortcutLink";
import { BANNER_SHORTCUTS } from "@/components/main-banner/banner-shortcuts";

interface BannerShortcutListProps {
  readonly className: string;
}

export function BannerShortcutList({
  className,
}: BannerShortcutListProps): ReactElement {
  return (
    <ContentContainer>
      <ul className={className}>
        {BANNER_SHORTCUTS.map((shortcut) => (
          <BannerShortcutLink key={shortcut.id} shortcut={shortcut} />
        ))}
      </ul>
    </ContentContainer>
  );
}
