import type { ReactElement, ReactNode } from "react";

interface ExternalTextLinkProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
}

const LINK_CLASS_NAME = "font-bold text-[#09428f] underline";

export function ExternalTextLink({
  href,
  children,
  className,
}: ExternalTextLinkProps): ReactElement {
  const linkClassName = className
    ? `${LINK_CLASS_NAME} ${className}`
    : LINK_CLASS_NAME;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {children}
    </a>
  );
}
