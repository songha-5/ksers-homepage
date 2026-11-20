import Link from "next/link";
import type { ReactElement } from "react";
import { AccountLinks } from "@/components/auth/AccountLinks";
import { DdayBadge } from "@/components/pc-navigation/DdayBadge";
import { UTILITY_LINKS } from "@/config/navigation";

const ITEM_CLASS_NAME =
  "first:after:hidden relative after:w-0.5 after:h-3 after:bg-(--palette-primary) after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2";

const LINK_CLASS_NAME =
  "block px-3 py-2 text-sm text-(--palette-primary) transition-colors hover:text-(--palette-danger)";

export function UtilityBar(): ReactElement {
  const [homeLink, ...trailingLinks] = UTILITY_LINKS;

  return (
    <div className="flex items-center justify-end pt-3">
      <DdayBadge />
      <ul className="flex items-center [&>li:last-child>a]:pr-0">
        {homeLink ? (
          <li className={ITEM_CLASS_NAME}>
            <Link href={homeLink.href} className={LINK_CLASS_NAME}>
              {homeLink.label}
            </Link>
          </li>
        ) : null}
        <AccountLinks
          itemClassName={ITEM_CLASS_NAME}
          linkClassName={LINK_CLASS_NAME}
        />
        {trailingLinks.map((link) => (
          <li key={link.label} className={ITEM_CLASS_NAME}>
            <Link href={link.href} className={LINK_CLASS_NAME}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
