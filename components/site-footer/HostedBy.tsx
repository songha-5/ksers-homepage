import Image from "next/image";
import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import hostLogo from "@/images/logo_ksels.png";

const HOST_SITE_URL = "https://ksers.or.kr/v2/";

export function HostedBy(): ReactElement {
  return (
    <section
      aria-label="Hosted by"
      className="border-t border-[#cfd8dc] bg-white py-[30px] min-[768px]:py-10"
    >
      <ContentContainer className="flex flex-col items-center gap-5 min-[768px]:flex-row min-[768px]:gap-0">
        <p className="text-sm font-bold text-[#263238] min-[768px]:w-[120px]">
          Hosted by
        </p>
        <a href={HOST_SITE_URL} target="_blank" rel="noopener noreferrer">
          <Image
            src={hostLogo}
            alt="대한내시경로봇외과학회"
            width={hostLogo.width}
            height={hostLogo.height}
          />
        </a>
      </ContentContainer>
    </section>
  );
}
