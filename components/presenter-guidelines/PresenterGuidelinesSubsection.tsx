import type { ReactElement, ReactNode } from "react";

interface PresenterGuidelinesSubsectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

const TITLE_CLASS_NAME = "mt-6 mb-3 text-base font-bold text-[#09428f]";

export function PresenterGuidelinesSubsection({
  title,
  children,
}: PresenterGuidelinesSubsectionProps): ReactElement {
  return (
    <div>
      <h4 className={TITLE_CLASS_NAME}>{title}</h4>
      {children}
    </div>
  );
}
