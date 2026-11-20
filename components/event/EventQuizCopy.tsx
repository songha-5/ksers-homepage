import { QrCode } from "lucide-react";
import type { ReactElement } from "react";
import { QUIZ_BODY, QUIZ_NOTE } from "@/components/event/event-content";

export function EventQuizCopy(): ReactElement {
  return (
    <div>
      <p className="whitespace-pre-line text-base leading-relaxed text-[#263238]">
        {QUIZ_BODY}
      </p>
      <p className="mt-3 text-sm font-bold text-[#09428f]">{QUIZ_NOTE}</p>
      <QrCode
        aria-hidden
        className="mt-5 h-12 w-12 text-[#09428f]"
        strokeWidth={1.4}
      />
    </div>
  );
}
