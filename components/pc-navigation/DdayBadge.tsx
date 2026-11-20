import type { ReactElement } from "react";
import { CalendarDays } from "lucide-react";
import { CONGRESS_START_DATE } from "@/config/congress";
import { formatRemainingDays, getDaysUntil } from "@/utils/get-days-until";

export function DdayBadge(): ReactElement {
  const remainingDays = formatRemainingDays(getDaysUntil(CONGRESS_START_DATE));

  return (
    <div className="flex items-center gap-2 pr-3 text-white">
      <div className="flex w-full h-6">
        <p className="whitespace-nowrap text-xs text-white h-full bg-(--palette-primary) flex-1 flex items-center px-2">D-day</p>
        <p className="text-sm font-semibold h-full bg-(--palette-dday) flex-1 flex items-center px-2">{remainingDays}</p>
      </div>
    </div>
  );
}
