"use client";

import { useState, type ReactElement } from "react";
import { TransportationAirportPanel } from "@/components/transportation/TransportationAirportPanel";
import { TransportationTabList } from "@/components/transportation/TransportationTabList";
import {
  findTransportAirport,
  TRANSPORT_AIRPORTS,
} from "@/components/transportation/transportation-content";
import type { TransportMode } from "@/components/transportation/transportation-model";

export function TransportationTabs(): ReactElement | null {
  const [airportId, setAirportId] = useState<string>(TRANSPORT_AIRPORTS[0].id);
  const [modeId, setModeId] = useState<string>(
    TRANSPORT_AIRPORTS[0].modes[0].id,
  );
  const airport = findTransportAirport(airportId);
  const mode = findMode(airport, modeId);

  if (!airport || !mode) {
    return null;
  }

  return (
    <div>
      <TransportationTabList
        label="Airports"
        level="main"
        tabs={TRANSPORT_AIRPORTS}
        activeId={airport.id}
        onSelect={setAirportId}
      />
      <TransportationAirportPanel
        airport={airport}
        mode={mode}
        onSelectMode={setModeId}
      />
    </div>
  );
}

function findMode(
  airport: ReturnType<typeof findTransportAirport>,
  modeId: string,
): TransportMode | null {
  if (!airport) {
    return null;
  }

  return (
    airport.modes.find((mode) => mode.id === modeId) ?? airport.modes[0] ?? null
  );
}
