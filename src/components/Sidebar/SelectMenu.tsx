import { usePogoStore, useYearStore } from "../../stores";
import { useViewStore } from "../../stores/viewStore";

export function SelectMenu() {
  const year = useYearStore((state) => state.year);
  const setYear = useYearStore((state) => state.setYear);
  const setSelectedLocation = usePogoStore(
    (state) => state.setSelectedLocation
  );
  const setZoom = useViewStore((state) => state.setZoom);
  const setPitch = useViewStore((state) => state.setPitch);
  const setToggleFalse = usePogoStore((state) => state.setToggleFalse);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.target.value));
    setSelectedLocation({
      latitude: 12.8797,
      longitude: 121.7744,
    });
    setZoom(5);
    setPitch(0);
    setToggleFalse();
  };

  return (
    <div className="flex justify-center">
      <select
        value={year}
        onChange={handleSelectChange}
        className="w-60 px-4 py-2 my-3 bg-white rounded font-bold drop-shadow"
      >
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
}
