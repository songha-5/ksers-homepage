import type { EventPrize, EventStep } from "@/components/event/event-model";

// 주석: 수정필요. 2026 행사 문구이며, 2027 일정과 상품이 확정되면 교체한다.
export const EVENT_HEADING = "Event";

export const LUCKY_DRAW_TITLE = "Event 1. Lucky Draw";

export const LUCKY_DRAW_LEAD =
  "Collect all the exhibition stamps and get a chance to win a drawing for gifts!";

export const EVENT_PRIZES: readonly EventPrize[] = [
  {
    id: "gold",
    rank: "1st",
    captions: [{ name: "24K Pure Gold (3.75g)", quantity: "(1ea)" }],
  },
  {
    id: "earbuds",
    rank: "2nd",
    captions: [
      { name: "APPLE AirPods Pro 3", quantity: "(1ea)" },
      { name: "SAMSUNG Galaxy Buds4 Pro", quantity: "(1ea)" },
    ],
  },
  {
    id: "olive-young",
    rank: "3rd",
    captions: [
      { name: "OLIVE YOUNG Gift Card 100,000 KRW", quantity: "(3ea)" },
    ],
  },
];

export const EVENT_STEPS: readonly EventStep[] = [
  {
    id: "stamp",
    label: "Step 1",
    text: "Collect all the exhibition stamps",
  },
  {
    id: "desk",
    label: "Step 2",
    text: "Submit the completed stamp sheet\nto the registration desk (3F)",
  },
  {
    id: "drawing",
    label: "Step 3",
    text: "Drawing will be held\nat the Closing Ceremony",
    note: "* April 25 (Sat), 11:50-12:10\n@Crystal Ballroom",
  },
  {
    id: "winner",
    label: "Step 4",
    text: "Make it into the lucky top 4!",
    note: "* Winners must be onsite\nto receive the prize.",
  },
];

export const QUIZ_TITLE = "Event 2. On-site Quiz";

export const QUIZ_BODY =
  "Scan the QR code on-site and take a quick quiz about KSERS to win a prize!\nWinners will receive a special gift at the registration desk. (3F)";

export const QUIZ_NOTE =
  "* Please note that prizes can be collected on Saturday, April 25 only.";

export const QUIZ_PRIZE = "STARBUCKS Gift Card (KRW 10,000)";
