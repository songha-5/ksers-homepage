import type { ReactElement } from "react";
import { SubpageBreadcrumb } from "@/components/subpage-header/SubpageBreadcrumb";
import { SubpageVisual } from "@/components/subpage-header/SubpageVisual";

export function SubpageHeader(): ReactElement {
  return (
    <>
      <SubpageVisual />
      <SubpageBreadcrumb />
    </>
  );
}
