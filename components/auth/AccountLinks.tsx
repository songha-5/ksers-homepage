"use client";

import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { buildAccountLinks } from "@/components/auth/build-account-links";
import { useMemberSessionContext } from "@/components/auth/MemberSessionProvider";
import { markServiceDeparture } from "@/components/auth/service-return";

interface AccountLinksProps {
  readonly itemClassName?: string;
  readonly linkClassName: string;
  readonly onNavigate?: () => void;
}

export function AccountLinks({
  itemClassName,
  linkClassName,
  onNavigate,
}: AccountLinksProps): ReactElement {
  const pathname = usePathname();
  const { member, registrationBase, returnOrigin } = useMemberSessionContext();
  const links = buildAccountLinks({
    member,
    registrationBase,
    origin: returnOrigin,
    pathname,
  });

  return (
    <>
      {links.map((link) => (
        <li key={link.id} className={itemClassName}>
          <a
            href={link.href}
            className={linkClassName}
            onClick={() => {
              if (link.id === "mypage") {
                markServiceDeparture();
              }
              onNavigate?.();
            }}
          >
            {link.label}
          </a>
        </li>
      ))}
    </>
  );
}
