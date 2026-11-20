import type { ReactElement } from "react";
import { ScientificProgramDetails } from "@/components/scientific-program/ScientificProgramDetails";
import { getScientificProgram } from "@/components/scientific-program/get-scientific-program";

export const dynamic = "force-dynamic";

export default async function ScientificProgramPage(): Promise<ReactElement> {
  const page = await getScientificProgram();
  return <ScientificProgramDetails page={page} />;
}
