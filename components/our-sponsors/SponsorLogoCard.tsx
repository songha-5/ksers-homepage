import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactElement } from "react";

interface SponsorLogoCardProps {
  readonly name: string;
  readonly href: string;
  readonly image: StaticImageData;
}

const CARD_CLASS_NAME =
  "flex w-full items-center justify-center border border-[#e4e4e4] bg-white px-8 py-6";

export function SponsorLogoCard({
  name,
  href,
  image,
}: SponsorLogoCardProps): ReactElement {
  return (
    <li className="w-full max-w-[349px]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={CARD_CLASS_NAME}
      >
        <Image
          src={image}
          alt={name}
          width={image.width}
          height={image.height}
          unoptimized
          className="h-auto w-full"
        />
      </a>
    </li>
  );
}
