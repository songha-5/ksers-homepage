import { LOCAL_SCIENTIFIC_PROGRAM } from "@/components/scientific-program/scientific-program-content";
import {
  FREE_PAPER_CATEGORY_ID,
  type ScientificCategory,
  type ScientificProgramPage,
  type ScientificSession,
  type ScientificSpeaker,
} from "@/components/scientific-program/scientific-program-model";
import type {
  ScientificCategoryRow,
  ScientificSessionRow,
  ScientificSpeakerRow,
} from "@/components/scientific-program/scientific-program-schema";

function bySortOrder<TItem extends { readonly sort_order: number }>(
  left: TItem,
  right: TItem,
): number {
  return left.sort_order - right.sort_order;
}

function byCategoryOrder(
  left: ScientificCategoryRow,
  right: ScientificCategoryRow,
): number {
  if (left.id === FREE_PAPER_CATEGORY_ID) {
    return 1;
  }
  if (right.id === FREE_PAPER_CATEGORY_ID) {
    return -1;
  }
  return left.sort_order - right.sort_order;
}

function mapSpeaker(row: ScientificSpeakerRow): ScientificSpeaker {
  return {
    id: row.id,
    badge: row.badge,
    talkTitle: row.talk_title,
    name: row.name,
    affiliation: row.affiliation,
    description: row.description,
    imageUrl: row.image_url,
    cvUrl: row.cv_url,
    abstractUrl: row.abstract_url,
  };
}

function mapSession(row: ScientificSessionRow): ScientificSession {
  const chairs = [...row.chairs].sort(bySortOrder).map((chair) => chair.name);
  const speakers = [...row.speakers].sort(bySortOrder).map(mapSpeaker);

  return {
    id: row.id,
    title: row.title,
    dateTime: row.date_time,
    language: row.language,
    glanceId: row.glance_id,
    chairs,
    speakers,
  };
}

function mapCategory(row: ScientificCategoryRow): ScientificCategory {
  const sessions = [...row.sessions].sort(bySortOrder).map(mapSession);
  return { id: row.id, label: row.label, sessions };
}

/** 2027 카테고리를 탭으로 묶는다. free-paper는 항상 마지막이다. 탭이 없으면 null이다. */
export function assembleScientificProgram(
  categories: readonly ScientificCategoryRow[],
): ScientificProgramPage | null {
  if (categories.length === 0) {
    return null;
  }

  return {
    heading: LOCAL_SCIENTIFIC_PROGRAM.heading,
    categories: [...categories].sort(byCategoryOrder).map(mapCategory),
  };
}
