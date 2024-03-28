import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Home1Page() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-4 bg-white-A700_01">
        <Sidebar
          width="288px !important"
          collapsedWidth="150px !important"
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="flex flex-col h-screen pb-[65px] top-0 md:pb-5 border-black-900 border border-solid bg-indigo-800_01 shadow-xl !sticky overflow-auto"
        >
          <div className="flex flex-col self-stretch items-start">
            <Heading size="lg" as="h2" className="ml-[11px] !text-white-A700_01 !font-segoeui">
              Smart Access Control System{" "}
            </Heading>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "7px",
                  gap: "15px",
                  alignSelf: "start",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "24px",
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "75.50px" } }}
              className="flex flex-col self-center items-center w-full mt-[100px]"
            >
              <MenuItem icon={<Img src="images/img_darhboard.svg" alt="dashboard_one" className="h-[24px] w-[24px]" />}>
                <a href="../Page3monitroing">Monitoring AP</a>
              </MenuItem>
              <MenuItem icon={<Img src="images/img_darhboard.svg" alt="dashboard_one" className="h-[24px] w-[24px]" />}>
                <a href="../page3monitroingtimestampforallusers">Monitoring Users</a>
              </MenuItem>
              <MenuItem icon={<Img src="images/img_group_light.svg" alt="image" className="h-[33px]" />}>
                <a href="../user1">User management</a>
              </MenuItem>
              <MenuItem icon={<Img src="images/img_group_light.svg" alt="image" className="h-[33px]" />}>
                <a href="../ModifyUsers">Modify Users</a>
              </MenuItem>
              <MenuItem icon={<Img src="images/img_desk_alt.svg" alt="deskalt_one" className="h-[24px] w-[24px]" />}>
                <a href="../NewReservation">New Reservation</a>
              </MenuItem>
            </Menu>
          </div>
        </Sidebar>
        <div className="flex flex-col gap-3.5 flex-1">
          <Heading size="md" as="h1" className="ml-5 mt-5 !font-black">
            New Reservations
          </Heading>
          <div
            className="new-reservations-container"
            style={{ width: "100%", maxHeight: "370px", overflowY: "auto", overflowX: "auto" }}
          >
            <div className="flex flex-wrap gap-[55px] bg-gray-100_04 pl-[25px] pb-[30px] ">
              <div className=" mt-[20px] bg-white-A700_01">
                  <Text className="p-[20px]">
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
              </div>
              <div className=" mt-[20px] bg-white-A700_01">
                  <Text className="p-[20px]">
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
              </div>
              <div className=" mt-[20px] bg-white-A700_01">
                  <Text className="p-[20px]">
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
              </div>
              <div className=" mt-[20px] bg-white-A700_01">
                  <Text className="p-[20px]">
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
              </div>
              <div className=" mt-[20px] bg-white-A700_01">
                  <Text className="p-[20px]">
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
              </div>
              <div className=" mt-[20px] bg-white-A700_01">
                  <Text className="p-[20px]">
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
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3.5 mt-[20px] bg-gray-100_04 h-[500px] w-[99.8%]">
            <div className="w-[150px] h-[50px] p-[10px] bg-amber-A700 rounded-[35px] m-[30px]">
                  <Text>
                    Idle Rooms
                  </Text>
            </div>
            <div className="w-[240px] h-[50px] p-[10px] bg-amber-A700 rounded-[35px] m-[30px] ml-[290px]">
                  <Text>
                    Current Meetings
                  </Text>
            </div>
            <div className="w-[280px] h-[50px] p-[10px] bg-amber-A700 rounded-[35px] m-[30px] ml-[200px]">
                  <Text>
                    Upcomming Meetings
                  </Text>
            </div>
            <div className="flex flex-col gap-[30px] w-[28%] h-[75%]	ml-[30px] mt-[-65px] p-[15px] bg-white-A700_01 overflow-y-auto">
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] w-[28%] h-[75%]	ml-[30px] mt-[-65px] p-[15px] bg-white-A700_01 overflow-y-auto">
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] w-[28%] h-[75%]	ml-[30px] mt-[-65px] p-[15px] bg-white-A700_01 overflow-y-auto">
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
              <div className="border-stone-950 border-b-8 ">
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
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
