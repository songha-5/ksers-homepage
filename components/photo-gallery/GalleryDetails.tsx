import type { ReactElement } from "react";
import { GalleryAlbum } from "@/components/photo-gallery/GalleryAlbum";
import { GalleryEmpty } from "@/components/photo-gallery/GalleryEmpty";
import { GalleryPagination } from "@/components/photo-gallery/GalleryPagination";
import { GALLERY_HEADING } from "@/components/photo-gallery/gallery-content";
import type { GalleryPhoto } from "@/components/photo-gallery/gallery-model";
import {
  getGalleryPage,
  getGalleryPageCount,
  resolveGalleryPage,
} from "@/components/photo-gallery/gallery-pages";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";

interface GalleryDetailsProps {
  readonly page: number;
  readonly photos: readonly GalleryPhoto[];
}

export function GalleryDetails({
  page,
  photos,
}: GalleryDetailsProps): ReactElement {
  if (photos.length === 0) {
    return (
      <SubpageFrame title={GALLERY_HEADING}>
        <GalleryEmpty />
      </SubpageFrame>
    );
  }

  const resolvedPage = resolveGalleryPage(page, photos.length);

  return (
    <SubpageFrame title={GALLERY_HEADING}>
      <GalleryAlbum photos={getGalleryPage(photos, resolvedPage)} />
      <GalleryPagination
        page={resolvedPage}
        pageCount={getGalleryPageCount(photos.length)}
      />
    </SubpageFrame>
  );
}
