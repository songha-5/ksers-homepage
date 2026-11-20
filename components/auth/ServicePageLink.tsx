"use client";

import type { ReactElement, ReactNode } from "react";
import { markServiceDeparture } from "@/components/auth/service-return";

interface ServicePageLinkProps {
  readonly href: string | null;
  readonly className: string;
  readonly children: ReactNode;
}

export function ServicePageLink({
  href,
  className,
  children,
}: ServicePageLinkProps): ReactElement {
  if (!href) {
    return (
      <button type="button" className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={className} onClick={markServiceDeparture}>
      {children}
    </a>
  );
}
