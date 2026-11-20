import { Gift, Headphones, type LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import type { EventPrizeId } from "@/components/event/event-model";

interface EventProductIconProps {
  readonly prizeId: Exclude<EventPrizeId, "gold">;
}

const PRODUCT_ICONS = {
  earbuds: Headphones,
  "olive-young": Gift,
} as const satisfies Record<EventProductIconProps["prizeId"], LucideIcon>;

export function EventProductIcon({
  prizeId,
}: EventProductIconProps): ReactElement {
  const ProductIcon = PRODUCT_ICONS[prizeId];

  return (
    <span className="flex h-40 items-center justify-center text-[#09428f]">
      <ProductIcon aria-hidden className="h-16 w-16" strokeWidth={1.4} />
    </span>
  );
}
