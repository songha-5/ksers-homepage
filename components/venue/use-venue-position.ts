import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import {
  VENUE_MAP_ADDRESS,
  VENUE_MAP_FALLBACK_POSITION,
  type MapPosition,
} from "@/components/venue/venue-content";

function readGeocodedPosition(
  results: google.maps.GeocoderResult[] | null,
): MapPosition | null {
  const location = results?.[0]?.geometry.location;
  if (!location) {
    return null;
  }

  return { lat: location.lat(), lng: location.lng() };
}

function requestVenuePosition(
  geocoder: google.maps.Geocoder,
  onPosition: (position: MapPosition) => void,
): void {
  void geocoder
    .geocode({ address: VENUE_MAP_ADDRESS })
    .then((response) => {
      onPosition(
        readGeocodedPosition(response.results) ?? VENUE_MAP_FALLBACK_POSITION,
      );
    })
    .catch(() => {
      onPosition(VENUE_MAP_FALLBACK_POSITION);
    });
}

export function useVenuePosition(): MapPosition | null {
  const geocoding = useMapsLibrary("geocoding");
  const [position, setPosition] = useState<MapPosition | null>(null);

  useEffect(() => {
    if (!geocoding) {
      return;
    }

    let isCurrent = true;
    requestVenuePosition(new geocoding.Geocoder(), (nextPosition) => {
      if (isCurrent) {
        setPosition(nextPosition);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [geocoding]);

  return position;
}
