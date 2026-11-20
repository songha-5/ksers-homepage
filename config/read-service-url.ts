import { readRegistrationBase } from "@/config/env";

export function readServicePageUrl(
  build: (base: string) => string | null,
): string | null {
  const base = readRegistrationBase();
  if (!base) {
    return null;
  }

  return build(base);
}
