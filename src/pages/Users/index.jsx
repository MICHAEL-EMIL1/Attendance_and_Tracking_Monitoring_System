import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, SelectBox, Button, Text, Input, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function UsersPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Navigate to the home page upon login
    navigate("/ModifyUsers");
  };
  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[27px] gap-[22px] sm:pb-5 bg-white-A700_01">
        <header className="flex justify-center items-center p-2.5 bg-indigo-800">
          <div className="flex flex-col items-center justify-center w-[80%] mt-[5px] mr-[22px] gap-[7px]">
            <div className="flex md:flex-col self-stretch justify-between items-start gap-5">
              <div className="flex w-[78%] md:w-full mb-1.5 pt-[3px]">
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
                    <a href="../Page3monitroingtimestampforallusers" className="self-start">
                        <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                          Monitoring Users
                        </Heading>
                    </a>
                    <a href="../ModifyUsers" className="self-start">
                        <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                          Modify Users
                        </Heading>
                    </a>
                    <a href="../NewReservation" className="self-start">
                      <Heading size="md" as="h4" className="!text-blue_gray-100 !font-saira">
                        New Reservation
                      </Heading>
                    </a>
                  </div>
                  <div className="h-px bg-white-A700_01" />
                </div>
              </div>
              <Heading size="md" as="h4" className="mt-[13px] !text-white-A700_01 !font-saira">
                Users Managment
              </Heading>
            </div>
          </div>
        </header>
        <div className="w-full mx-auto md:p-5 max-w-[1394px]">
          <div>
            <div className="flex flex-col items-end gap-[51px]">
              <div className="flex md:flex-col justify-between items-start w-[86%] md:w-full mr-2 gap-5">
              <Input
                    color="white_A700_01"
                    size="sm"
                    shape="square"
                    name="search"
                    placeholder="SEARCH user..."
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e)}
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={19} width={19} fillColor="#000000ff" />
                      ) : (
                        <Img
                          src="images/img_svgrepoiconcarrier.svg"
                          alt="SVGRepo_iconCarrier"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[49%] gap-[35px] tracking-[2.00px] uppercase border-black-900 border-2 border-solid"
                  />
                  <Button
                    onClick={handleLogin}
                    size="md"
                    leftIcon={<Img src="images/img_vector.svg" alt="Vector" />}
                    className="gap-[17px] sm:pr-5 tracking-[1.00px] font-roboto min-w-[169px] rounded-[24px]"
                  >
                    Add User
                  </Button>
              </div>
              <div className="self-stretch py-[51px] md:py-5 bg-gray-100_04">
                <div className="flex md:flex-col justify-between items-start mt-[-549px] mb-[465px] gap-5 px-[52px] md:px-5">
                  <div className="flex sm:flex-col justify-between items-end w-[79%] md:w-full gap-5">
                    <div className="flex justify-between w-[20%] sm:w-full mb-[3px] gap-5">
                      <Text size="s" as="p" className="self-start mb-1 tracking-[1.00px] !font-roboto text-center">
                        Name
                      </Text>
                      <Text size="s" as="p" className="self-end tracking-[1.00px] !font-roboto text-center">
                        Email
                      </Text>
                    </div>
                    <Text size="s" as="p" className="mb-0.5 tracking-[1.00px] !font-roboto text-center">
                      Password
                    </Text>
                    <Text size="s" as="p" className="tracking-[1.00px] !font-roboto text-center">
                      ID
                    </Text>
                    <Text size="s" as="p" className="tracking-[1.00px] !font-roboto text-center">
                      Department-ID
                    </Text>
                    <Text size="s" as="p" className="mb-[3px] tracking-[1.00px] !font-roboto text-center">
                      Role
                    </Text>
                  </div>
                  <Text size="s" as="p" className="mr-[23px] tracking-[1.00px] !font-roboto text-center">
                    Action
                  </Text>
                </div>
                <div className="p-2.5 z-[1] bg-white-A700_01">
                  <div className="flex flex-col items-end mt-3.5">
                    <div className="flex justify-between items-center w-[24%] md:w-full mr-[74px] gap-5">
                      <SelectBox
                        shape="round"
                        indicator={<Img src="images/img_chevron.svg" alt="Chevron" />}
                        name="role_one"
                        placeholder="role.."
                        options={dropDownOptions}
                        className="w-[39%] gap-px sm:pr-5 font-montserrat"
                      />
                      <Img
                        src="images/img_span_icon_wrapper.svg"
                        alt="spanicon_one"
                        className="h-[43px] rounded-[10px]"
                      />
                    </div>
                    <div className="self-stretch h-[280px] mt-[5px] z-[1] relative">
                      <div className="flex justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="flex justify-between items-start mt-[18px] pt-[7px] gap-5 px-[7px] bg-gray-100_03 flex-1">
                          <SelectBox
                            size="sm"
                            variant="dropdown1"
                            shape="square"
                            indicator={<Img src="images/img_chevron.svg" alt="Chevron" />}
                            name="role_two"
                            placeholder="role.."
                            options={dropDownOptions}
                            className="w-[42%] ml-[972px] gap-px sm:pt-5 sm:pr-5 text-gray-700 font-montserrat"
                          />
                          <Button shape="round" className="mt-1.5 mr-[67px]">
                            <Img src="images/img_span_icon_wrapper_black_900.svg" />
                          </Button>
                        </div>
                        <Img
                          src="images/img_thumb_size_75.svg"
                          alt="thumbsizesevent"
                          className="h-[280px] ml-[-15px]"
                        />
                      </div>
                      <div className="flex flex-col items-end w-full gap-[26px] bottom-[11%] right-0 left-0 m-auto absolute">
                        <div className="flex justify-between items-center w-[23%] md:w-full mr-[63px] gap-5">
                          <SelectBox
                            shape="round"
                            indicator={<Img src="images/img_chevron.svg" alt="Chevron" />}
                            name="role_three"
                            placeholder="role.."
                            options={dropDownOptions}
                            className="self-end w-[39%] gap-px sm:pr-5 font-montserrat"
                          />
                          <div className="flex justify-center w-[16%] p-[7px] bg-gray-200_01 shadow-xs rounded-[10px]">
                            <Img
                              src="images/img_span_icon_wrapper.svg"
                              alt="vector_one"
                              className="self-end h-[24px] w-[24px] mt-1"
                            />
                          </div>
                        </div>
                        <div className="flex self-stretch justify-between items-start pt-[5px] gap-5 px-[5px] bg-gray-100_05">
                          <SelectBox
                            size="sm"
                            variant="dropdown1"
                            shape="square"
                            indicator={<Img src="images/img_chevron.svg" alt="Chevron" />}
                            name="role_four"
                            placeholder="role.."
                            options={dropDownOptions}
                            className="w-[41%] ml-[969px] gap-px sm:pt-5 sm:pr-5 text-gray-700 font-montserrat"
                          />
                          <Button color="gray_200_01" shape="round" className="mt-[9px] mr-[59px]">
                            <Img src="images/img_span_icon_wrapper.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[24%] md:w-full mt-[-3px] mr-[73px] gap-5">
                      <SelectBox
                        shape="round"
                        indicator={<Img src="images/img_chevron.svg" alt="Chevron" />}
                        name="role_five"
                        placeholder="role.."
                        options={dropDownOptions}
                        className="w-[39%] gap-px sm:pr-5 font-montserrat"
                      />
                      <Img
                        src="images/img_span_icon_wrapper.svg"
                        alt="spanicon_five"
                        className="h-[43px] rounded-[10px]"
                      />
                    </div>
                    <div className="flex self-stretch justify-between items-start mt-[33px] gap-5 px-[73px] md:px-5 bg-gray-200">
                      <SelectBox
                        size="md"
                        variant="dropdown1"
                        shape="square"
                        indicator={<Img src="images/img_chevron.svg" alt="Chevron" />}
                        name="role_six"
                        placeholder="role.."
                        options={dropDownOptions}
                        className="w-[42%] ml-[905px] gap-px sm:pr-5 sm:py-5 text-gray-700 font-montserrat"
                      />
                      <div className="flex justify-center w-[15%] mt-[15px] p-[7px] bg-gray-200_01 shadow-xs rounded-[10px]">
                        <Img
                          src="images/img_span_icon_wrapper.svg"
                          alt="vector_three"
                          className="self-end h-[24px] w-[23px] mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
