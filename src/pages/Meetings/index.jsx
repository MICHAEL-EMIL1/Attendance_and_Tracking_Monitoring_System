import React, { useState }  from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Img, Heading } from "../../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ModifyUsers() {
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    Meeting_Name: Math.random() > 0.5 ? "pervasive" : "linux",
    Type: Math.random() > 0.5 ? "lab" : "lecture",
    Date: `${Math.floor(Math.random() * 30) + 1}/${Math.floor(Math.random() * 12) + 1}/${2024}`,
    Start_Time: `${Math.floor(Math.random() * 24) + 1}:${Math.floor(Math.random() * 60) + 1}:${Math.floor(Math.random() * 60) + 1}`,
    End_Time: `${Math.floor(Math.random() * 24) + 1}:${Math.floor(Math.random() * 60) + 1}:${Math.floor(Math.random() * 60) + 1}`,
  }));

  // State for search value
  const [searchValue, setSearchValue] = useState("");

  // Filtered data based on search value
  const filteredData = sampleData.filter(
    (item) =>
      item.id.toString().includes(searchValue) ||
      item.Meeting_Name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Navigate to the home page upon login
    navigate("/AddMeeting");
  };
  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full md:pb-5 bg-white-A700">
        <header className="p-1 bg-indigo-800">
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1223px]">
            <div className="flex flex-col items-center w-[80%] md:w-full">
              <div className="flex sm:flex-col justify-between w-[98%] md:w-full gap-5">
                <a href="../Home1" className="self-start">
                  <Heading size="md" as="h4" className="!text-gray-300 !font-saira">
                    Home
                  </Heading>
                </a>
                <a href="../Page3monitroing">
                  <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                    Monitoring Rooms
                  </Heading>
                </a>
                <a href="../Page3monitroingtimestampforallusers">
                  <Heading size="md" as="h4" className="!text-gray-300 !font-saira">
                    Monitoring Users
                  </Heading>
                </a>
                <a href="../NewReservation">
                  <Heading size="md" as="h4" className="!text-gray-300 !font-saira">
                    New Reservation
                  </Heading>
                </a>
              </div>
              <div className="self-stretch h-px mt-[3px] bg-white-A700_01" />
            </div>
            <Heading size="md" as="h4" className="mt-3.5 mb-3.5 w-[50px] !text-white-A700_01 !font-saira">
              Meetings
            </Heading>
          </div>
        </header>
        <div className="p-5 ">
          <div className="mb-4">
            <Input
              color="white_A700_01"
              size="sm"
              shape="square"
              name="search"
              placeholder="Search by Meeting ID or Name..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-[18%] mr-[26px] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
            />
          </div>
          <div className="ml-[1190px] mt-[-60px] mb-[15px]">
            <Button
              onClick={handleLogin}
              size="md"
              leftIcon={<img
                src="images/door.png"
                alt="userfill_one"
                className="self-stretch h-[30px] md:h-auto my-2"
              />}
              className="gap-[17px] sm:pr-5 tracking-[1.00px] font-roboto min-w-[179px] rounded-[24px]"
              >
              Add Meeting
            </Button>
          </div>
          <div className="h-[550px] overflow-y-auto border border-gray-300 rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="sticky top-0 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Meeting ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Meeting Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((row) => (
                  <tr key={row.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`../MeetingDetails`}>{row.id}</Link> {/* ${row.id}*/}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.Meeting_Name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.Type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.Date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.Start_Time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.End_Time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
