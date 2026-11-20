import type { ReactElement } from "react";
import type { SponsorLogo } from "@/components/our-sponsors/our-sponsors-content";
import { SponsorLogoCard } from "@/components/our-sponsors/SponsorLogoCard";
import {
  SPONSOR_TIER_ACCENT_CLASS_NAME,
  type SponsorTierId,
} from "@/components/our-sponsors/sponsor-tier-styles";

interface SponsorTierProps {
  readonly id: SponsorTierId;
  readonly title: string;
  readonly sponsors: readonly SponsorLogo[];
}

const TITLE_CLASS_NAME =
  "flex items-center gap-3 font-(family-name:--font-roboto) text-xl leading-[1.4] font-bold text-[#263238] min-[1100px]:text-2xl";

export function SponsorTier({
  id,
  title,
  sponsors,
}: SponsorTierProps): ReactElement | null {
  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className={TITLE_CLASS_NAME}>
        <span
          aria-hidden
          className={`h-5 w-1 shrink-0 ${SPONSOR_TIER_ACCENT_CLASS_NAME[id]}`}
        />
        {title}
      </h2>
      <ul className="mt-4 flex flex-wrap items-center gap-4">
        {sponsors.map((sponsor) => (
          <SponsorLogoCard
            key={sponsor.id}
            name={sponsor.name}
            href={sponsor.href}
            image={sponsor.image}
          />
        ))}
      </ul>
    </section>
  );
}
