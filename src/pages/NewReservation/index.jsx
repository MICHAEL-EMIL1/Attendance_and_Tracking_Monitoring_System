import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { Input, Heading, Text} from "../../components";

export default function NewReservation() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCell, setSelectedCell] = useState(null);
  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <header className="p-1 bg-indigo-800">
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1223px]">
            <div className="flex flex-col items-center w-[65%] md:w-full">
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
                    className="!text-gray-300 !font-saira"
                  >
                    Meetings
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
              New Reservation
            </Heading>
          </div>
        </header>
          <div className="m-5">
            <Input
              color="white_A700_01"
              size="sm"
              shape="square"
              name="search"
              type="Date"
              placeholder="Search by Meeting ID or Name..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-[18%] mr-[26px] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
            />
          </div>
        <div>
        <div className=" p-2">
          <Heading size="md" as="h1" className="ml-5 mt-5 mb-1 !font-black">
            Idle Rooms
          </Heading>
          <div className="flex flex-wrap gap-[30px] bg-gray-100_04 pl-[25px] pb-[30px] h-[550px] w-[99%] overflow-y-auto ">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <a href="/AddMeeting" key={index} className={`mt-[20px] bg-white-A700_01 p-[20px] cursor-pointer ${
                selectedCell === index ? 'border-8 border-indigo-600' : ''
              }`}
              onClick={() => setSelectedCell(index)}>
                <Text>
                  <>
                    Room ID : 22
                    <br />
                    <br />
                    Start time :10 AM
                    <br />
                    <br />
                    End Time : 12PM
                    <br />
                    <br />
                    Reservation ID : 5
                    <br />
                    <br />
                    Date: 4/4/2024
                  </>
                </Text>
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
