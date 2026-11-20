import { Coffee } from "lucide-react";
import type { ReactElement } from "react";
import { QUIZ_PRIZE } from "@/components/event/event-content";

export function EventQuizPrize(): ReactElement {
  return (
    <div className="border border-[#e4e4e4] bg-white px-4 py-6 text-center">
      <h3 className="mb-4 font-(family-name:--font-roboto) text-xl font-bold text-[#263238]">
        Prizes
      </h3>
      <Coffee
        aria-hidden
        className="mx-auto h-16 w-16 text-[#09428f]"
        strokeWidth={1.4}
      />
      <p className="mt-4 font-bold text-[#263238]">{QUIZ_PRIZE}</p>
    </div>
  );
}
