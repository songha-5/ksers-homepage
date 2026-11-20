import type { ReactElement } from "react";
import { TransportationLinkButton } from "@/components/transportation/TransportationLinkButton";
import { TransportationMode } from "@/components/transportation/TransportationMode";
import { TransportationTabList } from "@/components/transportation/TransportationTabList";
import { MORE_INFO_BUTTON_LABEL } from "@/components/transportation/transportation-content";
import type {
  TransportAirport,
  TransportMode,
} from "@/components/transportation/transportation-model";

interface TransportationAirportPanelProps {
  readonly airport: TransportAirport;
  readonly mode: TransportMode;
  readonly onSelectMode: (modeId: string) => void;
}

export function TransportationAirportPanel({
  airport,
  mode,
  onSelectMode,
}: TransportationAirportPanelProps): ReactElement {
  return (
    <div
      role="tabpanel"
      id={`transport-panel-${airport.id}`}
      aria-labelledby={`transport-tab-${airport.id}`}
      className="mt-5"
    >
      {/* More Info는 교통수단 탭과 상관없이 공항 탭 상단에 둔다. */}
      <TransportationLinkButton
        href={airport.moreInfoHref}
        label={MORE_INFO_BUTTON_LABEL}
        tone="outline"
      />
      <div className="mt-5">
        <TransportationTabList
          label={airport.label}
          level="sub"
          tabs={airport.modes}
          activeId={mode.id}
          onSelect={onSelectMode}
        />
      </div>
      <div
        role="tabpanel"
        id={`transport-panel-${mode.id}`}
        aria-labelledby={`transport-tab-${mode.id}`}
        className="mt-5"
      >
        <TransportationMode mode={mode} />
      </div>
    </div>
  );
}
