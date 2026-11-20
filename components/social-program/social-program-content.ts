export const SOCIAL_PROGRAM_HEADING = "Social Program";

export const SOCIAL_PROGRAM_LEAD =
  "Celebrate, Connect, and Cherish — Together at KSERS 2026.";

export const SOCIAL_PROGRAM_SUMMARY =
  "Discover special events that make this 30th anniversary truly memorable.";

export const SOCIAL_PROGRAM_IMAGE_IDS = [
  "opening",
  "dinner",
  "gala",
  "award",
] as const;

export type SocialProgramImageId = (typeof SOCIAL_PROGRAM_IMAGE_IDS)[number];

export interface SocialProgramEvent {
  readonly id: string;
  readonly title: string;
  readonly note: string | null;
  readonly time: string;
  readonly place: string;
  readonly price: string | null;
  readonly imageId: SocialProgramImageId;
  readonly imageAlt: string;
}

export interface SocialProgramDay {
  readonly id: string;
  readonly date: string;
  readonly weekday: string;
  readonly events: readonly SocialProgramEvent[];
}

export const SOCIAL_PROGRAM_DAYS: readonly SocialProgramDay[] = [
  {
    id: "apr-23",
    date: "April 23",
    weekday: "Thu",
    events: [
      {
        id: "opening",
        title: "Opening Ceremony & KSERS 30th Year Anniversary Ceremony",
        note: null,
        time: "10:50-11:30",
        place: "Room A+B+C",
        price: null,
        imageId: "opening",
        imageAlt: "Opening ceremony performance",
      },
      {
        id: "presidential-dinner",
        title: "Presidential Dinner",
        note: "By Invitation Only",
        time: "19:00",
        place: "Samcheonggak",
        price: null,
        imageId: "dinner",
        imageAlt: "Presidential dinner reception",
      },
    ],
  },
  {
    id: "apr-24",
    date: "April 24",
    weekday: "Fri",
    events: [
      {
        id: "gala",
        title: "Gala Dinner",
        note: "For Registered Participants Only",
        time: "19:00",
        place: "Room A+B",
        price: "Ticket Price: KRW 70,000/ USD 70",
        imageId: "gala",
        imageAlt: "Gala dinner performance",
      },
    ],
  },
  {
    id: "apr-25",
    date: "April 25",
    weekday: "Sat",
    events: [
      {
        id: "award",
        title: "Award Ceremony & Lucky Draw",
        note: null,
        time: "11:50-12:30",
        place: "Room A+B+C",
        price: null,
        imageId: "award",
        imageAlt: "Award ceremony audience",
      },
    ],
  },
];
