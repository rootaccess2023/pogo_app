import { useEffect, useRef } from "react";
import { usePogoStore, useYearStore } from "../../stores";
import { PiPokerChipLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { useViewStore } from "../../stores/viewStore";

export function PogoList() {
  const year = useYearStore((state) => state.year);
  const pogo = usePogoStore((state) => state.pogo);
  const setPogo = usePogoStore((state) => state.setPogo);
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

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/locations?year=${year}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPogo(data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
        setPogo([]);
      }
    };

    fetchLocations();
  }, [year]);

  const handleClick = (index: number, pogo: any) => {
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
    <ul className="h-[calc(100vh_-_203px)] overflow-scroll">
      {pogo.map((pogo, index) => (
        <li
          className={`h-[60px] flex justify-between items-center pl-8 pr-4 cursor-pointer ${
            pogo.latitude === selectedLocation?.latitude &&
            pogo.longitude === selectedLocation?.longitude
              ? "font-semibold bg-gray-100"
              : ""
          } hover:bg-gray-100`}
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          onClick={() => handleClick(index, pogo)}
        >
          <span className="flex gap-1">
            <PiPokerChipLight className="size-6 text-[#007ce1]" />
            <h1 className="max-w-48 truncate">{pogo.name}</h1>
          </span>
          <IoIosArrowForward className="size-6 text-[#cccccc]" />
        </li>
      ))}
      {pogo.length === 0 && <li>No data found for the selected year.</li>}
    </ul>
  );
}
