import type { Metadata } from "next";
import type { ReactElement } from "react";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Accommodation",
};

export default function AccommodationPage(): ReactElement {
  return <RoutePlaceholder title="Accommodation" path="/2027/en/accommodation" />;
}
