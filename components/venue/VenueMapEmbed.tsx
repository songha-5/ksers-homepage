import type { ReactElement } from "react";
import {
  VENUE_MAP_ADDRESS,
  VENUE_MAP_CLASS_NAME,
  VENUE_MAP_TITLE,
} from "@/components/venue/venue-content";

function createVenueMapEmbedSrc(address: string): string {
  const query = encodeURIComponent(address);
  return `https://maps.google.com/maps?q=${query}&hl=en&z=16&output=embed`;
}

export function VenueMapEmbed(): ReactElement {
  return (
    <iframe
      title={VENUE_MAP_TITLE}
      src={createVenueMapEmbedSrc(VENUE_MAP_ADDRESS)}
      className={VENUE_MAP_CLASS_NAME}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
