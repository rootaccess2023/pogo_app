import { Marker } from "react-map-gl";
import { usePogoStore } from "../../stores";
import pogoMarker from "../../assets/pogo_marker.svg";
import pogoMarkerSelected from "../../assets/pogo_marker_selected.gif"; // Assuming the selected marker image is available
import { useViewStore } from "../../stores/viewStore";
import { useEffect, useRef } from "react";

export function MarkerList() {
  const pogo = usePogoStore((state) => state.pogo);
  const selectedLocation = usePogoStore((state) => state.selectedLocation);
  const setSelectedLocation = usePogoStore(
    (state) => state.setSelectedLocation
  );
  const setToggleTrue = usePogoStore((state) => state.setToggleTrue);
  const setPitch = useViewStore((state) => state.setPitch);
  const setZoom = useViewStore((state) => state.setZoom);
  const scrollPosition = useViewStore((state) => state.scrollPosition);
  const setScrollPosition = useViewStore((state) => state.setScrollPosition);
  const setItemRefs = useViewStore((state) => state.setItemRefs);
  const itemRef = useViewStore((state) => state.itemRefs);

  const itemRefs = useRef<(HTMLLIElement | null)[]>(itemRef);

  useEffect(() => {
    setItemRefs(itemRefs.current);
  }, [pogo]);

  const handleMarkerClick = (index: number, pogo: any) => {
    setSelectedLocation({
      name: pogo.name,
      latitude: pogo.latitude,
      longitude: pogo.longitude,
      description: pogo.description,
      image: pogo.image,
      address: pogo.address,
      years: pogo.years,
    });
    setToggleTrue();
    setPitch(60);
    setZoom(18);
    const scrollPos = itemRefs.current[index]?.offsetTop || 0;
    setScrollPosition(scrollPos);

    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  return (
    <>
      {pogo.map((pogo, index) => {
        const isSelected =
          selectedLocation?.latitude === pogo.latitude &&
          selectedLocation?.longitude === pogo.longitude;

        return (
          <Marker
            key={pogo.id}
            longitude={pogo.longitude}
            latitude={pogo.latitude}
          >
            <img
              onClick={() => handleMarkerClick(index, pogo)}
              className="size-16"
              src={isSelected ? pogoMarkerSelected : pogoMarker}
              alt=""
            />
          </Marker>
        );
      })}
    </>
  );
}
