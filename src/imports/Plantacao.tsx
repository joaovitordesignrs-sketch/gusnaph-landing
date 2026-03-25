import imgImg41391 from "figma:asset/8f5b4d64899fe5b39ee5f6bd604cdb499cd065b8.png";
import imgImg41601 from "figma:asset/42869f3c6d3d951d42636fe950095bf4c1b82a60.png";
import imgImg41611 from "figma:asset/6db40d1fb240085fefba1f03f19137c00702d0fb.png";

export default function Plantacao() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative size-full" data-name="Plantação">
      <div className="h-[607px] relative shrink-0 w-[455px]" data-name="IMG_4139 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg41391} />
      </div>
      <div className="h-[607px] relative shrink-0 w-[455px]" data-name="IMG_4160 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg41601} />
      </div>
      <div className="h-[607px] relative shrink-0 w-[455px]" data-name="IMG_4161 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg41611} />
      </div>
    </div>
  );
}