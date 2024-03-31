import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Input, Heading } from "../../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Page3monitroingPage() {
  // Sample data for the table
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    building: `Building ${Math.floor(Math.random() * 10) + 1}`,
    floor: `Floor ${Math.floor(Math.random() * 5) + 1}`,
    name: `Room ${i + 1}`,
    status: Math.random() > 0.5 ? "Idle" : "Active",
  }));

  // State for search value
  const [searchValue, setSearchValue] = useState("");

  // Filtered data based on search value
  const filteredData = sampleData.filter(
    (item) => item.id.toString().includes(searchValue)
  );
  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleLogin = () => {
    // Navigate to the home page upon login
    navigate("/AddRooms");
  };

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <header className="p-1 bg-indigo-800">
        <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1223px]">
          <div className="flex flex-col items-center w-[78%] md:w-full">
            <div className="flex sm:flex-col justify-between w-[98%] md:w-full gap-5">
              <a href="../Home1" className="self-start">
                <Heading size="md" as="h4" className="!text-gray-300 !font-saira">
                  Home
                </Heading>
              </a>
              <a href="../Page3monitroingtimestampforallusers">
                <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                  Monitoring Users
                </Heading>
              </a>
              <a href="../user1">
                <Heading size="md" as="h4" className="!text-gray-300 !font-saira">
                  User Management
                </Heading>
              </a>
              <a href="../ModifyUsers">
                <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                  Modify Users
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
          <Heading size="md" as="h4" className="mt-3.5 mb-3.5 !text-white-A700_01 !font-saira">
            Monitoring AP
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
            placeholder="Search by Room ID..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-[18%] mr-[26px] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
          />
        </div>
        <div className="ml-[1250px] mt-[-60px] mb-[15px]">
          <Button
            onClick={handleLogin}
            size="md"
            leftIcon={<Img src="images/img_vector.svg" alt="Vector" />}
            className="gap-[17px] sm:pr-5 tracking-[1.00px] font-roboto min-w-[169px] rounded-[24px]"
            >
            Add Rooms
          </Button>
        </div>
        <div className="h-[650px] overflow-y-auto border border-gray-300 rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Building
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Floor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                   <Link to={`../ModifyRooms`}>{row.id}</Link> {/* ${row.id}*/}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.building}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.floor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
