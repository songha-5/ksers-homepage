"use client";

import type { StaticImageData } from "next/image";
import { useEffect, useState, type ReactElement } from "react";
import { BannerShortcutList } from "@/components/main-banner/BannerShortcutList";
import { BannerSlide } from "@/components/main-banner/BannerSlide";
import {
  BANNER_SHORTCUT_MO_CLASS,
  BANNER_SHORTCUT_PC_CLASS,
} from "@/components/main-banner/banner-shortcuts";
import {
  BANNER_SLIDE_INTERVAL_MS,
  BANNER_SLIDES,
} from "@/components/main-banner/banner-slides";

function useActiveBannerIndex(): {
  readonly activeIndex: number;
  readonly hasSwitched: boolean;
} {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSwitched, setHasSwitched] = useState(false);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setHasSwitched(true);
      setActiveIndex((current) => (current + 1) % BANNER_SLIDES.length);
    }, BANNER_SLIDE_INTERVAL_MS);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return { activeIndex, hasSwitched };
}

function imageAspectRatio(image: StaticImageData): string {
  return `${image.width} / ${image.height}`;
}

export function MainBanner(): ReactElement {
  const { activeIndex, hasSwitched } = useActiveBannerIndex();
  const mobileBanner = BANNER_SLIDES[0].mobileSrc;
  const desktopBanner = BANNER_SLIDES[0].desktopSrc;

  return (
    <>
      <style>{`
        .main-banner-frame { aspect-ratio: ${imageAspectRatio(mobileBanner)}; }
        @media (min-width: 768px) {
          .main-banner-frame { aspect-ratio: ${imageAspectRatio(desktopBanner)}; }
        }
      `}</style>
      <section aria-label="메인 배너" className="relative w-full">
        <div className="min-[1100px]:bg-[#012D6D]">
          <div className="main-banner-frame relative mx-auto w-full overflow-hidden">
            {BANNER_SLIDES.map((slide, index) => (
              <BannerSlide
                key={slide.id}
                slide={slide}
                isActive={index === activeIndex}
                shouldFadeIn={hasSwitched}
              />
            ))}
          </div>
        </div>
        <BannerShortcutList className={BANNER_SHORTCUT_PC_CLASS} />
      </section>
      <BannerShortcutList className={BANNER_SHORTCUT_MO_CLASS} />
    </>
  );
}
