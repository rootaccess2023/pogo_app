import { PulseLoader } from "react-spinners";

export function Loader() {
  return (
    <li className="h-[calc(100vh_-_223px)] lg:h-[calc(100vh_-_203px)] flex flex-col gap-4 justify-center items-center">
      <PulseLoader color="#dd1c24" />
      <h1 className="text-sm font-semibold px-6 text-center">
        Alice Guo's on the run
        <br />
        POGO locations are delayed!
      </h1>
    </li>
  );
}
