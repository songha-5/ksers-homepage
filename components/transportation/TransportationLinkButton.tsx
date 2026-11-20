import type { ReactElement } from "react";
import { SUBPAGE_PRIMARY_BUTTON_CLASS_NAME } from "@/components/subpage/SubpagePrimaryButton";

type TransportationLinkTone = "fill" | "outline";

interface TransportationLinkButtonProps {
  readonly href: string;
  readonly label: string;
  readonly tone: TransportationLinkTone;
}

const OUTLINE_BUTTON_CLASS_NAME =
  "inline-flex items-center justify-center border border-[#09428f] bg-white px-8 py-3 text-base font-bold text-[#09428f] hover:bg-[#09428f] hover:text-white";

function buttonClassName(tone: TransportationLinkTone): string {
  switch (tone) {
    case "fill":
      return SUBPAGE_PRIMARY_BUTTON_CLASS_NAME;
    case "outline":
      return OUTLINE_BUTTON_CLASS_NAME;
    default: {
      const unreachable: never = tone;
      return unreachable;
    }
  }
}

function rowClassName(tone: TransportationLinkTone): string {
  switch (tone) {
    case "fill":
      return "mt-4 text-center";
    case "outline":
      return "mt-4 flex justify-end";
    default: {
      const unreachable: never = tone;
      return unreachable;
    }
  }
}

export function TransportationLinkButton({
  href,
  label,
  tone,
}: TransportationLinkButtonProps): ReactElement {
  return (
    <p className={rowClassName(tone)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName(tone)}
      >
        {label}
      </a>
    </p>
  );
}
