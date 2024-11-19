import { FullscreenControl, Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export function MapBox() {
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
        style={{ width: "100%", height: "calc(100vh - 50px)" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <FullscreenControl />
      </Map>
    </div>
  );
}
