import type { ReactElement } from "react";
import {
  LUCKY_DRAW_LEAD,
  LUCKY_DRAW_TITLE,
} from "@/components/event/event-content";
import { EventProcedure } from "@/components/event/EventProcedure";
import { EventPrizes } from "@/components/event/EventPrizes";
import { EventRibbon } from "@/components/event/EventRibbon";

export function EventLuckyDraw(): ReactElement {
  return (
    <section>
      <EventRibbon title={LUCKY_DRAW_TITLE} />
      <p className="mt-6 text-center text-base font-bold text-[#263238]">
        {LUCKY_DRAW_LEAD}
      </p>
      <hr className="mt-8 border-[#e4e4e4]" />
      <EventPrizes />
      <EventProcedure />
    </section>
  );
}
