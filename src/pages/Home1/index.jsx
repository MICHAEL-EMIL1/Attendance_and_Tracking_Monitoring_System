import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Home1Page() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-5 bg-white-A700_01">
        <Sidebar
          width="288px !important"
          collapsedWidth="150px !important"
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="flex flex-col h-screen top-0 md:pb-5  border-black-900 border border-solid bg-indigo-800_01 shadow-xl !sticky overflow-auto"
        >
          <div className="flex flex-col self-stretch items-start">
            <Heading size="lg" as="h2" className="ml-[15px] mt-[5px] !text-white-A700_01 !font-segoeui">
              Smart Access Control System{" "}
            </Heading>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "7px",
                  gap: "12px",
                  alignSelf: "start",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "24px",
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "80.50px" } }}
              className="flex flex-col self-center items-center w-full mt-[80px]"
            >
              <MenuItem icon={<Img src="images/img_darhboard.svg" alt="dashboard_one" className="h-[24px] w-[24px]" />}>
                <a href="../Page3monitroing" className="w-[200px]">Monitoring Rooms</a>
              </MenuItem>
              <MenuItem icon={<Img src="images/img_darhboard.svg" alt="dashboard_one" className="h-[24px] w-[24px]" />}>
                <a href="../page3monitroingtimestampforallusers" className="w-[200px]">Monitoring Users</a>
              </MenuItem>
              <MenuItem icon={<Img src="images/img_darhboard.svg" alt="image" className="h-[24px] w-[24px]" />}>
                <a href="../Meetings" className="w-[200px]">Meetings</a>
              </MenuItem>
              {/*<MenuItem icon={<Img src="images/img_desk_alt.svg" alt="deskalt_one" className="h-[24px] w-[24px]" />}>
                <a href="../NewReservation" className="w-[200px]">New Reservation</a>
                </MenuItem>*/}
              <MenuItem icon={<Img src="images/img_signoutsqure.svg" alt="deskalt_one" className="h-[24px] w-[24px]" />}>
                <a href="/" className="w-[200px]">logout</a>
              </MenuItem>
            </Menu>
          </div>
        </Sidebar>
        <div className="grid grid-cols-1 md:ml-[170px] md:mt-[-740px] md:grid-cols-2 md:w-[calc(100% - 288px)] gap-4">
          <div className="">
            <Heading size="md" as="h1" className="ml-3 mt-5 mb-1 text-blue-900">
              New Reservations
            </Heading>
            <div className="flex flex-wrap justify-center gap-[25px] bg-slate-200 pb-[10px] h-[350px] w-[99%] overflow-y-auto rounded-[24px]">
                {[1, 2, 3, 4, 5, 6,7,8,9,10].map((index) => (
                  <div key={index} className="rounded-[24px] mt-[27px] bg-white-A700_01">
                    <Text className="text-lg p-[20px] text-blue-900">
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
                ))}
            </div>
          </div>
          <div className="">
            <Heading size="md" as="h1" className="ml-3 mt-5 mb-1 text-blue-900">
              Idle Rooms
            </Heading>
            <div className="flex flex-wrap justify-center gap-[25px] bg-slate-200 pb-[10px] h-[350px] w-[99%] overflow-y-auto rounded-[24px]">
                {[1, 2, 3, 4, 5, 6,7,8,9,10].map((index) => (
                  <div key={index} className="rounded-[24px] mt-[27px] bg-white-A700_01">
                    <Text className="text-lg p-[20px] text-blue-900">
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
                ))}
            </div>
          </div>
          <div className="">
            <Heading size="md" as="h1" className="ml-3 mt-5 mb-1 text-blue-900">
              Current Meetings
            </Heading>
            <div className="flex flex-wrap justify-center gap-[25px] bg-slate-200  pb-[30px] h-[350px] w-[99%] overflow-y-auto rounded-[24px]">
                {[1, 2, 3, 4, 5,6,7,8,9,10].map((index) => (
                  <div key={index} className="rounded-[24px] mt-[27px] bg-white-A700_01">
                    <Text className="text-lg p-[20px] text-blue-900">
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
                ))}
            </div>
          </div>
          <div className="">
            <Heading size="md" as="h1" className="ml-3 mt-5 mb-1 text-blue-900">
              Upcoming Meetings
            </Heading>
            <div className="flex flex-wrap justify-center gap-[25px] bg-slate-200 pb-[30px] h-[350px] w-[99%] overflow-y-auto rounded-[24px]">
                {[1, 2, 3, 4, 5, 6,7,8,9,10].map((index) => (
                  <div key={index} className="rounded-[24px] mt-[27px] bg-white-A700_01">
                    <Text className="text-lg p-[20px] text-blue-900">
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
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
