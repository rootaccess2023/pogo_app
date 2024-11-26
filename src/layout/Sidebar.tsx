import { Header, PogoList, SelectMenu, Subtitle, Title } from "../components";
import { useMenuStore } from "../stores";

export function Sidebar() {
  const menu = useMenuStore((state) => state.menu);
  return (
    <div
      className={`z-50 absolute shadow lg:relative lg:z-0 ${
        menu === true ? "block bg-white" : "hidden"
      } lg:block w-full sm:w-96`}
    >
      <div className="pt-16 lg:pt-6 px-6">
        <Header />
        <Title />
        <SelectMenu />
        <Subtitle />
      </div>
      <PogoList />
    </div>
  );
}
