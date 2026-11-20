import type { Metadata } from "next";
import type { ReactElement } from "react";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Program Book",
};

export default function ProgramBookPage(): ReactElement {
  return <RoutePlaceholder title="Program Book" path="/2027/en/program-book" />;
}
