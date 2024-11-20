import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { usePogoStore } from "../stores";

export function MapBox() {
  const pogo = usePogoStore((state) => state.pogo);
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicG9sb3JldmlsbzE5IiwiYSI6ImNtM2xydzVyZTByZ2Qyc3BlZ2gwaGcwZnEifQ.pQZoqD9Md_xq2JAlYZzoLw";
  return (
    <div>
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 121.7744,
          latitude: 12.8797,
          zoom: 5,
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pogo.map((pogo) => (
          <Marker
            key={pogo.id}
            longitude={pogo.longitude}
            latitude={pogo.latitude}
          ></Marker>
        ))}
      </Map>
    </div>
  );
}
