import { Marker } from "react-map-gl";
import { usePogoStore } from "../../stores";

export function MarkerList() {
  const pogo = usePogoStore((state) => state.pogo);
  return (
    <>
      {pogo.map((pogo) => (
        <Marker
          key={pogo.id}
          longitude={pogo.longitude}
          latitude={pogo.latitude}
        />
      ))}
    </>
  );
}
