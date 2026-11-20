import type { ReactElement } from "react";
import type { CommitteeTab } from "@/components/committee/committee-model";

interface CommitteeTabButtonProps {
  readonly tab: CommitteeTab;
  readonly isSelected: boolean;
  readonly onSelect: (tabId: string) => void;
}

const TAB_CLASS_NAME =
  "cursor-pointer border-r border-b border-[#e4e4e4] px-2 py-[10px] text-center text-sm font-bold";

const ACTIVE_TAB_CLASS_NAME = "bg-[#09428f] text-white";

const IDLE_TAB_CLASS_NAME =
  "bg-[#f2f4f5] text-[#263238] hover:bg-[#09428f] hover:text-white";

export function CommitteeTabButton({
  tab,
  isSelected,
  onSelect,
}: CommitteeTabButtonProps): ReactElement {
  const toneClassName = isSelected
    ? ACTIVE_TAB_CLASS_NAME
    : IDLE_TAB_CLASS_NAME;

  return (
    <button
      type="button"
      role="tab"
      id={`committee-tab-${tab.id}`}
      aria-selected={isSelected}
      aria-controls={`committee-panel-${tab.id}`}
      className={`${TAB_CLASS_NAME} ${toneClassName}`}
      onClick={() => {
        onSelect(tab.id);
      }}
    >
      {tab.label}
    </button>
  );
}
