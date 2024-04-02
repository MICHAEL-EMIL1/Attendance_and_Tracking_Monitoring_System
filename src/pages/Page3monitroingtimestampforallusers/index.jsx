import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Input, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Page3monitroingPage() {
  // Sample data for the table
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    firstName: `First ${i + 1}`,
    middleName: `Middle ${i + 1}`,
    lastName: `Last ${i + 1}`,
    email: `email${i + 1}@example.com`,
    password: `password${i + 1}`,
    ssn: `SSN-${i + 1}`,
    token: `Token-${i + 1}`,
    role: Math.random() > 0.5 ? "Admin" : "User",
  }));

  // State for search value
  const [searchValue, setSearchValue] = useState("");

  // Filtered data based on search value
  const filteredData = sampleData.filter(
    (item) =>
      item.id.toString().includes(searchValue) ||
      item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.middleName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.password.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.ssn.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.token.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.role.toLowerCase().includes(searchValue.toLowerCase())
  );

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Navigate to the home page upon login
    navigate("/AddUsers");
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
              <a href="../Page3monitroing">
                <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                  Monitoring Rooms
                </Heading>
              </a>
              <a href="../Meetings">
                <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                  Meetings
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
            Monitoring Users
          </Heading>
        </div>
      </header>
      <div className="p-5 ">
        <div className="mb-4">
          <Input
            color="white_A700_01"
            size="sm"
            type="search"
            shape="square"
            placeholder="Search by Room ID or Name..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-[18%] mr-[26px] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
          />
        </div>
        <div className="ml-[1200px] mt-[-60px] mb-[15px]">
          <Button
            onClick={handleLogin}
            size="md"
            leftIcon={<Img src="images/img_vector.svg" alt="Vector" />}
            className="gap-[17px] sm:pr-5 tracking-[1.00px] font-roboto min-w-[169px] rounded-[24px]"
            >
            Add User
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
                  First Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Middle Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SSN
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.middleName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.password}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.ssn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
