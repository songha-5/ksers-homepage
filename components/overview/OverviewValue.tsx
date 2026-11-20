import type { ReactElement } from "react";
import type {
  OverviewLine,
  OverviewPart,
} from "@/components/overview/overview-content";

interface OverviewValueProps {
  readonly lines: readonly OverviewLine[];
}

function renderOverviewPart(part: OverviewPart): ReactElement {
  switch (part.kind) {
    case "link":
      return (
        <a
          key={part.id}
          href={part.href}
          className="underline hover:text-[#5c3a90]"
        >
          {part.text}
        </a>
      );
    case "text":
      if (part.isEmphasized) {
        return (
          <strong key={part.id} className="font-bold">
            {part.text}
          </strong>
        );
      }
      return <span key={part.id}>{part.text}</span>;
    default: {
      const unreachable: never = part;
      return unreachable;
    }
  }
}

export function OverviewValue({ lines }: OverviewValueProps): ReactElement {
  return (
    <>
      {lines.map((line) => (
        <span key={line.id} className="block">
          {line.parts.map((part) => renderOverviewPart(part))}
        </span>
      ))}
    </>
  );
}
