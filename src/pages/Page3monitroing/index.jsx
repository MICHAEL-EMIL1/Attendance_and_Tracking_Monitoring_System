import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading } from "../../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Page3monitroingPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleNavigate = () => {
    // Navigate to the desired page
    navigate('/AddRooms');
  };
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    building: `Building ${Math.floor(Math.random() * 10) + 1}`,
    floor: `Floor ${Math.floor(Math.random() * 5) + 1}`,
    name: `Room ${i + 1}`,
    IP: `${Math.floor(Math.random() * 255) + 1}.${Math.floor(
      Math.random() * 255
    ) + 1}.${Math.floor(Math.random() * 255) + 1}.${Math.floor(
      Math.random() * 255
    ) + 1}`,
    status: Math.random() > 0.5 ? "Idle" : "Active",
  }));
  const [searchValue, setSearchValue] = useState("");
  const [buildingFilter, setBuildingFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredData = sampleData.filter((item) => {
    const buildingg = buildingFilter === "" || item.building.toLowerCase().includes(buildingFilter.toLowerCase());
    const floorr = floorFilter === "" || item.floor.toLowerCase() === floorFilter.toLowerCase();
    const statuss = statusFilter === "" || item.status.toLowerCase().includes(statusFilter.toLowerCase());
  
    // Return true only if all conditions match
    return buildingg && floorr && statuss;
  });

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <header className="p-1 bg-indigo-800">
        <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1300px]">
          <div className="flex flex-col items-center w-[60%] md:w-full">
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
              <a href="../Meetings">
                <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                  Meetings
                </Heading>
              </a>
            </div>
            <div className="self-stretch h-px mt-[3px] bg-white-A700_01" />
          </div>
          <Heading size="lg" className="mt-3.5 mb-3.5 !text-white-A700_01 !font-saira">
            Monitoring Rooms
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
              placeholder="Search by Room ID"
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
                onClick={handleNavigate}
              >
                Add Room
            </Button>
          </div>
        </div>
      <div className="h-[684px] ml-[5px] mr-[5px] overflow-y-auto border border-gray-300 rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Building
                <select
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    value={buildingFilter }
                    onChange={(e) => setBuildingFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    {Array.from(new Set(sampleData.map(item => item.building))).map(building => (
                      <option key={building} value={building}>{building}</option>
                    ))}
                </select>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Floor
                <select
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    value={floorFilter}
                    onChange={(e) => setFloorFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    {Array.from(new Set(sampleData.map(item => item.floor))).map(floor => (
                      <option key={floor} value={floor}>{floor}</option>
                    ))}
                </select>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IP
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
                <select
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Idle">Idle</option>
                  </select>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`../ModifyRooms`}>{row.id}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.building}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.floor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.IP}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
