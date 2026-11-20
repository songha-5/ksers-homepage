import type { Metadata } from "next";
import type { ReactElement } from "react";
import { TravelGrantsDetails } from "@/components/travel-grants/TravelGrantsDetails";

export const metadata: Metadata = {
  title: "Travel Grants",
};

export default function TravelGrantsPage(): ReactElement {
  return <TravelGrantsDetails />;
}
