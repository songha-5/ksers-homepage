import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactElement } from "react";
import type { SocialProgramImageId } from "@/components/social-program/social-program-content";
import awardImage from "@/images/social_img04.jpg";
import dinnerImage from "@/images/social_img02.jpg";
import galaImage from "@/images/social_img3.png";
import openingImage from "@/images/social_img1.jpg";

interface SocialProgramPhotoProps {
  readonly imageId: SocialProgramImageId;
  readonly alt: string;
}

const SOCIAL_PROGRAM_IMAGES: Record<SocialProgramImageId, StaticImageData> = {
  opening: openingImage,
  dinner: dinnerImage,
  gala: galaImage,
  award: awardImage,
};

const IMAGE_CLASS_NAME = "h-auto w-full";

export function SocialProgramPhoto({
  imageId,
  alt,
}: SocialProgramPhotoProps): ReactElement {
  const image = SOCIAL_PROGRAM_IMAGES[imageId];

  return (
    <Image
      src={image}
      alt={alt}
      width={image.width}
      height={image.height}
      unoptimized
      className={IMAGE_CLASS_NAME}
    />
  );
}
