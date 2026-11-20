import Link from "next/link";
import type { ReactElement } from "react";
import type { BannerShortcut } from "@/components/main-banner/banner-shortcuts";

const SHORTCUT_HOVER_CLASS =
  "text-(--palette-primary) transition-colors hover:bg-(--palette-primary) hover:text-white focus-visible:bg-(--palette-primary) focus-visible:text-white focus-visible:outline-none";

const SHORTCUT_LINK_CLASS =
  "group flex h-[200px] w-full min-w-0 flex-col items-center justify-center gap-3 px-3 text-center text-md font-bold leading-snug min-[768px]:h-[148px] min-[768px]:text-sm min-[1100px]:h-[200px] min-[1100px]:text-lg";

interface BannerShortcutLinkProps {
  readonly shortcut: BannerShortcut;
}

export function BannerShortcutLink({
  shortcut,
}: BannerShortcutLinkProps): ReactElement {
  const ShortcutIcon = shortcut.icon;

  return (
    <li className="min-w-0">
      <Link
        href={shortcut.href}
        className={`${SHORTCUT_LINK_CLASS} ${SHORTCUT_HOVER_CLASS} ${shortcut.backgroundClassName}`}
      >
        <ShortcutIcon
          aria-hidden
          strokeWidth={1.8}
          className="h-20 w-20 shrink-0 transition-colors min-[768px]:h-14 min-[768px]:w-14 min-[1100px]:h-20 min-[1100px]:w-20"
        />
        {/* 글 줄 수는 흐름 밖에 두어, 두 줄이어도 아이콘 하단이 옆 아이콘과 맞는다. */}
        <span className="relative h-[1.375em] w-full shrink-0">
          <span className="absolute inset-x-0 top-0 leading-snug">
            {shortcut.label}
          </span>
        </span>
      </Link>
    </li>
  );
}
