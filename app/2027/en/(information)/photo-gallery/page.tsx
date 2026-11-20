import type { Metadata } from "next";
import type { ReactElement } from "react";
import { GalleryDetails } from "@/components/photo-gallery/GalleryDetails";
import { GALLERY_HEADING } from "@/components/photo-gallery/gallery-content";
import { getGalleryPhotos } from "@/components/photo-gallery/get-gallery";
import {
  readGalleryPage,
  resolveGalleryPage,
} from "@/components/photo-gallery/gallery-pages";

export const metadata: Metadata = {
  title: GALLERY_HEADING,
};

interface PhotoGalleryPageProps {
  readonly searchParams: Promise<{
    readonly page?: string | string[];
  }>;
}

export default async function PhotoGalleryPage({
  searchParams,
}: PhotoGalleryPageProps): Promise<ReactElement> {
  const [params, photos] = await Promise.all([
    searchParams,
    getGalleryPhotos(),
  ]);
  const page = resolveGalleryPage(readGalleryPage(params.page), photos.length);

  return <GalleryDetails page={page} photos={photos} />;
}
