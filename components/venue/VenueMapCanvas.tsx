"use client";

import { Map, Marker } from "@vis.gl/react-google-maps";
import type { ReactElement } from "react";
import { useVenuePosition } from "@/components/venue/use-venue-position";
import {
  VENUE_MAP_CLASS_NAME,
  VENUE_MAP_TITLE,
} from "@/components/venue/venue-content";

const MAP_STYLE = { width: "100%", height: "100%" } as const;

export function VenueMapCanvas(): ReactElement {
  const position = useVenuePosition();

  if (!position) {
    return <div className={VENUE_MAP_CLASS_NAME} />;
  }

  return (
    <div className={VENUE_MAP_CLASS_NAME}>
      <Map
        defaultCenter={position}
        defaultZoom={16}
        gestureHandling="greedy"
        style={MAP_STYLE}
      >
        <Marker position={position} title={VENUE_MAP_TITLE} />
      </Map>
    </div>
  );
}
