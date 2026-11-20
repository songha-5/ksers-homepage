import type { ReactElement } from "react";
import {
  TransportationTabButton,
  type TransportTabLevel,
} from "@/components/transportation/TransportationTabButton";
import type { TransportChoice } from "@/components/transportation/transportation-model";

interface TransportationTabListProps {
  readonly label: string;
  readonly level: TransportTabLevel;
  readonly tabs: readonly TransportChoice[];
  readonly activeId: string;
  readonly onSelect: (tabId: string) => void;
}

const MAIN_TABLIST_CLASS_NAME =
  "grid grid-cols-1 border-t border-l border-[#e4e4e4]";

const SUB_TABLIST_CLASS_NAME = "flex flex-wrap border-b border-[#e4e4e4]";

function columnClassName(count: number): string {
  if (count >= 3) {
    return "min-[768px]:grid-cols-3";
  }

  return "min-[768px]:grid-cols-2";
}

function listClassName(level: TransportTabLevel, count: number): string {
  switch (level) {
    case "main":
      return `${MAIN_TABLIST_CLASS_NAME} ${columnClassName(count)}`;
    case "sub":
      return SUB_TABLIST_CLASS_NAME;
    default: {
      const unreachable: never = level;
      return unreachable;
    }
  }
}

export function TransportationTabList({
  label,
  level,
  tabs,
  activeId,
  onSelect,
}: TransportationTabListProps): ReactElement {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={listClassName(level, tabs.length)}
    >
      {tabs.map((tab) => (
        <TransportationTabButton
          key={tab.id}
          tabId={tab.id}
          label={tab.label}
          level={level}
          isSelected={tab.id === activeId}
          controlsId={`transport-panel-${tab.id}`}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
