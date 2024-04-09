import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading } from "../../components";
import { Link } from "react-router-dom";

export default function Page3monitroingPage() {
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    role: Math.random() > 0.5 ? "Admin" : "User",
    firstName: `First ${i + 1}`,
    middleName: `Middle ${i + 1}`,
    lastName: `Last ${i + 1}`,
    email: `email${i + 1}@example.com`,
    password: `password${i + 1}`,
    ssn: `SSN-${i + 1}`,
    token: `Token-${i + 1}`,
  }));

  const [searchValue, setSearchValue] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [firstNameFilter, setFirstNameFilter] = useState("");
  const [middleNameFilter, setMiddleNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  useEffect(() => {
    getUniqueValuesFromColumn();
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleIdFilterChange = (e) => {
    setIdFilter(e.target.value);
  };

  const handleRoleFilterChange = (e) => {
    setRoleFilter(e.target.value);
  };

  const handleFirstNameFilterChange = (e) => {
    setFirstNameFilter(e.target.value);
  };

  const handleMiddleNameFilterChange = (e) => {
    setMiddleNameFilter(e.target.value);
  };

  const handleEmailFilterChange = (e) => {
    setEmailFilter(e.target.value);
  };

  const filteredData = sampleData.filter((item) => {
    return (
      item.id.toString().includes(searchValue) &&
      (idFilter === "" || item.id === idFilter) &&
      (roleFilter === "" || item.role === roleFilter) &&
      (firstNameFilter === "" || item.firstName === firstNameFilter) &&
      (middleNameFilter === "" || item.middleName === middleNameFilter) &&
      (emailFilter === "" || item.email === emailFilter)
    );
  });

  const getUniqueValuesFromColumn = () => {
    const uniqueIdValues = ["", ...new Set(sampleData.map(item => item.id))];
    const uniqueRoleValues = ["", ...new Set(sampleData.map(item => item.role))];
    const uniqueFirstNameValues = ["", ...new Set(sampleData.map(item => item.firstName))];
    const uniqueMiddleNameValues = ["", ...new Set(sampleData.map(item => item.middleName))];
    const uniqueEmailValues = ["", ...new Set(sampleData.map(item => item.email))];

    updateSelectOptions(uniqueIdValues, "#id-filter");
    updateSelectOptions(uniqueRoleValues, "#role-filter");
    updateSelectOptions(uniqueFirstNameValues, "#firstname-filter");
    updateSelectOptions(uniqueMiddleNameValues, "#middlename-filter");
    updateSelectOptions(uniqueEmailValues, "#email-filter");
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
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                  <select id="id-filter" className="table-filter border-4 w-[60px] ml-[6px] pt-[2px] pl-[2px]" onChange={handleIdFilterChange}>
                    <option value="No Data">No Data</option>
                  </select>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                  <select id="role-filter" className="table-filter border-4 w-[100px] ml-[5px] pt-[2px]" onChange={handleRoleFilterChange}>
                    <option value="No Data">No Data</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First
                  <select id="firstname-filter" className="table-filter border-4 w-[60%] ml-[5px] pt-[2px]" onChange={handleFirstNameFilterChange}>
                    <option value="No Data">No Data</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Middle
                  <select id="middlename-filter" className="table-filter border-4 w-[60%] ml-[12px] pt-[2px]" onChange={handleMiddleNameFilterChange}>
                    <option value="No Data">No Data</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last 
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                  <select id="email-filter" className="table-filter border-4 w-[60%] ml-[12px] pt-[2px]" onChange={handleEmailFilterChange}>
                    <option value="No Data">No Data</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SSN
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Token
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.middleName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.password}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.ssn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.token}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
