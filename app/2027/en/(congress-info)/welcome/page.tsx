import type { Metadata } from "next";
import type { ReactElement } from "react";
import { WelcomeMessage } from "@/components/welcome-message/WelcomeMessage";

export default function WelcomeMessagePage(): ReactElement {
  return <WelcomeMessage />;
}
