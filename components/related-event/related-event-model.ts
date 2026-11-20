import type { StaticImageData } from "next/image";

/**
 * Related Event 카드 한 장이다.
 * text는 제목·일정·장소, link는 홈페이지와 초록 접수처럼 주소가 보이는 항목이다.
 */
interface RelatedEventTextField {
  readonly id: string;
  readonly kind: "text";
  readonly label: string;
  readonly value: string;
  readonly isAccent: boolean;
}

interface RelatedEventLinkField {
  readonly id: string;
  readonly kind: "link";
  readonly label: string;
  readonly href: string;
}

export type RelatedEventField = RelatedEventTextField | RelatedEventLinkField;

export interface RelatedEventEntry {
  readonly id: string;
  readonly image: StaticImageData;
  readonly imageAlt: string;
  readonly fields: readonly RelatedEventField[];
}

export function createAccentField(
  id: string,
  label: string,
  value: string,
): RelatedEventTextField {
  return { id, kind: "text", label, value, isAccent: true };
}

export function createPlainField(
  id: string,
  label: string,
  value: string,
): RelatedEventTextField {
  return { id, kind: "text", label, value, isAccent: false };
}

export function createLinkField(
  id: string,
  label: string,
  href: string,
): RelatedEventLinkField {
  return { id, kind: "link", label, href };
}
