import type { ReactElement, ReactNode } from "react";

interface PresenterGuidelinesSectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

const TITLE_CLASS_NAME = "mt-8 mb-3 text-lg font-bold text-[#263238]";

export function PresenterGuidelinesSection({
  title,
  children,
}: PresenterGuidelinesSectionProps): ReactElement {
  return (
    <section>
      <h3 className={TITLE_CLASS_NAME}>{title}</h3>
      {children}
    </section>
  );
}
