import { readRegistrationBase } from "@/config/env";
import { buildGalleryUrl } from "@/config/registration-service";
import { readGalleryImageUrl } from "@/components/photo-gallery/gallery-image-url";
import type { GalleryPhoto } from "@/components/photo-gallery/gallery-model";
import {
  galleryResponseSchema,
  type GalleryPhotoRow,
} from "@/components/photo-gallery/gallery-schema";

const GALLERY_YEAR = 2027;
const REQUEST_TIMEOUT_MS = 8_000;

async function requestGallery(url: string): Promise<unknown | null> {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as unknown;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return null;
    }

    return null;
  }
}

async function fetchGalleryPayload(url: string): Promise<unknown | null> {
  const first = await requestGallery(url);
  if (first !== null) {
    return first;
  }

  return requestGallery(url);
}

function readGalleryAlt(row: GalleryPhotoRow): string {
  const alt = row.alt.trim();
  if (alt.length > 0) {
    return alt;
  }

  return row.file_name?.trim() ?? "";
}

function compareGalleryRows(
  left: GalleryPhotoRow,
  right: GalleryPhotoRow,
): number {
  const leftOrder = left.sort_order ?? Number.MAX_SAFE_INTEGER;
  const rightOrder = right.sort_order ?? Number.MAX_SAFE_INTEGER;
  return leftOrder - rightOrder;
}

function toGalleryPhoto(
  row: GalleryPhotoRow,
  base: string,
): GalleryPhoto | null {
  const src = readGalleryImageUrl(row.src, base);
  if (!src) {
    return null;
  }

  return {
    id: row.id,
    src,
    width: row.width,
    height: row.height,
    alt: readGalleryAlt(row),
  };
}

function photosFromPayload(
  payload: unknown,
  base: string,
): readonly GalleryPhoto[] | null {
  const parsed = galleryResponseSchema.safeParse(payload);
  if (!parsed.success || parsed.data.year !== GALLERY_YEAR) {
    return null;
  }

  return [...parsed.data.photos].sort(compareGalleryRows).flatMap((row) => {
    const photo = toGalleryPhoto(row, base);
    return photo ? [photo] : [];
  });
}

async function readGalleryPhotos(): Promise<readonly GalleryPhoto[]> {
  const base = readRegistrationBase();
  if (!base) {
    return [];
  }

  const url = buildGalleryUrl(base, GALLERY_YEAR);
  if (!url) {
    return [];
  }

  const payload = await fetchGalleryPayload(url);
  if (!payload) {
    return [];
  }

  return photosFromPayload(payload, base) ?? [];
}

/** 등록 서버의 2027 갤러리를 읽는다. 없거나 사진이 없으면 빈 목록이다. */
export async function getGalleryPhotos(): Promise<readonly GalleryPhoto[]> {
  try {
    return await readGalleryPhotos();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return [];
    }

    return [];
  }
}
