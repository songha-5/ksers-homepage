import Link from "next/link";
import type { ReactElement } from "react";
import { CONGRESS_HOME_PATH } from "@/config/navigation";

const TONE_CLASS = {
  light: "text-white",
  dark: "text-black",
} as const;

interface SiteLogoProps {
  readonly tone?: keyof typeof TONE_CLASS;
  readonly onNavigate?: () => void;
}

export function SiteLogo({
  tone = "light",
  onNavigate,
}: SiteLogoProps): ReactElement {
  return (
    <Link
      href={CONGRESS_HOME_PATH}
      onClick={onNavigate}
      className={`shrink-0 text-[2.3rem] leading-none tracking-tight ${TONE_CLASS[tone]}`}
    >
      <span className="font-extrabold text-(--palette-primary)">KSERS</span>
      <span className="font-medium text-[#4fd2e0]">2027</span>
    </Link>
  );
}
