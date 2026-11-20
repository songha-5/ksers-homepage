"use client";

import type { ReactElement } from "react";
import Lightbox from "yet-another-react-lightbox";
import type { GalleryPhoto } from "@/components/photo-gallery/gallery-model";
import "yet-another-react-lightbox/styles.css";

interface GalleryLightboxProps {
  readonly photos: readonly GalleryPhoto[];
  readonly activeIndex: number;
  readonly onClose: () => void;
}

export function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
}: GalleryLightboxProps): ReactElement {
  return (
    <Lightbox
      open={activeIndex >= 0}
      close={onClose}
      index={Math.max(activeIndex, 0)}
      slides={photos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        width: photo.width,
        height: photo.height,
      }))}
    />
  );
}
