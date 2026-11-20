import type { Metadata } from "next";
import type { ReactElement } from "react";
import { RegistrationDetails } from "@/components/registration/RegistrationDetails";

export const metadata: Metadata = {
  title: "Registration",
};

export default function RegistrationPage(): ReactElement {
  return <RegistrationDetails />;
}
