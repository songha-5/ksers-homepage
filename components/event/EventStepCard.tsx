import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

interface EventStepCardProps {
  readonly label: string;
  readonly text: string;
  readonly note?: string;
  readonly icon: LucideIcon;
}

const CARD_CLASS_NAME =
  "flex h-full flex-col items-center gap-3 border border-[#e4e4e4] bg-[#f7f9fb] px-3 py-5 text-center";

export function EventStepCard({
  label,
  text,
  note,
  icon: StepIcon,
}: EventStepCardProps): ReactElement {
  return (
    <li className={CARD_CLASS_NAME}>
      <span className="text-sm font-bold text-[#09428f]">{label}</span>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8eef5] text-[#09428f]">
        <StepIcon aria-hidden className="h-8 w-8" strokeWidth={1.6} />
      </span>
      <span className="whitespace-pre-line leading-snug">{text}</span>
      {note ? (
        <span className="whitespace-pre-line text-xs font-bold text-[#09428f]">
          {note}
        </span>
      ) : null}
    </li>
  );
}
