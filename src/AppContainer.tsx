import { Details, MapBox, Sidebar, View } from "./layout";

export function AppContainer() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Details />
      <div className="w-full">
        <View />
        <MapBox />
      </div>
    </div>
  );
}
