import type { Metadata } from "next";
import type { ReactElement } from "react";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Abstract Book",
};

export default function AbstractBookPage(): ReactElement {
  return (
    <RoutePlaceholder title="Abstract Book" path="/2027/en/abstract-book" />
  );
}
