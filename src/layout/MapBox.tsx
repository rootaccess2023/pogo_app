import { Map, MapRef, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import { usePogoStore } from "../stores";

export function MapBox() {
  const pogo = usePogoStore((state) => state.pogo);
  const selectedLocation = usePogoStore((state) => state.selectedLocation);
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicG9sb3JldmlsbzE5IiwiYSI6ImNtM2xydzVyZTByZ2Qyc3BlZ2gwaGcwZnEifQ.pQZoqD9Md_xq2JAlYZzoLw";

  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (mapRef.current) {
      console.log("MapRef initialized:", mapRef.current);
    }
  }, []);

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      console.log("Flying to:", selectedLocation);
      const map = mapRef.current.getMap();
      map.flyTo({
        center: [selectedLocation.longitude, selectedLocation.latitude],
        zoom: 20,
        speed: 1.2,
      });
    }
  }, [selectedLocation]);

  return (
    <div>
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 121.7744,
          latitude: 12.8797,
          zoom: 5,
          pitch: 60,
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        minZoom={5}
      >
        {pogo.map((pogo) => (
          <Marker
            key={pogo.id}
            longitude={pogo.longitude}
            latitude={pogo.latitude}
          />
        ))}
      </Map>
    </div>
  );
}
