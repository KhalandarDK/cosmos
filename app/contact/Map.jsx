import LocationMap from "@/components/ui/LocationMap";

const sonoma = { coords: [-122.4581, 38.2919] };

export default function Map() {
  return (
    <LocationMap
      center={sonoma.coords}
      label="Sonoma Valley"
      initialZoom={10.5}
      flyZoom={12.2}
    />
  );
}