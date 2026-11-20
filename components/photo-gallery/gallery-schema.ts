import { z } from "zod";

const GALLERY_YEAR_MIN = 2027;
const GALLERY_YEAR_MAX = 2035;

const galleryPhotoRowSchema = z.object({
  id: z.coerce.string().min(1),
  src: z.string().min(1),
  width: z.coerce.number().int().positive(),
  height: z.coerce.number().int().positive(),
  alt: z.string(),
  file_name: z.string().optional(),
  sort_order: z.coerce.number().int().optional(),
});

export const galleryResponseSchema = z.object({
  year: z.coerce.number().int().min(GALLERY_YEAR_MIN).max(GALLERY_YEAR_MAX),
  photos: z.array(galleryPhotoRowSchema),
});

export type GalleryPhotoRow = z.infer<typeof galleryPhotoRowSchema>;
