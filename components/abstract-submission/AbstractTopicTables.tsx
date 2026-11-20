import type { ReactElement } from "react";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import { AbstractTopicTable } from "@/components/abstract-submission/AbstractTopicTable";
import { ABSTRACT_TOPIC_GROUPS } from "@/components/abstract-submission/abstract-submission-content";

export function AbstractTopicTables(): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title="Abstract Topics" />
      <div className="grid gap-6 min-[768px]:grid-cols-2">
        {ABSTRACT_TOPIC_GROUPS.map((group) => (
          <AbstractTopicTable key={group.id} topics={group.topics} />
        ))}
      </div>
    </div>
  );
}
