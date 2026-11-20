import type { ReactElement } from "react";
import { readGoogleMapsApiKey } from "@/config/env";
import { VenueGoogleMap } from "@/components/venue/VenueGoogleMap";
import { VenueMapEmbed } from "@/components/venue/VenueMapEmbed";

export function VenueMap(): ReactElement {
  const apiKey = readGoogleMapsApiKey();

  // 자바스크립트 지도는 API 키가 있을 때만 띄운다.
  if (!apiKey) {
    return <VenueMapEmbed />;
  }

  return <VenueGoogleMap apiKey={apiKey} />;
}
