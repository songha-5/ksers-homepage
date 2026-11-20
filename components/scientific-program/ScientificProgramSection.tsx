import type { ReactElement } from "react";
import { ScientificProgramSession } from "@/components/scientific-program/ScientificProgramSession";
import {
  scientificCategoryElementId,
  type ScientificCategory,
} from "@/components/scientific-program/scientific-program-model";

interface ScientificProgramSectionProps {
  readonly category: ScientificCategory;
}

const TITLE_CLASS_NAME = "text-xl font-bold text-[#1565c0]";

export function ScientificProgramSection({
  category,
}: ScientificProgramSectionProps): ReactElement {
  return (
    <section
      id={scientificCategoryElementId(category.id)}
      className="scroll-mt-24 min-[1100px]:scroll-mt-36"
    >
      {category.sessions.length === 0 ? (
        <h2 className={TITLE_CLASS_NAME}>{category.label}</h2>
      ) : (
        <div className="flex flex-col gap-10">
          {category.sessions.map((session) => (
            <ScientificProgramSession key={session.id} session={session} />
          ))}
        </div>
      )}
    </section>
  );
}
