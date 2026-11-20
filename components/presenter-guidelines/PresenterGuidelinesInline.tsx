import Link from "next/link";
import type { ReactElement } from "react";
import { SubpageSecondaryLink } from "@/components/subpage/SubpageSecondaryLink";
import {
  PRESENTER_EMPHASIS_CLASS_NAME,
  VISA_ASSISTANCE_HREF,
} from "@/components/presenter-guidelines/presenter-guidelines-content";
import type { PresenterInline } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesInlineProps {
  readonly part: PresenterInline;
}

const LINK_CLASS_NAME = "font-bold text-[#09428f] underline";

export function PresenterGuidelinesInline({
  part,
}: PresenterGuidelinesInlineProps): ReactElement {
  switch (part.kind) {
    case "text":
      return renderText(part.text, part.emphasis === true);
    case "visa":
      return (
        <Link href={VISA_ASSISTANCE_HREF} className={LINK_CLASS_NAME}>
          {part.label}
        </Link>
      );
    case "download":
      return (
        <SubpageSecondaryLink
          kind="download"
          href={part.href}
          fileName={part.fileName}
        >
          Click
        </SubpageSecondaryLink>
      );
    case "open":
      return (
        <SubpageSecondaryLink kind="blank" href={part.href}>
          Click
        </SubpageSecondaryLink>
      );
    default: {
      const unreachable: never = part;
      return unreachable;
    }
  }
}

function renderText(text: string, emphasis: boolean): ReactElement {
  if (!emphasis) {
    return <span>{text}</span>;
  }

  return <strong className={PRESENTER_EMPHASIS_CLASS_NAME}>{text}</strong>;
}
