import type { ReactElement, ReactNode } from "react";

interface VisaExternalButtonProps {
  readonly href: string;
  readonly children: ReactNode;
}

const BUTTON_CLASS_NAME =
  "inline-flex items-center justify-center bg-[#09428f] px-8 py-3 text-base font-bold text-white";

export function VisaExternalButton({
  href,
  children,
}: VisaExternalButtonProps): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={BUTTON_CLASS_NAME}
    >
      {children}
    </a>
  );
}
