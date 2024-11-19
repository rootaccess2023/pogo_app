import { MapBox, View } from "./layout";

export function AppContainer() {
  return (
    <div className="h-screen flex">
      <div className="w-96 bg-red-200">Side BAR</div>
      <div className="w-full">
        <View />
        <MapBox />
      </div>
    </div>
  );
}
