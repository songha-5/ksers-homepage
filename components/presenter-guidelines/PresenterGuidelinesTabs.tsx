"use client";

import { useState, type ReactElement } from "react";
import { PresenterGuidelinesTabButton } from "@/components/presenter-guidelines/PresenterGuidelinesTabButton";
import {
  PRESENTER_GUIDELINE_TABS,
  type PresenterGuidelineTabId,
} from "@/components/presenter-guidelines/presenter-guidelines-content";
import { renderPresenterPanel } from "@/components/presenter-guidelines/render-presenter-panel";

const TABLIST_CLASS_NAME =
  "grid grid-cols-1 border-t border-l border-[#e4e4e4] min-[768px]:grid-cols-2 min-[1100px]:grid-cols-4";

export function PresenterGuidelinesTabs(): ReactElement {
  const [activeTabId, setActiveTabId] = useState<PresenterGuidelineTabId>(
    PRESENTER_GUIDELINE_TABS[0].id,
  );
  const activeTab =
    PRESENTER_GUIDELINE_TABS.find((tab) => tab.id === activeTabId) ??
    PRESENTER_GUIDELINE_TABS[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Presenter Guidelines"
        className={TABLIST_CLASS_NAME}
      >
        {PRESENTER_GUIDELINE_TABS.map((tab) => (
          <PresenterGuidelinesTabButton
            key={tab.id}
            tabId={tab.id}
            label={tab.label}
            isSelected={tab.id === activeTab.id}
            onSelect={setActiveTabId}
          />
        ))}
      </div>
      <div
        role="tabpanel"
        id={`presenter-panel-${activeTab.id}`}
        aria-labelledby={`presenter-tab-${activeTab.id}`}
        className="mt-5"
      >
        {renderPresenterPanel(activeTab.id)}
      </div>
    </div>
  );
}
