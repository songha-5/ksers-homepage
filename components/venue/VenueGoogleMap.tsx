"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import type { ReactElement } from "react";
import { VenueMapCanvas } from "@/components/venue/VenueMapCanvas";

interface VenueGoogleMapProps {
  readonly apiKey: string;
}

export function VenueGoogleMap({ apiKey }: VenueGoogleMapProps): ReactElement {
  return (
    <APIProvider apiKey={apiKey}>
      <VenueMapCanvas />
    </APIProvider>
  );
}
