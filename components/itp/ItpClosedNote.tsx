import type { ReactElement } from "react";
import { ITP_CLOSED_LABEL } from "@/components/itp/itp-content";

export function ItpClosedNote(): ReactElement {
  return (
    <strong className="font-bold text-[#09428f]">({ITP_CLOSED_LABEL})</strong>
  );
}
