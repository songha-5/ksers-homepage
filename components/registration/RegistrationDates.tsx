import type { ReactElement } from "react";
import {
  EARLY_BIRD_DEADLINE,
  PRE_REGISTRATION_DEADLINE,
} from "@/components/registration/registration-content";
import { SubpageDateList } from "@/components/subpage/SubpageDateList";

const REGISTRATION_DATES = [
  {
    id: "early-bird",
    label: "Early-Bird Registration Deadline",
    value: EARLY_BIRD_DEADLINE,
  },
  {
    id: "pre-registration",
    label: "Pre-Registration Deadline",
    value: PRE_REGISTRATION_DEADLINE,
  },
] as const;

export function RegistrationDates(): ReactElement {
  return (
    <SubpageDateList title="Important Dates" items={REGISTRATION_DATES} />
  );
}
