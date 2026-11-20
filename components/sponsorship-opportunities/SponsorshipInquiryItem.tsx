import type { LucideIcon } from "lucide-react";
import type { ReactElement, ReactNode } from "react";

interface SponsorshipInquiryItemProps {
  readonly icon: LucideIcon;
  readonly children: ReactNode;
}

export function SponsorshipInquiryItem({
  icon: ItemIcon,
  children,
}: SponsorshipInquiryItemProps): ReactElement {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#09428f] text-white">
        <ItemIcon aria-hidden className="h-4 w-4" strokeWidth={1.8} />
      </span>
      <span className="text-left font-bold text-[#263238]">{children}</span>
    </span>
  );
}
