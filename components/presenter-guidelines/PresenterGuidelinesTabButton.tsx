import type { ReactElement } from "react";
import type { PresenterGuidelineTabId } from "@/components/presenter-guidelines/presenter-guidelines-content";

interface PresenterGuidelinesTabButtonProps {
  readonly tabId: PresenterGuidelineTabId;
  readonly label: string;
  readonly isSelected: boolean;
  readonly onSelect: (tabId: PresenterGuidelineTabId) => void;
}

const TAB_CLASS_NAME =
  "cursor-pointer border-r border-b border-[#e4e4e4] px-2 py-[10px] text-center text-sm font-bold";

const ACTIVE_TAB_CLASS_NAME = "bg-[#09428f] text-white";

const IDLE_TAB_CLASS_NAME =
  "bg-[#f2f4f5] text-[#263238] hover:bg-[#09428f] hover:text-white";

export function PresenterGuidelinesTabButton({
  tabId,
  label,
  isSelected,
  onSelect,
}: PresenterGuidelinesTabButtonProps): ReactElement {
  const toneClassName = isSelected
    ? ACTIVE_TAB_CLASS_NAME
    : IDLE_TAB_CLASS_NAME;

  return (
    <button
      type="button"
      role="tab"
      id={`presenter-tab-${tabId}`}
      aria-selected={isSelected}
      aria-controls={`presenter-panel-${tabId}`}
      className={`${TAB_CLASS_NAME} ${toneClassName}`}
      onClick={() => {
        onSelect(tabId);
      }}
    >
      {label}
    </button>
  );
}
