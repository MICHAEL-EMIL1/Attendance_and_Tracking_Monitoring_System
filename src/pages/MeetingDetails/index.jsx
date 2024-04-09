import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

export default function ModifyUsers() {
    const sampleData = Array.from({ length: 200 }, (_, i) => ({
        Student_ID: i + 1,
        Student_FirstName: `First ${i + 1}`,
        Student_SecondName: `Second ${i + 1}`,
        Student_ThirdName: `Third ${i + 1}`,
        Login_Time: `${Math.floor(Math.random() * 24) + 1}:${
        Math.floor(Math.random() * 60) + 1
        }:${Math.floor(Math.random() * 60) + 1}`,
        Logout_Time: `${Math.floor(Math.random() * 24) + 1}:${
        Math.floor(Math.random() * 60) + 1
        }:${Math.floor(Math.random() * 60) + 1}`,
    }));

    return (
    <>
        <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta
        name="description"
        content="Web site created using create-react-app"
        />
        </Helmet>
        <div className="flex flex-col w-full md:pb-5 bg-white-A700">
        <header className="p-1 bg-indigo-800">
            <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1300px]">
                <div className="flex flex-col items-center w-[70%] md:w-full">
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
                    {/*<a href="../NewReservation">
                    <Heading
                        size="md"
                        as="h4"
                        className="!text-gray-300 !font-saira"
                    >
                        New Reservation
                    </Heading>
                    </a>*/}
                </div>
                <div className="self-stretch h-px mt-[3px] bg-white-A700_01" />
                </div>
                <Heading
                size="lg"
                className="mt-3.5 mb-3.5 !text-white-A700_01 !font-saira"
                >
                Meetings Details
                </Heading>
            </div>
        </header>
        <div className="flex space-x-2 p-5">
            <Text>Meeting ID: </Text>
            <Text>1</Text>
        </div>
        <div className="h-[615px] overflow-y-auto border m-[10px] mt-[2px] border-gray-300 rounded">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="sticky top-0 bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student First Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Second Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Third Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Login Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Logout Time
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {sampleData.map((row) => (
                    <tr key={row.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Student_ID}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Student_FirstName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Student_SecondName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Student_ThirdName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Login_Time}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.Logout_Time}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </>
    );
}
