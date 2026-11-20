import type { ReactElement } from "react";
import { MasterClassSubmitButton } from "@/components/master-class/MasterClassSubmitButton";
import type {
  MasterClassCourse,
  MasterClassFact,
} from "@/components/master-class/master-class-model";
import {
  SUBPAGE_TABLE_CELL_CLASS_NAME,
  SUBPAGE_TABLE_CLASS_NAME,
} from "@/components/subpage/subpage-table-styles";

interface MasterClassFactsProps {
  readonly facts: readonly MasterClassFact[];
  readonly align: MasterClassCourse["factsAlign"];
}

const LABEL_CLASS_NAME = `${SUBPAGE_TABLE_CELL_CLASS_NAME} w-[36%] font-bold text-[#263238]`;

const LEFT_VALUE_CLASS_NAME =
  "border-b border-[#e4e4e4] px-3 py-4 text-left align-middle break-words";

const CENTER_VALUE_CLASS_NAME =
  "border-b border-[#e4e4e4] px-3 py-4 text-center align-middle break-words";

const DANGER_CLASS_NAME = "text-danger";

export function MasterClassFacts({
  facts,
  align,
}: MasterClassFactsProps): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table
        className={`${SUBPAGE_TABLE_CLASS_NAME} min-w-[720px] border-t border-[#e4e4e4]`}
      >
        <tbody>
          {facts.map((fact) => (
            <tr key={fact.id}>
              <th scope="row" className={LABEL_CLASS_NAME}>
                {fact.label}
              </th>
              <td className={valueClassName(align)}>{renderFactValue(fact)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function valueClassName(align: MasterClassCourse["factsAlign"]): string {
  if (align === "center") {
    return CENTER_VALUE_CLASS_NAME;
  }

  return LEFT_VALUE_CLASS_NAME;
}

function renderFactValue(fact: MasterClassFact): ReactElement {
  switch (fact.kind) {
    case "text":
      return renderText(fact.text, fact.emphasis === "danger");
    case "lines":
      return (
        <span>
          {fact.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      );
    case "submit":
      return (
        <span>
          {fact.text} <MasterClassSubmitButton />
        </span>
      );
    default: {
      const unreachable: never = fact;
      return unreachable;
    }
  }
}

function renderText(text: string, isDanger: boolean): ReactElement {
  if (!isDanger) {
    return <span>{text}</span>;
  }

  return <span className={DANGER_CLASS_NAME}>{text}</span>;
}
