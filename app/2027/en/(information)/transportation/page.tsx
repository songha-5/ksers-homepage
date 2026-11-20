import type { Metadata } from "next";
import type { ReactElement } from "react";
import { TransportationDetails } from "@/components/transportation/TransportationDetails";

export const metadata: Metadata = {
  title: "Transportation",
};

export default function TransportationPage(): ReactElement {
  return <TransportationDetails />;
}
