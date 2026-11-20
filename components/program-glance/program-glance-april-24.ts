import {
  createSession,
  createSlot,
  type ProgramSlot,
} from "@/components/program-glance/program-glance-model";
import { scientificSessionHref } from "@/components/scientific-program/scientific-program-model";

export const APR24_SLOTS: readonly ProgramSlot[] = [
  createSlot("apr24-0830", "08:30-10:00", [
    createSession({
      id: "apr24-ps01",
      roomCode: "A",
      columnSpan: 2,
      color: "orange",
      title: "PS01",
      content: "Plenary Oral Session",
      href: scientificSessionHref("ps01"),
    }),
    createSession({
      id: "apr24-sy11",
      roomCode: "C",
      color: "light-blue",
      title: "SY11",
      content: "Symposium 11",
      topic: "Community Hospital 1",
      href: scientificSessionHref("sy11"),
    }),
    createSession({
      id: "apr24-js04",
      roomCode: "D",
      color: "purple",
      title: "JS04",
      content: "KSERS - JSES Joint Symposium",
      href: scientificSessionHref("js04"),
    }),
    createSession({
      id: "apr24-cs03",
      roomCode: "E",
      color: "light-blue",
      title: "CS03",
      content: "Symposium 12",
      topic: "(TBA)",
      href: scientificSessionHref("cs03"),
    }),
  ]),
  createSlot("apr24-1000", "10:00-10:20", [
    createSession({
      id: "apr24-item-1",
      roomCode: "A",
      columnSpan: 5,
      color: "gray",
      content: "Coffee Break (20')",
    }),
  ]),
  createSlot("apr24-1020", "10:20-11:50", [
    createSession({
      id: "apr24-cs04",
      roomCode: "A",
      columnSpan: 2,
      color: "light-blue",
      title: "CS04",
      content: "Co-Symposium 3",
      topic: "(TBA)",
      href: scientificSessionHref("cs04"),
    }),
    createSession({
      id: "apr24-sy12",
      roomCode: "C",
      color: "light-blue",
      title: "SY12",
      content: "Symposium 12",
      topic: "Community Hospital 2",
      href: scientificSessionHref("sy12"),
    }),
    createSession({
      id: "apr24-js05",
      roomCode: "D",
      color: "purple",
      title: "JS05",
      content: "KSERS - PALES Joint Symposium",
      href: scientificSessionHref("js05"),
    }),
    createSession({
      id: "apr24-sy13",
      roomCode: "E",
      color: "light-blue",
      title: "SY13",
      content: "Symposium 13",
      topic: "(TBA)",
      href: scientificSessionHref("sy13"),
    }),
  ]),
  createSlot("apr24-1150", "11:50-12:30", [
    createSession({
      id: "apr24-item-1",
      roomCode: "A",
      columnSpan: 3,
      color: "green",
      content: "Award & Closing Ceremony",
    }),
  ]),
];
