import type { ReactElement, ReactNode } from "react";

interface SubpagePrimaryButtonProps {
  readonly children: ReactNode;
}

export const SUBPAGE_PRIMARY_BUTTON_CLASS_NAME =
  "inline-flex cursor-pointer items-center justify-center bg-[#09428f] px-8 py-3 text-base font-bold text-white";

export function SubpagePrimaryButton({
  children,
}: SubpagePrimaryButtonProps): ReactElement {
  return (
    <button type="button" className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}>
      {children}
    </button>
  );
}
