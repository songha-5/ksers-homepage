/**
 * Scientific Program 화면 데이터다.
 * 탭은 분류이고, 세션은 그 분류 아래에 쌓인다.
 * 세션 id가 주소의 #앵커다. glanceId는 시간표 칸 하나와 연결되고, Glance href는 세션 앵커로 닿는다.
 */

export interface ScientificSpeaker {
  readonly id: string;
  readonly badge: string | null;
  readonly talkTitle: string;
  readonly name: string;
  readonly affiliation: string | null;
  readonly description: string | null;
  readonly imageUrl: string | null;
  readonly cvUrl: string | null;
  readonly abstractUrl: string | null;
}

export const FREE_PAPER_CATEGORY_ID = "free-paper";

export interface ScientificSession {
  readonly id: string;
  readonly title: string;
  readonly dateTime: string | null;
  readonly language: string | null;
  readonly glanceId: string | null;
  readonly chairs: readonly string[];
  readonly speakers: readonly ScientificSpeaker[];
}

export interface ScientificCategory {
  readonly id: string;
  readonly label: string;
  readonly sessions: readonly ScientificSession[];
}

export interface ScientificProgramPage {
  readonly heading: string;
  readonly categories: readonly ScientificCategory[];
}

interface ScientificSpeakerInput {
  readonly id: string;
  readonly badge?: string | null;
  readonly talkTitle: string;
  readonly name: string;
  readonly affiliation?: string | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly cvUrl?: string | null;
  readonly abstractUrl?: string | null;
}

interface ScientificSessionInput {
  readonly id: string;
  readonly title: string;
  readonly dateTime?: string | null;
  readonly language?: string | null;
  readonly glanceId?: string | null;
  readonly chairs?: readonly string[];
  readonly speakers?: readonly ScientificSpeaker[];
}

export function createSpeaker(
  input: ScientificSpeakerInput,
): ScientificSpeaker {
  return {
    id: input.id,
    badge: input.badge ?? null,
    talkTitle: input.talkTitle,
    name: input.name,
    affiliation: input.affiliation ?? null,
    description: input.description ?? null,
    imageUrl: input.imageUrl ?? null,
    cvUrl: input.cvUrl ?? null,
    abstractUrl: input.abstractUrl ?? null,
  };
}

export function createSession(
  input: ScientificSessionInput,
): ScientificSession {
  return {
    id: input.id,
    title: input.title,
    dateTime: input.dateTime ?? null,
    language: input.language ?? null,
    glanceId: input.glanceId ?? null,
    chairs: input.chairs ?? [],
    speakers: input.speakers ?? [],
  };
}

/** 대분류 섹션 id다. 세션 id와 겹치지 않게 접두사를 붙인다. */
export function scientificCategoryElementId(categoryId: string): string {
  return `category-${categoryId}`;
}

/** Glance 등에서 세션으로 바로 이동할 때 저장하는 주소다. */
export function scientificSessionHref(anchor: string): string {
  return `/2027/en/scientific-program#${anchor}`;
}
