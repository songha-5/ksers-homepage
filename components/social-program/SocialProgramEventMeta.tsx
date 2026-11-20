import { Clock, MapPin, type LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import type { SocialProgramEvent } from "@/components/social-program/social-program-content";

interface SocialProgramEventMetaProps {
  readonly event: SocialProgramEvent;
}

const ICON_CLASS_NAME = "h-4 w-4 shrink-0 text-[#09428f]";

export function SocialProgramEventMeta({
  event,
}: SocialProgramEventMetaProps): ReactElement {
  return (
    <div className="mt-3 flex flex-col gap-1">
      {renderMetaRow(Clock, event.time, true)}
      {renderMetaRow(MapPin, event.place, false)}
      {renderPrice(event.price)}
    </div>
  );
}

function renderMetaRow(
  icon: LucideIcon,
  label: string,
  emphasize: boolean,
): ReactElement {
  const Icon = icon;
  const textClassName = emphasize ? "font-bold text-[#263238]" : undefined;

  return (
    <p className="flex items-center gap-2">
      <Icon aria-hidden className={ICON_CLASS_NAME} strokeWidth={1.8} />
      <span className={textClassName}>{label}</span>
    </p>
  );
}

function renderPrice(price: string | null): ReactElement | null {
  if (!price) {
    return null;
  }

  return <p className="pl-6">{price}</p>;
}
