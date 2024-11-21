import { Header, PogoList, SelectMenu, Subtitle, Title } from "../components";

export function Sidebar() {
  return (
    <div className="w-96">
      <div className="pt-6 px-6">
        <Header />
        <Title />
        <SelectMenu />
        <Subtitle />
      </div>
      <PogoList />
    </div>
  );
}
