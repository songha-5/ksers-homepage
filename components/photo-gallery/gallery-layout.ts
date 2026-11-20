import type { RowConstraints } from "react-photo-album";

const SINGLE_ROW = { maxPhotos: 1, singleRowMaxHeight: 520 } as const;
const PAIR_ROW = { maxPhotos: 2, singleRowMaxHeight: 420 } as const;
const MANY_ROW = { maxPhotos: 4, singleRowMaxHeight: 280 } as const;

export function readGalleryTargetRowHeight(photoCount: number): number {
  if (photoCount <= 1) {
    return 480;
  }

  if (photoCount === 2) {
    return 360;
  }

  return 240;
}

export function readGalleryRowConstraints(photoCount: number): RowConstraints {
  if (photoCount <= 1) {
    return SINGLE_ROW;
  }

  if (photoCount === 2) {
    return PAIR_ROW;
  }

  return MANY_ROW;
}
