import Link from "next/link";
import type { ReactElement } from "react";
import { AccountLinks } from "@/components/auth/AccountLinks";
import { UTILITY_LINKS } from "@/config/navigation";

/** PC 유틸 링크와 같은 목록을 쓰되, 모바일 메뉴에서는 Home만 뺀다. */
const HIDDEN_MOBILE_UTILITY_LABEL = "Home";

const MOBILE_UTILITY_LINKS = UTILITY_LINKS.filter(
  (link) => link.label !== HIDDEN_MOBILE_UTILITY_LABEL,
);

const LINK_CLASS_NAME =
  "block border-b border-[#e6e8eb] px-5 py-4 text-base text-foreground";

interface MobileUtilityLinksProps {
  readonly onNavigate: () => void;
}

/** 상위 메뉴 아래에 로그인, News & Notices, Contact us를 붙인다. */
export function MobileUtilityLinks({
  onNavigate,
}: MobileUtilityLinksProps): ReactElement {
  return (
    <>
      <AccountLinks linkClassName={LINK_CLASS_NAME} onNavigate={onNavigate} />
      {MOBILE_UTILITY_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={LINK_CLASS_NAME}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
