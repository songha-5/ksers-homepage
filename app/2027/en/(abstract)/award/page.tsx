import type { Metadata } from "next";
import type { ReactElement } from "react";
import { ScientificAwardDetails } from "@/components/scientific-award/ScientificAwardDetails";

export const metadata: Metadata = {
  title: "Scientific Award",
};

export default function ScientificAwardPage(): ReactElement {
  return <ScientificAwardDetails />;
}
