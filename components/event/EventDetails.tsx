import type { ReactElement } from "react";
import { EVENT_HEADING } from "@/components/event/event-content";
import { EventLuckyDraw } from "@/components/event/EventLuckyDraw";
import { EventQuiz } from "@/components/event/EventQuiz";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

export function EventDetails(): ReactElement {
  return (
    <SubpageFrame title={EVENT_HEADING}>
      <EventLuckyDraw />
      <EventQuiz />
    </SubpageFrame>
  );
}
