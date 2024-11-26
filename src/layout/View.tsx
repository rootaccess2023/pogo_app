import { useMenuStore } from "../stores";

export function View() {
  const menu = useMenuStore((state) => state.menu);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  return (
    <div className="absolute z-50 h-[50px] w-full lg:w-[calc(100%_-_304px)] flex justify-between lg:pl-[30px] font-montserrat font-bold text-sm bg-white border-b-[3px] border-[#eeeeee]">
      <div
        onClick={() => toggleMenu(menu)}
        className="relative lg:hidden top-[3px] pt-[14px] px-8 border-b-[3px] border-[#eeeeee] hover:border-[#f05449] cursor-pointer"
      >
        Menu
      </div>
      <div className="flex">
        <div className="w-full lg:w-fit relative top-[3px] pt-[14px] px-8 border-b-[3px] border-[#f05449] hover:border-[#eeeeee] cursor-pointer">
          Map
        </div>
        <div className="w-full lg:w-fit relative top-[3px] pt-[14px] px-8 border-b-[3px] border-[#eeeeee] hover:border-[#f05449] cursor-pointer">
          Timeline
        </div>
      </div>
    </div>
  );
}
