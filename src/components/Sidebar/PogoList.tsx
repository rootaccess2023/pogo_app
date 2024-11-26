import { useEffect, useRef } from "react";
import { useMenuStore, usePogoStore, useYearStore } from "../../stores";
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
  const menu = useMenuStore((state) => state.menu);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  const itemRefs = useRef<(HTMLLIElement | null)[]>(itemRef);

  useEffect(() => {
    setItemRefs(itemRefs.current);
  }, [pogo]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `https://pogoph-api.onrender.com/locations?year=${year}`
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
    toggleMenu(menu);

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
    <ul className="h-[calc(100vh_-_223px)] lg:h-[calc(100vh_-_203px)] overflow-scroll">
      {pogo.map((pogo, index) => (
        <li
          className={`h-[60px] flex justify-between items-center cursor-pointer ${
            pogo.latitude === selectedLocation?.latitude &&
            pogo.longitude === selectedLocation?.longitude &&
            pogo.name === selectedLocation?.name
              ? "font-semibold bg-red-100"
              : ""
          } group hover:bg-red-100`}
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          onClick={() => handleClick(index, pogo)}
        >
          <div
            className={`w-[4px] h-[60px] ${
              pogo.latitude === selectedLocation?.latitude &&
              pogo.longitude === selectedLocation?.longitude &&
              pogo.name === selectedLocation?.name
                ? "bg-[#dc1b23]"
                : "group-hover:bg-[#dc1b23]"
            }`}
          ></div>

          <div className="w-full flex justify-between pl-8 pr-4">
            <span className="flex flex-col">
              <h1 className="max-w-60 truncate">{pogo.name}</h1>
              <p className="text-sm font-light text-zinc-500">{pogo.region}</p>
            </span>
            <IoIosArrowForward className="size-6 text-[#cccccc]" />
          </div>
        </li>
      ))}
      {year === 2019 ? (
        <li className="px-6">
          No data found for the selected year due to Covid-19.
        </li>
      ) : year === 2024 ? (
        <li className="px-6">All pogo closed.</li>
      ) : null}
    </ul>
  );
}
