import type { ReactElement } from "react";
import { ExternalTextLink } from "@/components/abstract-submission/ExternalTextLink";
import type { HandsOnFact } from "@/components/endoscopy-hands-on/endoscopy-hands-on-content";

interface EndoscopyHandsOnFactsProps {
  readonly facts: readonly HandsOnFact[];
}

const LABEL_CLASS_NAME = "font-bold text-[#263238]";

export function EndoscopyHandsOnFacts({
  facts,
}: EndoscopyHandsOnFactsProps): ReactElement {
  return (
    <ul className="flex flex-col gap-2">
      {facts.map((fact) => (
        <li key={fact.id} className="pl-3">
          <span className={LABEL_CLASS_NAME}>{fact.label}: </span>
          {renderFactValue(fact)}
        </li>
      ))}
    </ul>
  );
}

function renderFactValue(fact: HandsOnFact): ReactElement {
  if (!fact.href) {
    return <span>{fact.text}</span>;
  }

  return <ExternalTextLink href={fact.href}>{fact.text}</ExternalTextLink>;
}
