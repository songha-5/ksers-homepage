import type { ReactElement } from "react";
import type { WelcomeParagraphContent } from "@/components/welcome-message/welcome-content";

interface WelcomeParagraphProps {
  readonly paragraph: WelcomeParagraphContent;
}

type WelcomeTextPart = WelcomeParagraphContent["parts"][number];

function renderPart(part: WelcomeTextPart): ReactElement {
  switch (part.kind) {
    case "strong":
      return (
        <strong key={part.id} className="font-bold text-[#263238]">
          {part.text}
        </strong>
      );
    case "text":
      return <span key={part.id}>{part.text}</span>;
    default: {
      const unreachable: never = part;
      return unreachable;
    }
  }
}

export function WelcomeParagraph({
  paragraph,
}: WelcomeParagraphProps): ReactElement {
  return <p>{paragraph.parts.map((part) => renderPart(part))}</p>;
}
