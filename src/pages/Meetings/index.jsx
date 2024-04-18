import React, { useState }  from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

export default function ModifyUsers() {
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    Meeting_Name: Math.random() > 0.5 ? "pervasive" : "linux",
    Type: Math.random() > 0.5 ? "lab" : "lecture",
    Date: `${Math.floor(Math.random() * 30) + 1}/${Math.floor(Math.random() * 12) + 1}/${2024}`,
    Start_Time: `${Math.floor(Math.random() * 24) + 1}:${Math.floor(Math.random() * 60) + 1}:${Math.floor(Math.random() * 60) + 1}`,
    End_Time: `${Math.floor(Math.random() * 24) + 1}:${Math.floor(Math.random() * 60) + 1}:${Math.floor(Math.random() * 60) + 1}`,
    Course_Name: Math.random() > 0.5 ? "pervasive" : "linux",
    Room_Name: Math.random() > 0.5 ? "genady" : "fahmy",
    Organizer_Email:`email${i + 1}@example.com`,
  }));

  const [searchValue, setSearchValue] = useState("");
  // State for search value
  const [meetingNameFilter, setMeetingNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [organizerEmailFilter, setOrganizerEmailFilter] = useState("");

  // Filtered data based on search value
  const filteredData = sampleData.filter(
    (item) =>
      item.id.toString().includes(searchValue) ||
      item.Meeting_Name.toLowerCase().includes(meetingNameFilter.toLowerCase()) &&
      item.Type.toLowerCase().includes(typeFilter.toLowerCase()) &&
      item.Date.includes(dateFilter) &&
      item.Organizer_Email.toLowerCase().includes(organizerEmailFilter.toLowerCase())
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
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1300px]">
            <div className="flex flex-col items-center w-[60%] md:w-full">
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
              </div>
              <div className="self-stretch h-px mt-[3px] bg-white-A700_01" />
            </div>
            <Heading size="lg"className="mt-3.5 mb-3.5 !text-white-A700_01 !font-saira">
              Meetings
            </Heading>
          </div>
        </header>
        <div className="flex justify-between mb-4 mt-4 mr-[50px]">
          <div>
            <Input
              color="white_A700_01"
              size="sm"
              shape="square"
              name="search"
              placeholder="Search by Meeting ID"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className=" ml-[25px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
            />
          </div>
          <div>
            <Button
                size="md"
                leftIcon={
                  <img
                    src="images/door.png"
                    alt="userfill_one"
                    className="mr-[10px] self-stretch h-[30px] md:h-auto my-2"
                  />
                }
                className="sm:pr-5 tracking-[1.00px] font-roboto w-full rounded-[24px]"
                onClick={handleLogin}
              >
                Add Meeting
            </Button>
          </div>
        </div>
        <div className="h-[682px] mr-[5px] ml-[5px] overflow-y-auto border border-gray-300 rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meeting ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meeting Name
                  <select
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    value={meetingNameFilter}
                    onChange={(e) => setMeetingNameFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="pervasive">Pervasive</option>
                    <option value="linux">Linux</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                  <select
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="lab">Lab</option>
                    <option value="lecture">Lecture</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                  <input
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organizer Email
                  <select
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    value={organizerEmailFilter}
                    onChange={(e) => setOrganizerEmailFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    {Array.from(new Set(sampleData.map(item => item.Organizer_Email))).map(email => (
                      <option key={email} value={email}>{email}</option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href="../MeetingDetails">{row.id}</a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Meeting_Name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Start_Time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.End_Time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Course_Name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Room_Name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Organizer_Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
