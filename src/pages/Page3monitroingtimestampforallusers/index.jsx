import React, { useState} from "react";
import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Page3monitroingPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleNavigate = () => {
    // Navigate to the desired page
    navigate('/AddRooms');
  };
  const sampleData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    role: Math.random() > 0.5 ? "Admin" : "Student",
    firstName: `First ${i + 1}`,
    middleName: `Middle ${i + 1}`,
    lastName: `Last ${i + 1}`,
    email: `email${i + 1}@example.com`,
    password: `password${i + 1}`,
    ssn: `SSN-${i + 1}`,
    token: `Token-${i + 1}`,
  }));

  const [roleFilter, setRoleFilter] = useState("");
  const [firstNameFilter, setFirstNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  const filteredData = sampleData.filter((item) => {
    // Check if there's a filter value for each field
    const roleMatch = roleFilter === "" || item.role.toLowerCase().includes(roleFilter.toLowerCase());
    const firstNameMatch = firstNameFilter === "" || item.firstName.toLowerCase() === firstNameFilter.toLowerCase();
    const emailMatch = emailFilter === "" || item.email.toLowerCase().includes(emailFilter.toLowerCase());
  
    // Return true only if all conditions match
    return roleMatch && firstNameMatch && emailMatch;
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
              <a href="../Page3monitroing">
                <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                  Monitoring Room
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
            Monitoring Users
          </Heading>
        </div>
      </header>
      <div className="p-5 ">
        <div className="flex w-64 mb-4 ">
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
              onClick={handleNavigate}
            >
              Add Users
            </Button>
        </div>
        <div className="h-[630px] overflow-y-auto border border-gray-300 rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                  <select
                      className="px-2 py-1 ml-1 border border-gray-300 rounded-md"
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                    >
                      <option value="">All</option>
                      <option value="Admin">Admin</option>
                      <option value="Student">Student</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First
                  <select
                      className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                      value={firstNameFilter}
                      onChange={(e) => setFirstNameFilter(e.target.value)}
                    >
                      <option value="">All</option>
                      {Array.from(new Set(sampleData.map(item => item.firstName))).map(firstName => (
                        <option key={firstName} value={firstName}>{firstName}</option>
                      ))}
                  </select>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Middle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last 
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                  <select
                      className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
                      value={emailFilter}
                      onChange={(e) => setEmailFilter(e.target.value)}
                    >
                      <option value="">All</option>
                      {Array.from(new Set(sampleData.map(item => item.email))).map(email => (
                        <option key={email} value={email}>{email}</option>
                      ))}
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
