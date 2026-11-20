import type { ProgramSessionColor } from "@/components/program-glance/program-glance-model";

const SESSION_COLOR_CLASS: Record<ProgramSessionColor, string> = {
  gray: "bg-[#eceff1]",
  "light-green": "bg-[#e8f5e9]",
  purple: "bg-[#ede7f6]",
  "light-blue": "bg-[#e3f2fd]",
  green: "bg-[#c8e6c9]",
  red: "bg-[#ffcdd2]",
  orange: "bg-[#ffe0b2]",
  indigo: "bg-[#c5cae9]",
  pink: "bg-[#f8bbd0]",
  "dark-yellow": "bg-[#fff9c4]",
  mint: "bg-[#e0f2f1]",
  blue: "bg-[#bbdefb]",
  none: "bg-white",
};

export function getSessionColorClass(color: ProgramSessionColor): string {
  return SESSION_COLOR_CLASS[color];
}
