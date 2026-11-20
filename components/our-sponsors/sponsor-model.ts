import type { StaticImageData } from "next/image";
import type { SponsorTierId } from "@/components/our-sponsors/sponsor-tier-styles";

export interface SponsorLogo {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly image: StaticImageData;
}

export interface SponsorTier {
  readonly id: SponsorTierId;
  readonly title: string;
  readonly sponsors: readonly SponsorLogo[];
}
