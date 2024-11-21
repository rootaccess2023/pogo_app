import {
  IoAlertCircleOutline,
  IoClose,
  IoLocationOutline,
} from "react-icons/io5";
import { usePogoStore } from "../stores";
export function Details() {
  const toggleDetails = usePogoStore((state) => state.toggleDetails);
  const selectedLocation = usePogoStore((state) => state.selectedLocation);
  return (
    <>
      {toggleDetails && (
        <div className="absolute top-[4.5rem] left-[1.5rem] w-[20rem] h-fit flex flex-col gap-2 bg-white bg-opacity-80  p-4 rounded-lg">
          <img className="rounded-md" src={selectedLocation?.image} />
          <h1 className="text-xl font-bold">{selectedLocation?.name}</h1>
          <p className="leading-5">{selectedLocation?.description}</p>
          <p className="flex items-start gap-4">
            <IoLocationOutline className="mt-[3px] text-[#007ce1] size-5" />
            <span className="">
              <h5 className="">
                Latitude: {selectedLocation?.latitude.toFixed(2)}°N
              </h5>
              <h5>Longitude: {selectedLocation?.longitude.toFixed(2)}°E</h5>
            </span>
          </p>
          <p className="flex gap-4">
            <IoAlertCircleOutline className="mt-[3px] text-[#007ce1] size-5" />
            <span className="">
              <h5 className="">6 years of active operation</h5>
            </span>
          </p>
        </div>
      )}
    </>
  );
}
