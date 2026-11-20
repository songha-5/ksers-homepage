import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactElement } from "react";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import { RELATED_VISA_SITES } from "@/components/visa-assistance/visa-assistance-content";
import ketaLogo from "@/images/logo_k-eta.png";
import immigrationLogo from "@/images/logo_immigration.png";
import mofaLogo from "@/images/logo_mofa.png";
import visaLogo from "@/images/logo_visa.png";

type VisaSiteId = (typeof RELATED_VISA_SITES)[number]["id"];

const SITE_LOGOS: Record<VisaSiteId, StaticImageData> = {
  mofa: mofaLogo,
  immigration: immigrationLogo,
  "visa-portal": visaLogo,
  "k-eta": ketaLogo,
};

const SITE_LINK_CLASS_NAME =
  "flex h-full w-full flex-col items-center justify-center gap-3 border border-[#e4e4e4] bg-[#f7f9fb] px-4 py-5 text-center";

const SITE_LABEL_CLASS_NAME = "text-sm font-bold text-[#09428f] underline";

export function VisaRelatedSites(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Related Websites" />
      <ul className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[1100px]:grid-cols-4">
        {RELATED_VISA_SITES.map((site) => {
          const logo = SITE_LOGOS[site.id];

          return (
            <li key={site.id} className="flex">
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className={SITE_LINK_CLASS_NAME}
              >
                <Image
                  src={logo}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                />
                <span className={SITE_LABEL_CLASS_NAME}>{site.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
