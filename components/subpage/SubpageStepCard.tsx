import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

interface SubpageStepCardProps {
  readonly label: string;
  readonly text: string;
  readonly icon: LucideIcon;
}

export function SubpageStepCard({
  label,
  text,
  icon: StepIcon,
}: SubpageStepCardProps): ReactElement {
  return (
    <li className="flex flex-col items-center gap-3 border border-[#e4e4e4] bg-[#f7f9fb] px-3 py-5 text-center">
      <span className="text-sm font-bold text-[#09428f]">{label}</span>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8eef5] text-[#09428f]">
        <StepIcon aria-hidden className="h-8 w-8" strokeWidth={1.6} />
      </span>
      <span className="whitespace-pre-line leading-snug">{text}</span>
    </li>
  );
}
