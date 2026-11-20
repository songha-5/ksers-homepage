"use client";

import { useState, type ReactElement } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import { GalleryEmpty } from "@/components/photo-gallery/GalleryEmpty";
import { GalleryLightbox } from "@/components/photo-gallery/GalleryLightbox";
import {
  readGalleryRowConstraints,
  readGalleryTargetRowHeight,
} from "@/components/photo-gallery/gallery-layout";
import type { GalleryPhoto } from "@/components/photo-gallery/gallery-model";
import "react-photo-album/rows.css";

interface GalleryAlbumProps {
  readonly photos: readonly GalleryPhoto[];
}

export function GalleryAlbum({ photos }: GalleryAlbumProps): ReactElement {
  const [activeIndex, setActiveIndex] = useState(-1);
  if (photos.length === 0) {
    return <GalleryEmpty />;
  }

  return (
    <>
      <div className="[&_.react-photo-album--track]:justify-center">
        <RowsPhotoAlbum
          photos={photos}
          spacing={12}
          padding={0}
          defaultContainerWidth={1152}
          targetRowHeight={readGalleryTargetRowHeight(photos.length)}
          rowConstraints={readGalleryRowConstraints(photos.length)}
          onClick={({ index }) => setActiveIndex(index)}
          componentsProps={ALBUM_PROPS}
        />
      </div>
      <GalleryLightbox
        photos={photos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(-1)}
      />
    </>
  );
}

const ALBUM_PROPS = {
  image: { className: "rounded-md" },
  button: {
    className:
      "rounded-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09428F]",
  },
} as const;
