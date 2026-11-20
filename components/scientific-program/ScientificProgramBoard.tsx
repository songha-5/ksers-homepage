"use client";

import { useState, type ReactElement } from "react";
import { ScientificProgramMenu } from "@/components/scientific-program/ScientificProgramMenu";
import { ScientificProgramSection } from "@/components/scientific-program/ScientificProgramSection";
import type { ScientificCategory } from "@/components/scientific-program/scientific-program-model";
import { useScientificProgramScroll } from "@/components/scientific-program/use-scientific-program-scroll";

interface ScientificProgramBoardProps {
  readonly categories: readonly ScientificCategory[];
}

export function ScientificProgramBoard({
  categories,
}: ScientificProgramBoardProps): ReactElement {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const selectCategory = useScientificProgramScroll(categories, setActiveId);

  return (
    <>
      <ScientificProgramMenu
        categories={categories}
        activeId={activeId}
        onSelect={selectCategory}
      />
      <div className="mt-10 flex flex-col gap-12">
        {categories.map((category) => (
          <ScientificProgramSection key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
