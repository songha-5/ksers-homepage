"use client";

import { useState, type ReactElement } from "react";
import { CommitteeTabButton } from "@/components/committee/CommitteeTabButton";
import { CommitteeTable } from "@/components/committee/CommitteeTable";
import type { CommitteeTab } from "@/components/committee/committee-model";

interface CommitteeTabsProps {
  readonly tabs: readonly CommitteeTab[];
}

const TABLIST_CLASS_NAME =
  "grid grid-cols-1 border-t border-l border-[#e4e4e4] min-[768px]:grid-cols-2";

function findActiveTab(
  tabs: readonly CommitteeTab[],
  activeTabId: string,
): CommitteeTab | undefined {
  return tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
}

export function CommitteeTabs({
  tabs,
}: CommitteeTabsProps): ReactElement | null {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id ?? "");
  const activeTab = findActiveTab(tabs, activeTabId);

  if (!activeTab) {
    return null;
  }

  return (
    <div>
      <div role="tablist" aria-label="Committee" className={TABLIST_CLASS_NAME}>
        {tabs.map((tab) => (
          <CommitteeTabButton
            key={tab.id}
            tab={tab}
            isSelected={tab.id === activeTab.id}
            onSelect={setActiveTabId}
          />
        ))}
      </div>
      <div
        role="tabpanel"
        id={`committee-panel-${activeTab.id}`}
        aria-labelledby={`committee-tab-${activeTab.id}`}
        className="mt-5"
      >
        <CommitteeTable tab={activeTab} />
      </div>
    </div>
  );
}
