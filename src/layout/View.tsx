export function View() {
  return (
    <div className="absolute z-50 h-[50px] w-full flex pl-[30px] font-montserrat font-bold text-sm bg-white border-b-[3px] border-[#eeeeee]">
      <div className="relative top-[3px] pt-[14px] px-8 border-b-[3px] border-[#f05449] hover:border-[#eeeeee] cursor-pointer">
        Map View
      </div>
      <div className="relative top-[3px] pt-[14px] px-8 border-b-[3px] border-[#eeeeee] hover:border-[#f05449] cursor-pointer">
        Chart View
      </div>
    </div>
  );
}
