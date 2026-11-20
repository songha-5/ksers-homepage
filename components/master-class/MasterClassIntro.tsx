import type { ReactElement } from "react";
import { MASTER_CLASS_LEAD } from "@/components/master-class/master-class-content";

export function MasterClassIntro(): ReactElement {
  return (
    <div className="flex flex-col gap-2">
      {MASTER_CLASS_LEAD.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
