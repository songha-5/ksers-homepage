import Image from "next/image";
import type { ReactElement } from "react";
import venueImage from "@/images/venue_Lotte_Hotel_Seoul.jpg";

const PHOTO_CLASS_NAME = "h-auto w-full";

export function VenuePhoto(): ReactElement {
  return (
    <>
      {/* 주석: 수정필요. venue_Lotte_Hotel_Seoul.jpg는 실제 장소 사진으로 교체한다. */}
      <Image
      src={venueImage}
      alt="Lotte Hotel Seoul"
      sizes="(min-width: 1100px) 560px, 100vw"
      className={PHOTO_CLASS_NAME}
      priority
    />
    </>
  );
}
