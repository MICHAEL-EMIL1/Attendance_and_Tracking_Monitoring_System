import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Text, Heading, Img, CheckBox } from "../../components";
import Page5NewRoomReservationRowviewOne from "../../components/Page5NewRoomReservationRowviewOne";

export default function NewReservation() {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <header className="p-1 bg-indigo-800">
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1223px]">
            <div className="flex flex-col items-center w-[80%] md:w-full">
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
                    Monitoring AP
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
                <a href="../user1">
                  <Heading
                    size="md"
                    as="h4"
                    className="self-start !text-gray-200_01 !font-saira"
                  >
                    User Managment
                  </Heading>
                </a>
                <a href="../ModifyUsers">
                  <Heading
                    size="md"
                    as="h4"
                    className="!text-gray-300 !font-saira"
                  >
                    Modify Users
                  </Heading>
                </a>
              </div>
              <div className="self-stretch h-px mt-[3px] bg-white-A700_01" />
            </div>
            <Heading
              size="md"
              as="h4"
              className="mt-3.5 mb-3.5 !text-white-A700_01 !font-saira"
            >
              New Reservation
            </Heading>
          </div>
        </header>
        <div className="w-full mx-auto md:p-5 max-w-[1417px]">
          <div className="flex md:flex-col justify-center items-center gap-[22px]">
            <div className="w-[20%] md:w-full pr-1 py-1 border-black-900 border border-solid bg-white-A700 shadow-sm">
              <div className="flex flex-col items-center mt-3 mb-11 gap-[74px] md:gap-[55px] sm:gap-[37px]">
                <div className="flex self-stretch justify-center items-center gap-0.5">
                  <div className="flex flex-col flex-1">
                    <div className="flex flex-col">
                      <div className="flex w-[85%] md:w-full ml-2 md:ml-0 z-[1]">
                        <div className="flex flex-col w-full">
                          <div className="flex items-center w-[77%] md:w-full ml-3 gap-[22px] md:ml-0">
                            <div className="self-end h-[18px] w-[13%] bg-green-A700_01 rounded-[50%]" />
                            <Heading
                              as="h1"
                              className="!text-green-A700 !font-black"
                            >
                              Idle rooms
                            </Heading>
                          </div>
                          <div className="h-px mt-3 ml-[9px] md:ml-0 bg-black-900" />
                          <Text
                            as="p"
                            className="w-[78%] md:w-full mt-[7px] !font-light"
                          >
                            <span className="text-black-900">-</span>
                            <span className="text-black-900 font-normal">
                              <>
                                Meeting room 1<br /> ID :: 1234
                                <br />
                                Location:: floor 2<br />
                              </>
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start mt-[-10px]">
                        <div className="flex flex-col md:flex-row sm:flex-col mt-6 gap-[17px] flex-1">
                          <div className="flex flex-col items-start mr-[3px] p-2 sm:mr-0 flex-1">
                            <Text
                              as="p"
                              className="w-[75%] md:w-full mt-[9px] !font-normal"
                            >
                              <>
                                Meeting room 2 <br />
                                ID :: 2324
                                <br />
                                Location :: floor 1
                              </>
                            </Text>
                          </div>
                          <div className="w-[239px] h-px bg-black-900" />
                          <div className="flex flex-col items-start ml-[3px] pb-[5px] px-[5px] sm:ml-0 flex-1">
                            <Text
                              as="p"
                              className="w-[63%] md:w-full mb-[23px] !font-normal"
                            >
                              <>
                                Meeting room 5<br />
                                ID :: 224
                                <br />
                                Location :: floor 1
                              </>
                            </Text>
                          </div>
                          <div className="w-[239px] h-px bg-black-900" />
                          <Text
                            as="p"
                            className="ml-2 mr-[9px] sm:mx-0 !font-normal"
                          >
                            <>
                              Meeting room 3<br />
                              ID :: 778
                              <br />
                              Location :: floor 3
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col w-[28%] ml-[-73px] gap-[151px] md:gap-[113px] sm:gap-[75px]">
                          <div className="flex flex-col gap-[102px] md:gap-[76px] sm:gap-[51px]">
                            <CheckBox
                              shape="square"
                              name="reserve"
                              label="Reserve"
                              id="reserve"
                              className="gap-[3px] px-px text-black-900 text-left text-base font-extrabold"
                            />
                            <div className="flex flex-col gap-[116px] md:gap-[87px] sm:gap-[58px]">
                              <CheckBox
                                shape="square"
                                name="reserve_one"
                                label="Reserve"
                                id="reserveone"
                                className="gap-[3px] px-px text-black-900 text-left text-base font-extrabold"
                              />
                              <CheckBox
                                shape="square"
                                name="reserve_two"
                                label="Reserve"
                                id="reservetwo"
                                className="pl-[3px] pr-[15px] gap-[3px] text-black-900 text-left text-base font-extrabold"
                              />
                            </div>
                          </div>
                          <Page5NewRoomReservationRowviewOne className="flex items-center gap-[3px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[248px] w-[6px] rotate-[180deg] bg-black-900 rounded-[50%]" />
                </div>
                <div className="h-px w-[89%] bg-black-900" />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 flex-1">
              <div className="flex justify-between items-center w-[84%] md:w-full ml-[757px] gap-5 md:ml-0">
                <Heading
                  as="h2"
                  className="self-end !text-black-900 !font-sansation !font-bold"
                >
                  Date{" "}
                </Heading>
                <Input
                  size="xs"
                  shape="square"
                  name="search"
                  placeholder={`SEARCH...`}
                  value={searchBarValue9}
                  onChange={(e) => setSearchBarValue9(e)}
                  suffix={
                    searchBarValue9?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue9("")}
                        height={19}
                        width={19}
                        fillColor="#000000ff"
                      />
                    ) : (
                      <Img
                        src="images/img_svgrepoiconcarrier.svg"
                        alt="SVGRepo_iconCarrier"
                        className="cursor-pointer"
                      />
                    )
                  }
                  className="w-[72%] gap-[35px] text-gray-600 tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
                />
              </div>
              <Heading
                size="md"
                as="h3"
                className="ml-8 md:ml-0 !text-black-900 !font-sansation !font-bold"
              >
                New Meeting reservation
              </Heading>
              <div className="flex p-[35px] sm:p-5 bg-gray-100 shadow-bs rounded-[50px]">
                <div className="flex flex-col items-start w-[95%] md:w-full mt-[50px] mb-[57px] gap-[121px] md:gap-[90px] sm:gap-[60px]">
                  <div className="flex md:flex-col justify-between w-[84%] md:w-full gap-5">
                    <div className="flex justify-center items-center w-[31%] md:w-full gap-[11px]">
                      <Text size="s" as="p" className="!font-rubik">
                        Room ID
                      </Text>
                      <Input
                        size="sm"
                        name="edittext"
                        className="flex-1 rounded-[20px]"
                      />
                    </div>
                    <div className="flex items-center w-[42%] md:w-full gap-[17px]">
                      <Text size="s" as="p" className="self-end !font-rubik">
                        Meeting\&#96;s name
                      </Text>
                      <Input
                        size="sm"
                        name="edittext_one"
                        className="flex-1 rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-between w-[78%] md:w-full gap-5">
                    <div className="flex justify-center items-center w-[35%] sm:w-full gap-[7px]">
                      <Text size="s" as="p" className="!font-rubik">
                        Start Time{" "}
                      </Text>
                      <Input
                        size="sm"
                        name="edittext_two"
                        className="flex-1 rounded-[20px]"
                      />
                    </div>
                    <div className="flex self-start justify-center items-start w-[35%] sm:w-full gap-5">
                      <Text size="s" as="p" className="mt-[3px] !font-rubik">
                        End Time{" "}
                      </Text>
                      <Input
                        size="sm"
                        name="edittext_three"
                        className="flex-1 rounded-[20px]"
                      />
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full ml-[800px] md:ml-0 sm:px-5 font-rubik font-bold rounded-[27px]"
                  >
                    Reserve Room
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
