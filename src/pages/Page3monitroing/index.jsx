import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Input } from "../../components";
import Page3MonitroingScrollbar from "../../components/Page3MonitroingScrollbar";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { acesspoint: "Hall 1", roomid: "20", place: "Floor 2", starttime: "8AM", endtime: "9:30AM", participation: "40" },
  { acesspoint: "Hall 2", roomid: "1580", place: "Floor 1", starttime: "12PM", endtime: "2:00PM", participation: "15" },
  { acesspoint: "Hall 3", roomid: "900", place: "Floor 3", starttime: "9:30AM", endtime: "7PM", participation: "50" },
  { acesspoint: "Hall 4", roomid: "80", place: "Floor 1", starttime: "10AM", endtime: "12PM", participation: "30" },
  { acesspoint: "Hall 4", roomid: "80", place: "Floor 1", starttime: "10AM", endtime: "12PM", participation: "30" },
  { acesspoint: "Hall 4", roomid: "80", place: "Floor 1", starttime: "10AM", endtime: "12PM", participation: "30" },
];

export default function Page3monitroingPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("acesspoint", {
        cell: (info) => (
          <div className="flex items-center gap-3 flex-1">
            <div className="h-[18px] w-[24%] bg-red-A700 rounded-[50%]" />
            <Heading as="h5" className="my-[38px] tracking-[0.40px]">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Heading as="h1" className="pt-px pb-2 pl-[7px]">
            Acess Point
          </Heading>
        ),
        meta: { width: "224px" },
      }),
      tableColumnHelper.accessor("roomid", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h2" className="pt-px pb-[9px]">
            Room ID
          </Heading>
        ),
        meta: { width: "165px" },
      }),
      tableColumnHelper.accessor("place", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h3" className="pt-px pb-2 px-px tracking-[1.00px]">
            Place
          </Heading>
        ),
        meta: { width: "149px" },
      }),
      tableColumnHelper.accessor("starttime", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h4" className="pt-px pb-2 tracking-[1.00px]">
            Start time
          </Heading>
        ),
        meta: { width: "179px" },
      }),
      tableColumnHelper.accessor("endtime", {
        cell: (info) => <Heading as="h5">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h5" className="pb-[9px] tracking-[1.00px]">
            End time
          </Heading>
        ),
        meta: { width: "175px" },
      }),
      tableColumnHelper.accessor("participation", {
        cell: (info) => (
          <div className="flex justify-between items-start gap-5 flex-1">
            <Heading as="h5" className="mt-2 mb-[18px] ml-[34px]">
              {info?.getValue?.()}
            </Heading>
            <Img src="images/img_expand_right.svg" alt="expandright_one" className="h-[24px] w-[24px] mt-[17px]" />
          </div>
        ),
        header: (info) => (
          <Heading as="h6" className="pt-px pb-[7px] tracking-[1.00px]">
            participation people
          </Heading>
        ),
        meta: { width: "238px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-9 gap-[18px] sm:pb-5 bg-white-A700_01">
        <header className="p-1 bg-indigo-800">
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1223px]">
            <div className="flex flex-col items-center w-[73%] md:w-full">
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
                    Users
                  </Heading>
                </a>
                <a href="#">
                  <Heading size="md" as="h4" className="self-start !text-gray-200_01 !font-saira">
                    Modify Users
                  </Heading>
                </a>
                <a href="#">
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
        <div className="flex flex-col items-end w-full gap-[38px] mx-auto md:p-5 max-w-[1357px]">
          <Input
            color="white_A700_01"
            size="sm"
            shape="square"
            name="search"
            placeholder="SEARCH RoomID..."
            value={searchBarValue3}
            onChange={(e) => setSearchBarValue3(e)}
            suffix={
              searchBarValue3?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue3("")} height={19} width={19} fillColor="#000000ff" />
              ) : (
                <Img src="images/img_svgrepoiconcarrier.svg" alt="SVGRepo_iconCarrier" className="cursor-pointer" />
              )
            }
            className="w-[18%] mr-[26px] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
          />
          <div className="self-stretch p-[26px] sm:p-5 border-black-900 border border-solid bg-gray-200_02 shadow-bs">
            <div className="mt-[3px] mb-3">
              <div className="flex md:flex-col justify-between items-start pl-[13px] gap-5 bg-white-A700">
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "md:flex-col" }}
                  rowDataProps={{ className: "md:flex-col" }}
                  className="w-[1130px] mt-[21px]"
                  columns={tableColumns}
                  data={tableData}
                />
                <Page3MonitroingScrollbar className="flex flex-col items-center justify-center w-[14px] pr-px gap-[237px] py-px bg-gray-100_01" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
