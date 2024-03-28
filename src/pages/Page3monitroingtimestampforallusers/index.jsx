import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import Page3MonitroingScrollbar from "../../components/Page3MonitroingScrollbar";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  { name: "X", id: "20", entertime: "8 AM", exittime: "9:30AM" },
  { name: "Y", id: "1580", entertime: "8:15 AM", exittime: "9:00AM" },
  { name: "Z", id: "900", entertime: "9 AM", exittime: "9:20 AM" },
  { name: "M", id: "80", entertime: "8:45 AM", exittime: "9:10 AM" },
];

export default function Page3monitroingtimestampforallusersPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-start gap-[3px]">
            <Img
              src="images/img_user_scan_duotone_line.svg"
              alt="userscan_one"
              className="h-[30px] w-[29px] mt-4 mb-[17px]"
            />
            <Heading as="h5" className="mt-4 tracking-[0.40px]">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Heading as="h3" className="pl-[35px] sm:pl-5">
            Name
          </Heading>
        ),
        meta: { width: "246px" },
      }),
      table1ColumnHelper.accessor("id", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h4" className="pl-[11px]">
            ID
          </Heading>
        ),
        meta: { width: "193px" },
      }),
      table1ColumnHelper.accessor("entertime", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h5" className="tracking-[1.00px]">
            Enter time
          </Heading>
        ),
        meta: { width: "293px" },
      }),
      table1ColumnHelper.accessor("exittime", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h6" className="pl-1.5 tracking-[1.00px]">
            Exit time
          </Heading>
        ),
        meta: { width: "596px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-10 gap-[9px] sm:pb-5 bg-white-A700_01">
        <header className="flex justify-center items-center p-2.5 bg-indigo-800">
          <div className="flex flex-col items-center justify-center w-[80%] mt-[7px] mr-[22px] gap-[7px]">
            <div className="flex md:flex-col self-stretch justify-between items-start gap-5">
              <div className="flex w-[68%] md:w-full mb-1.5 pt-[3px]">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-col justify-between items-center w-[96%] md:w-full gap-5">
                    <a href="../Home1" className="self-start">
                        <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                          Home
                        </Heading>
                    </a>
                    <a href="../Page3monitroing" className="self-start">
                        <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                          Monitoring AP
                        </Heading>
                    </a>
                    <a href="../user1" className="self-start">
                        <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                          Users
                        </Heading>
                    </a>
                    <a href="#" className="self-start">
                        <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                        Modify Users
                        </Heading>
                    </a>
                    <a href="#" className="self-start">
                      <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                        New Reservation
                      </Heading>
                    </a>
                  </div>
                  <div className="h-px bg-white-A700_01" />
                </div>
              </div>
              <Heading size="md" as="h4" className="mt-[13px] !text-white-A700_01 !font-saira">
                Monitoring Users
              </Heading>
            </div>
          </div>
        </header>
        <div className="w-full mx-auto md:p-5 max-w-[1357px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start ml-[58px] gap-[15px]">
              <div className="flex items-center">
                <Img src="images/img_group_fill.svg" alt="image" className="h-[24px] w-[24px]" />
                <Heading size="xs" as="h1" className="self-end tracking-[2.00px] !font-roboto">
                  Number of participation : 40
                </Heading>
              </div>
              <div className="flex items-center gap-[5px]">
                <Img src="images/img_flag_finish_fill.svg" alt="flagfinish_one" className="h-[24px] w-[24px]" />
                <Heading size="xs" as="h2" className="tracking-[2.00px] !font-roboto">
                  Event name : IOT Lecture{" "}
                </Heading>
              </div>
            </div>
            <div className="h-[593px] p-3.5 border-black-900 border border-solid bg-gray-200_02 shadow-bs relative">
              <div className="justify-center h-[561px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <ReactTable
                  size="sm"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "md:flex-col" }}
                  rowDataProps={{ className: "md:flex-col" }}
                  className="justify-center w-[1328px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute"
                  columns={table1Columns}
                  data={table1Data}
                />
                <Page3MonitroingScrollbar className="flex flex-col items-center justify-center w-[17px] h-max gap-[254px] right-0 bottom-0 top-0 p-0.5 my-auto bg-gray-100_01 absolute" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
