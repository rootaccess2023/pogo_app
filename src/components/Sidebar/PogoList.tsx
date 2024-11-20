import { useEffect } from "react";
import mockPOGOLocations from "../../mock";
import { usePogoStore, useYearStore } from "../../stores";
import { PiPokerChipLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

export function PogoList() {
  const year = useYearStore((state) => state.year);
  const pogo = usePogoStore((state) => state.pogo);
  const setPogo = usePogoStore((state) => state.setPogo);

  useEffect(() => {
    const data = mockPOGOLocations.filter(
      (pogo) => pogo.years[year.toString()]
    );
    setPogo(data);
  }, [year]);
  return (
    <ul>
      {pogo.map((pogo, index) => (
        <li
          className="h-[60px] flex justify-between items-center hover:bg-gray-100 pl-8 pr-4 cursor-pointer"
          key={index}
        >
          <span className="flex items-center gap-1">
            <PiPokerChipLight className="size-6 text-[#007ce1]" />
            <h1>{pogo.name}</h1>
          </span>
          <IoIosArrowForward className="size-6 text-[#cccccc]" />
        </li>
      ))}
      {pogo.length === 0 && <li>No data found for the selected year.</li>}
    </ul>
  );
}
