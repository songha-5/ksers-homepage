import Image from "next/image";
import type { ReactElement } from "react";
import posterSizeImage from "@/images/poster_size.jpg";

const IMAGE_CLASS_NAME = "h-auto w-[320px] max-w-full";

export function PresenterGuidelinesPosterSize(): ReactElement {
  return (
    <div className="min-[1100px]:justify-self-end">
      {/* 주석: 수정필요. 포스터 규격이 바뀌면 poster_size.jpg를 교체한다. */}
      <Image
        src={posterSizeImage}
        alt="Poster size guide"
        width={posterSizeImage.width}
        height={posterSizeImage.height}
        unoptimized
        className={IMAGE_CLASS_NAME}
      />
    </div>
  );
}
