import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading } from "../../components";

export default function ModifyUsers() {
  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[58px] gap-[30px] md:pb-5 bg-white-A700">
        <header className="p-1 bg-indigo-800">
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1223px]">
            <div className="flex flex-col items-center w-[80%] md:w-full">
              <div className="flex sm:flex-col justify-between w-[98%] md:w-full gap-5">
                <a href="../Home1" className="self-start">
                  <Heading
                    size="md"
                    as="h4"
                    className="!text-gray-300 !font-saira"
                  >
                    Home
                  </Heading>
                </a>
                <a href="../Page3monitroing">
                  <Heading
                    size="md"
                    as="h4"
                    className="self-start !text-gray-200_01 !font-saira"
                  >
                    Monitoring Rooms
                  </Heading>
                </a>
                <a href="../Page3monitroingtimestampforallusers">
                  <Heading
                    size="md"
                    as="h4"
                    className="!text-gray-300 !font-saira"
                  >
                    Monitoring Users
                  </Heading>
                </a>
                <a href="../Meetings">
                  <Heading
                    size="md"
                    as="h4"
                    className="self-start !text-gray-200_01 !font-saira"
                  >
                    Meetings
                  </Heading>
                </a>
                <a href="../NewReservation">
                  <Heading
                    size="md"
                    as="h4"
                    className="!text-gray-300 !font-saira"
                  >
                    New Reservation
                  </Heading>
                </a>
              </div>
              <div className="self-stretch h-px mt-[3px] bg-white-A700_01" />
            </div>
            <Heading
              size="md"
              as="h4"
              className="mt-3.5 mb-3.5 !text-white-A700_01 !font-saira"
            >
              Add Rooms
            </Heading>
          </div>
        </header>
        <div className="w-full mx-auto md:p-5 max-w-[1375px]">
          <div className="flex flex-col gap-[13px]">
            <div className="flex p-[20px] sm:p-5 bg-gray-100_01">
              <div className="flex flex-col items-start w-full gap-10">
                <div className="p-[45px] ml-[950px] bg-white-A700_01 rounded-[33px]">
                  <img
                    src="images/door.png"
                    alt="userfill_one"
                    className="self-stretch h-[126px] md:h-auto my-2"
                  />
                </div>
                <div className="flex sm:flex-col justify-center items-center w-[50%] gap-[35px] mt-[-260px]">
                  <Text as="p">Bulding</Text>
                  <Input
                    shape="round"
                    type="text"
                    name="Building"
                    className="flex-1 bg-white-A700_01"
                  />
                </div>
                <div className="flex sm:flex-col justify-center items-center w-[50%] gap-[60px]">
                  <Text as="p">Floor</Text>
                  <Input
                    shape="round"
                    name="Floor"
                    className="flex-1 bg-white-A700_01"
                  />
                </div>
                <div className="flex sm:flex-col justify-center items-center w-[50%] gap-[90px]">
                  <Text as="p" className="w-[20px]">Room Name</Text>
                  <Input
                    shape="round"
                    name="Name"
                    className="flex-1 bg-white-A700_01"
                  />
                </div>
                <div className="flex sm:flex-col justify-center items-center w-[50%] gap-[95px]">
                  <Text as="p">IP</Text>
                  <Input
                    shape="round"
                    name="IP"
                    className="flex-1 bg-white-A700_01"
                  />
                </div>
                <Button
                  shape="round"
                  className="mt-5 sm:px-5 tracking-[1.00px] font-extrabold min-w-[169px]"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
