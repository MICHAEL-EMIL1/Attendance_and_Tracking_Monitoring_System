import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading } from "../../components";
import { Link } from "react-router-dom";

export default function Page3monitroingPage() {
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

  useEffect(() => {
    getUniqueValuesFromColumn();
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleBuildingFilterChange = (e) => {
    setBuildingFilter(e.target.value === "No Data" ? "" : e.target.value);
  };

  const handleFloorFilterChange = (e) => {
    setFloorFilter(e.target.value === "No Data" ? "" : e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value === "No Data" ? "" : e.target.value);
  };

  const filteredData = sampleData.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (buildingFilter === "" || item.building === buildingFilter) &&
      (floorFilter === "" || item.floor === floorFilter) &&
      (statusFilter === "" || item.status === statusFilter)
    );
  });

  const getUniqueValuesFromColumn = () => {
    const uniqueBuildingValues = ["", ...new Set(sampleData.map(item => item.building))];
    const uniqueFloorValues = ["", ...new Set(sampleData.map(item => item.floor))];
    const uniqueStatusValues = ["", ...new Set(sampleData.map(item => item.status))];

    // Update select options
    updateSelectOptions(uniqueBuildingValues, "#building-filter");
    updateSelectOptions(uniqueFloorValues, "#floor-filter");
    updateSelectOptions(uniqueStatusValues, "#status-filter");
  };

  const updateSelectOptions = (values, selector) => {
    const selectElement = document.querySelector(selector);
    selectElement.innerHTML = ""; // Clear existing options
    values.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      selectElement.add(option);
    });
  };

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
      <div className="p-5 ">
        <div className="flex justify-between mb-4 ">
          <div className="">
            <Input
              color="white_A700_01"
              size="sm"
              type="text"
              shape="square"
              name="search"
              placeholder="Search by Room Name..."
              value={searchValue}
              onChange={handleInputChange}
              className="mr-[26px] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
            />
          </div>
          <div className="">
            <Button
              size="md"
              leftIcon={
                <img
                  src="images/door.png"
                  alt="userfill_one"
                  className="self-stretch h-[30px] md:h-auto my-2"
                />
              }
              className="gap-[17px] sm:pr-5 tracking-[1.00px] font-roboto w-full rounded-[24px]"
            >
              Add Rooms
            </Button>
          </div>
        </div>
        <div className="h-[630px] overflow-y-auto border border-gray-300 rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Building
                  <select id="building-filter" className="table-filter border-4 w-[50%] ml-[8px] pt-[2px]" onChange={handleBuildingFilterChange}>
                    <option value="">No Data</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Floor
                  <select id="floor-filter" className="table-filter border-4 w-[50%] ml-[8px] pt-[2px]" onChange={handleFloorFilterChange}>
                    <option value="">No Data</option>
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
                  <select id="status-filter" className="table-filter border-4 w-[50%] ml-[8px] pt-[2px]" onChange={handleStatusFilterChange}>
                    <option value="all">No Data</option>
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
      </div>
    </>
  );
}
