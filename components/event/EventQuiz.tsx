import type { ReactElement } from "react";
import { QUIZ_TITLE } from "@/components/event/event-content";
import { EventQuizCopy } from "@/components/event/EventQuizCopy";
import { EventQuizPrize } from "@/components/event/EventQuizPrize";
import { EventRibbon } from "@/components/event/EventRibbon";

export function EventQuiz(): ReactElement {
  return (
    <section className="mt-16">
      <EventRibbon title={QUIZ_TITLE} />
      <div className="mt-8 grid items-center gap-8 min-[768px]:grid-cols-[1.4fr_0.8fr]">
        <EventQuizCopy />
        <EventQuizPrize />
      </div>
    </section>
  );
}
