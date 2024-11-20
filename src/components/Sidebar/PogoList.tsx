import { useEffect } from "react";
import mockPOGOLocations from "../../mock";
import { usePogoStore, useYearStore } from "../../stores";

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
        <li key={index}>
          <h1>{pogo.name}</h1>
        </li>
      ))}
      {pogo.length === 0 && <li>No data found for the selected year.</li>}
    </ul>
  );
}
