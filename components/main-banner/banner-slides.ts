import type { StaticImageData } from "next/image";
import main01Desktop from "@/images/visual_main01_t.png";
import main01Mobile from "@/images/visual_main01_m.png";
import main02Desktop from "@/images/visual_main02_t.png";
import main02Mobile from "@/images/visual_main02_m.png";

export interface MainBannerSlide {
  readonly id: string;
  readonly mobileSrc: StaticImageData;
  readonly desktopSrc: StaticImageData;
  readonly alt: string;
}

export const BANNER_SLIDES = [
  {
    id: "main-01",
    mobileSrc: main01Mobile,
    desktopSrc: main01Desktop,
    alt: "KSERS 2027, April 22-24, Lotte Hotel Seoul",
  },
  {
    id: "main-02",
    mobileSrc: main02Mobile,
    desktopSrc: main02Desktop,
    alt: "KSERS 2027, April 22-24, Lotte Hotel Seoul",
  },
] as const satisfies readonly MainBannerSlide[];

export const BANNER_SLIDE_INTERVAL_MS = 9000;
export const BANNER_FADE_CLASS =
  "animate-[banner-fade-in_1s_ease-in-out_both] motion-reduce:animate-none";
