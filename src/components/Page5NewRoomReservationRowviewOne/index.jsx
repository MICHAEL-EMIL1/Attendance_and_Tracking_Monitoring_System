import React from "react";
import { Heading } from "./..";

export default function Page5NewRoomReservationRowviewOne({
  reserveThree = "Reserve",
  reserveFour = "Reserve",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-end w-[17%] border-blue_gray-900 border-2 border-solid rounded">
        <div className="h-[14px] w-[14px] border-blue_gray-900 border-2 border-solid rounded" />
      </div>
      <div className="flex flex-1">
        <div className="flex flex-col">
          <Heading size="xs" as="h1" className="!text-black-900">
            {reserveThree}
          </Heading>
          <Heading size="xs" as="h2" className="mt-[-19px] !text-black-900">
            {reserveFour}
          </Heading>
        </div>
      </div>
    </div>
  );
}
