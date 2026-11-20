import type { ReactElement } from "react";
import { ProgramGlanceDetails } from "@/components/program-glance/ProgramGlanceDetails";
import { getProgramGlance } from "@/components/program-glance/get-program-glance";

export const dynamic = "force-dynamic";

export default async function ProgramAtAGlancePage(): Promise<ReactElement> {
  const page = await getProgramGlance();
  return <ProgramGlanceDetails page={page} />;
}
