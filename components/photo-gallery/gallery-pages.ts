import type { GalleryPhoto } from "@/components/photo-gallery/gallery-model";

export const GALLERY_PAGE_SIZE = 10;

export const GALLERY_PATH = "/2027/en/photo-gallery";

export function getGalleryPageCount(photoCount: number): number {
  if (photoCount <= 0) {
    return 1;
  }

  return Math.ceil(photoCount / GALLERY_PAGE_SIZE);
}

export function readGalleryPage(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const page = Number(raw);

  if (!Number.isInteger(page) || page < 1) {
    return 1;
  }

  return page;
}

export function resolveGalleryPage(
  rawPage: number,
  photoCount: number,
): number {
  const pageCount = getGalleryPageCount(photoCount);

  if (rawPage > pageCount) {
    return pageCount;
  }

  return rawPage;
}

export function getGalleryPage(
  photos: readonly GalleryPhoto[],
  page: number,
): readonly GalleryPhoto[] {
  const start = (page - 1) * GALLERY_PAGE_SIZE;
  return photos.slice(start, start + GALLERY_PAGE_SIZE);
}

export function getGalleryPageNumbers(pageCount: number): readonly number[] {
  return Array.from({ length: pageCount }, (_, index) => index + 1);
}

export function getGalleryPageHref(pageNumber: number): string {
  if (pageNumber === 1) {
    return GALLERY_PATH;
  }

  return `${GALLERY_PATH}?page=${pageNumber}`;
}
