import type { ReactElement } from "react";

export type TransportTabLevel = "main" | "sub";

interface TransportationTabButtonProps {
  readonly tabId: string;
  readonly label: string;
  readonly level: TransportTabLevel;
  readonly isSelected: boolean;
  readonly controlsId: string;
  readonly onSelect: (tabId: string) => void;
}

const MAIN_TAB_CLASS_NAME =
  "cursor-pointer border-r border-b border-[#e4e4e4] px-2 py-[10px] text-center text-sm font-bold";

const MAIN_ACTIVE_CLASS_NAME = "bg-[#09428f] text-white";

const MAIN_IDLE_CLASS_NAME =
  "bg-[#f2f4f5] text-[#263238] hover:bg-[#09428f] hover:text-white";

const SUB_TAB_CLASS_NAME =
  "-mb-px cursor-pointer border-b-2 px-4 py-2 text-sm font-bold";

const SUB_ACTIVE_CLASS_NAME = "border-[#09428f] text-[#09428f]";

const SUB_IDLE_CLASS_NAME =
  "border-transparent text-[#8a8a8a] hover:text-[#09428f]";

function tabClassName(level: TransportTabLevel, isSelected: boolean): string {
  switch (level) {
    case "main":
      return `${MAIN_TAB_CLASS_NAME} ${isSelected ? MAIN_ACTIVE_CLASS_NAME : MAIN_IDLE_CLASS_NAME}`;
    case "sub":
      return `${SUB_TAB_CLASS_NAME} ${isSelected ? SUB_ACTIVE_CLASS_NAME : SUB_IDLE_CLASS_NAME}`;
    default: {
      const unreachable: never = level;
      return unreachable;
    }
  }
}

export function TransportationTabButton({
  tabId,
  label,
  level,
  isSelected,
  controlsId,
  onSelect,
}: TransportationTabButtonProps): ReactElement {
  return (
    <button
      type="button"
      role="tab"
      id={`transport-tab-${tabId}`}
      aria-selected={isSelected}
      aria-controls={controlsId}
      className={tabClassName(level, isSelected)}
      onClick={() => {
        onSelect(tabId);
      }}
    >
      {label}
    </button>
  );
}
