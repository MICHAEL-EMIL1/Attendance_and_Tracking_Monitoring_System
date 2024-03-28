import React from "react";
import { Img } from "./..";

export default function Page3MonitroingScrollbar({ ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_arrow.svg" alt="arrow_one" className="h-[7px] w-[7px] mt-[5px]" />
      <div className="self-stretch h-[25px] bg-gray-400" />
      <Img src="images/img_arrow.svg" alt="arrow_three" className="h-[7px] w-[7px] mb-[5px]" />
    </div>
  );
}
