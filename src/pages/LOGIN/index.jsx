import React from "react";
import { Helmet } from "react-helmet";
import { Button, CheckBox, Input, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

export default function LOGINPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Navigate to the home page upon login
    navigate("/home1");
  };

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[97px] gap-[77px] md:pb-5 bg-gray-50">
        <div className="flex flex-col items-start w-[43%] md:w-full gap-[25px] p-[25px] border-blue-800 border-[5px] border-solid bg-indigo-800_01">
          <Heading size="xl" as="h1" className="mt-5 ml-1.5 !text-white-A700_01 !font-saira">
            Welcome to Attendance & Tracking Monitoring System!
          </Heading>
          <Heading size="xl" as="h2" className="!text-white-A700_01 !font-saira pl-[78%]">
            Login
          </Heading>
        </div>
        <div className="flex flex-col items-center w-full mx-auto md:p-5 max-w-[1016px]">
          <div className="flex flex-col items-center justify-end mt-[27px] gap-[50px] p-[29px] bg-white-A700_01 shadow-lg rounded-lg">
            <h1 className="mt-8 text-3xl">
              Login
            </h1>
            <form>
              <div className="self-stretch pb-4">
                <Input
                  shape="round"
                  type="text"
                  name="userName"
                  placeholder="Username"
                  className="sm:pr-5 p-5"
                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="mt-[22px] sm:pr-5 p-5"
                />
                <div className="flex justify-between mt-8 ml-6 pb-[12px] gap-5 sm:pb-3 sm:pr-5">
                  <CheckBox
                    shape="square"
                    name="rememberme"
                    label=" Remember me"
                    id="rememberme"
                    className="gap-2 text-gray-900_01 font-roboto text-left"
                  />
                  <a href="#" className="text-indigo-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <Button
                onClick={handleLogin} // Attach handleLogin function to the onClick event
                type="button"
                color="indigo_A700"
                size="sm"
                className="  mb-[19px] sm:px-5 font-roboto font-bold border-gray-600_01 border-2 border-solid min-w-[400px] rounded-md"
              >
                WELCOME Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
