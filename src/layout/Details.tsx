import {
  IoClose,
  IoKeyOutline,
  IoLocateOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { usePogoStore } from "../stores";
export function Details() {
  const toggleDetails = usePogoStore((state) => state.toggleDetails);
  const setToggleFalse = usePogoStore((state) => state.setToggleFalse);
  const selectedLocation = usePogoStore((state) => state.selectedLocation);

  const years = selectedLocation?.years || {};
  const operatingYears = Object.keys(years).filter((year) => years[year]);
  const numberOfYears = operatingYears.length;
  return (
    <>
      {toggleDetails && (
        <div className="absolute top-[4.5rem] left-[1.5rem] w-[20rem] h-fit flex flex-col bg-white bg-opacity-80 p-4 rounded-lg">
          <IoClose
            onClick={() => setToggleFalse()}
            className="z-10 absolute top-5 bg-white hover:bg-gray-200 size-4 rounded right-5 text-gray-500 w-fit cursor-pointer"
          />
          <img className="rounded-md h-60" src={selectedLocation?.image} />
          <h1 className="text-xl font-semibold py-2">
            {selectedLocation?.name}
          </h1>
          <p className="leading-5">{selectedLocation?.description}</p>
          <ul className="pt-2">
            <li className="flex gap-2 border-b py-2">
              <span className="w-6">
                <IoLocationOutline className="text-[#047ee1] size-5 mt-[2px]" />
              </span>
              <span className="w-full">{selectedLocation?.address}</span>
            </li>
            <li className="flex gap-2 border-b py-2">
              <span className="w-6">
                <IoLocateOutline className="text-[#047ee1] size-5 mt-[2px]" />
              </span>
              <span className="w-full">
                {selectedLocation?.latitude}N {selectedLocation?.longitude}E
              </span>
            </li>
            <li className="flex gap-2 border-b py-2">
              <span className="w-6">
                <IoTimeOutline className="text-[#047ee1] size-5 mt-[2px]" />
              </span>
              <span className="w-full">{numberOfYears} years of operation</span>
            </li>
            <li className="flex gap-2 py-2">
              <span className="w-6">
                <IoKeyOutline className="text-[#047ee1] size-5 mt-[2px]" />
              </span>
              <span className="w-full">{operatingYears.join(", ")}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
