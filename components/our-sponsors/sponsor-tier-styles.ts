export const SPONSOR_TIER_ACCENT_CLASS_NAME = {
  diamond: "bg-[#012D6D]",
  platinum: "bg-[#09428f]",
  gold: "bg-[#1565c0]",
  silver: "bg-[#37474f]",
  bronze: "bg-[#595959]",
  angel: "bg-[#cfd8dc]",
} as const;

export type SponsorTierId = keyof typeof SPONSOR_TIER_ACCENT_CLASS_NAME;
