import type { ReactElement } from "react";
import {
  type FooterContact,
  type FooterPart,
} from "@/components/site-footer/footer-contacts";

interface FooterContactBlockProps {
  readonly contact: FooterContact;
}

const PART_CLASS_NAME = "block min-[1100px]:mr-2 min-[1100px]:inline-block";

function renderTextLines(lines: readonly string[]): ReactElement[] {
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function renderPart(part: FooterPart): ReactElement {
  switch (part.kind) {
    case "email":
      return (
        <span key={part.id} className={PART_CLASS_NAME}>
          E-mail.{" "}
          <a
            href={`mailto:${part.email}`}
            className="underline-offset-2 hover:underline"
          >
            {part.email}
          </a>
        </span>
      );
    case "text":
      return (
        <span key={part.id} className={PART_CLASS_NAME}>
          {renderTextLines(part.lines)}
        </span>
      );
    default: {
      const unreachable: never = part;
      return unreachable;
    }
  }
}

export function FooterContactBlock({
  contact,
}: FooterContactBlockProps): ReactElement {
  return (
    <div className={contact.className}>
      <h2 className="pb-[5px] font-bold text-white">{contact.title}</h2>
      {contact.parts.map((part) => renderPart(part))}
    </div>
  );
}
