export const EVENT_PRIZE_RANKS = ["1st", "2nd", "3rd"] as const;

export type EventPrizeRankLabel = (typeof EVENT_PRIZE_RANKS)[number];

export type EventPrizeId = "gold" | "earbuds" | "olive-young";

export interface EventPrizeCaption {
  readonly name: string;
  readonly quantity: string;
}

export interface EventPrize {
  readonly id: EventPrizeId;
  readonly rank: EventPrizeRankLabel;
  readonly captions: readonly EventPrizeCaption[];
}

export type EventStepId = "stamp" | "desk" | "drawing" | "winner";

export interface EventStep {
  readonly id: EventStepId;
  readonly label: string;
  readonly text: string;
  readonly note?: string;
}
