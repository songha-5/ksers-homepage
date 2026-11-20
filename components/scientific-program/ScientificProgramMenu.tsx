"use client";

import type { ReactElement } from "react";
import {
  scientificCategoryElementId,
  type ScientificCategory,
} from "@/components/scientific-program/scientific-program-model";

interface ScientificProgramMenuProps {
  readonly categories: readonly ScientificCategory[];
  readonly activeId: string;
  readonly onSelect: (categoryId: string) => void;
}

const TAB_CLASS_NAME =
  "cursor-pointer border-r border-b border-[#e4e4e4] px-3 py-3 text-center text-sm font-bold";

const ACTIVE_TAB_CLASS_NAME = "bg-[#09428f] text-white";

const IDLE_TAB_CLASS_NAME =
  "bg-[#f2f4f5] text-[#263238] hover:bg-[#09428f] hover:text-white";

export function ScientificProgramMenu({
  categories,
  activeId,
  onSelect,
}: ScientificProgramMenuProps): ReactElement {
  return (
    <nav
      aria-label="Scientific program categories"
      className="grid grid-cols-1 border-t border-l border-[#e4e4e4] min-[768px]:grid-cols-3"
    >
      {categories.map((category) => {
        const isSelected = category.id === activeId;
        const toneClassName = isSelected
          ? ACTIVE_TAB_CLASS_NAME
          : IDLE_TAB_CLASS_NAME;

        return (
          <a
            key={category.id}
            href={`#${scientificCategoryElementId(category.id)}`}
            aria-current={isSelected ? "true" : undefined}
            className={`${TAB_CLASS_NAME} ${toneClassName}`}
            onClick={(event) => {
              event.preventDefault();
              onSelect(category.id);
            }}
          >
            {category.label}
          </a>
        );
      })}
    </nav>
  );
}
