import type { StaticImageData } from "next/image";

interface TransportHeadingBlock {
  readonly kind: "heading";
  readonly id: string;
  readonly title: string;
}

interface TransportTableBlock {
  readonly kind: "table";
  readonly id: string;
  readonly columns: readonly string[];
  readonly rows: readonly (readonly string[])[];
}

interface TransportNoteBlock {
  readonly kind: "note";
  readonly id: string;
  readonly text: string;
}

interface TransportLinkBlock {
  readonly kind: "link";
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

interface TransportImageBlock {
  readonly kind: "image";
  readonly id: string;
  readonly src: StaticImageData;
  readonly alt: string;
}

export type TransportBlock =
  | TransportHeadingBlock
  | TransportTableBlock
  | TransportNoteBlock
  | TransportLinkBlock
  | TransportImageBlock;

export interface TransportMode {
  readonly id: string;
  readonly label: string;
  readonly blocks: readonly TransportBlock[];
}

export interface TransportAirport {
  readonly id: string;
  readonly label: string;
  readonly moreInfoHref: string;
  readonly modes: readonly TransportMode[];
}

export interface TransportChoice {
  readonly id: string;
  readonly label: string;
}
