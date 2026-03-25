import imgImg40591 from "figma:asset/def7d2454046059c1f25d1d18014f21c80a647b5.png";
import imgImg40621 from "figma:asset/421965de4a1a8403c3b2a03a1661b78c8b9b0ed4.png";
import imgImg40641 from "figma:asset/c309acb46a20490640bd13a2ce610089e913123d.png";
import imgImg41051 from "figma:asset/0f9968c5405357362109d128ee1cddae116d4c31.png";
import imgImg41071 from "figma:asset/bb3aabddd336b2c39ae4cb9e6449d43668c61b47.png";
import imgImg81711 from "figma:asset/5da50a622577d06f3f4c372c2d88d822b3b403cb.png";
import imgImg81721 from "figma:asset/4dd47ef6c3a1c6aa5663d9026d81877fd07d0784.png";

export default function FotosDaGranja() {
  return (
    <div className="gap-y-[7px] grid grid-cols-[repeat(3,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] relative size-full" data-name="Fotos da Granja">
      <div className="col-1 h-[681px] relative row-1 shrink-0 w-[511px]" data-name="IMG_4059 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg40591} />
      </div>
      <div className="col-2 h-[681px] relative row-1 shrink-0 w-[511px]" data-name="IMG_4062 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg40621} />
      </div>
      <div className="col-3 h-[681px] relative row-1 shrink-0 w-[512px]" data-name="IMG_4064 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg40641} />
      </div>
      <div className="col-1 h-[682px] relative row-2 shrink-0 w-[511px]" data-name="IMG_4105 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg41051} />
      </div>
      <div className="col-2 h-[682px] relative row-2 shrink-0 w-[511px]" data-name="IMG_4107 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg41071} />
      </div>
      <div className="col-3 h-[682px] relative row-2 shrink-0 w-[512px]" data-name="IMG_8171 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg81711} />
      </div>
      <div className="col-1 h-[681px] relative row-3 shrink-0 w-[511px]" data-name="IMG_8172 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg81721} />
      </div>
    </div>
  );
}