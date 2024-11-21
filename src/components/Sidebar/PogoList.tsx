import { useEffect } from "react";
import { usePogoStore, useYearStore } from "../../stores";
import { PiPokerChipLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

export function PogoList() {
  const year = useYearStore((state) => state.year);
  const pogo = usePogoStore((state) => state.pogo);
  const setPogo = usePogoStore((state) => state.setPogo);
  const setSelectedLocation = usePogoStore(
    (state) => state.setSelectedLocation
  );
  const setToggleTrue = usePogoStore((state) => state.setToggleTrue);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `https://pogoph-api.onrender.com/pogolocations?year=${year}`
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
  }, [year, setPogo]);

  console.log(pogo);

  return (
    <ul className="h-[calc(100vh_-_203px)] overflow-scroll">
      {pogo.map((pogo, index) => (
        <li
          className="h-[60px] flex justify-between items-center hover:bg-gray-100 pl-8 pr-4 cursor-pointer"
          key={index}
          onClick={() => {
            setSelectedLocation({
              name: pogo.name,
              latitude: pogo.latitude,
              longitude: pogo.longitude,
              description: pogo.description,
              image: pogo.image,
            });
            setToggleTrue();
          }}
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
