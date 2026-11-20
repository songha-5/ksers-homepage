import Image from "next/image";
import type { ReactElement } from "react";
import {
  BANNER_FADE_CLASS,
  type MainBannerSlide,
} from "@/components/main-banner/banner-slides";

interface BannerSlideProps {
  readonly slide: MainBannerSlide;
  readonly isActive: boolean;
  readonly shouldFadeIn: boolean;
}

export function BannerSlide({
  slide,
  isActive,
  shouldFadeIn,
}: BannerSlideProps): ReactElement {
  const fadeClass = isActive && shouldFadeIn ? BANNER_FADE_CLASS : "";
  const layerClass = isActive ? "z-10" : "z-0";

  return (
    <div
      className={`absolute w-full inset-0 ${layerClass} ${fadeClass}`}
      aria-hidden={!isActive}
      data-slide-id={slide.id}
      data-active={isActive}
    >
      <Image
        src={slide.mobileSrc}
        alt={slide.alt}
        fill
        loading="eager"
        unoptimized
        className="object-contain object-center min-[768px]:hidden"
      />
      <Image
        src={slide.desktopSrc}
        alt={slide.alt}
        fill
        loading="eager"
        unoptimized
        sizes="(min-width: 768px) 100vw, 1px"
        className="hidden object-contain object-center min-[768px]:block"
      />
    </div>
  );
}
