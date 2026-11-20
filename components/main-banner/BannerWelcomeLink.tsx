import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import welcomeButton from "@/images/visual_main01_btn.png";
import { WELCOME_LINK } from "@/components/main-banner/banner-shortcuts";

/**
 * 날짜 박스 바로 아래에 둔다.
 * PC 원본(3440×870)에서 박스 중심은 이미지 중앙보다 62px 오른쪽, 하단은 517px다.
 * 태블릿은 그 그림을 높이 400으로 줄인 비율이다.
 * 모바일 원본(1200×560)에서 문구 중심은 너비의 56.7%, 박스 하단은 높이의 58.6%다.
 */
const WELCOME_POSITION_CLASS =
  "absolute z-30 w-[168px] -translate-x-1/2 left-[56.7%] top-[calc(58.6%+10px)] min-[768px]:left-[calc(50%+29px)] min-[768px]:top-auto min-[768px]:bottom-[102px] min-[768px]:w-[180px] min-[1100px]:left-[calc(50%+62px)] min-[1100px]:bottom-[276px] min-[1100px]:w-[230px]";

export function BannerWelcomeLink(): ReactElement {
  return (
    <Link href={WELCOME_LINK.href} className={WELCOME_POSITION_CLASS}>
      <Image
        src={welcomeButton}
        alt={WELCOME_LINK.label}
        width={255}
        height={65}
        className="h-auto w-full"
      />
    </Link>
  );
}
