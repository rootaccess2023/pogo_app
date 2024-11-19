export function AppContainer() {
  return (
    <div className="h-screen flex">
      <div className="w-96 bg-red-200">Side BAR</div>
      <div className="w-full bg-red-400">
        <div className="h-[50px] bg-red-300">NAV</div>
        <div>MAP</div>
      </div>
    </div>
  );
}
