import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading } from "../../components";

export default function ModifyUsers() {
  const validateForm = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const form = e.target;
    let isValid = true;

    // Iterate over form elements and validate each one
    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];
      if (element.tagName === "INPUT" || element.tagName === "SELECT") {
        // Check if the element is an input or select element
        if (!element.value.trim()) {
          // If the value is empty, show an alert and mark the form as invalid
          alert(`${element.name} must be filled out`);
          isValid = false;
          break; // Stop validation if any field is empty
        }
      }
    }

    // If all inputs are valid, proceed with form submission
    if (isValid) {
      // Add your form submission logic here
      alert("Form submitted");
      form.reset();
    }
  };

  return (
    <>
      <Helmet>
        <title>Attendance & tracking monitoring system</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[58px] gap-[30px] md:pb-5 bg-white-A700">
        <header className="p-1 bg-indigo-800">
          {/* Header content */}
          <div className="flex md:flex-col justify-between items-center w-full mt-3.5 gap-5 mx-auto md:p-5 max-w-[1300px]">
            <div className="flex flex-col items-center w-[75%] md:w-full">
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
                    className="self-start !text-gray-200_01 !font-saira"
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
              Add Users
            </Heading>
          </div>
        </header>
        <form name="myForm" onSubmit={validateForm}>
          <div className="w-full mx-auto md:p-5 max-w-[1375px]">
            <div className="flex flex-col gap-[13px]">
              <div className="flex p-[20px] sm:p-5 bg-gray-100_01 rounded-[20px] mt-[10px]">
                {/* Form content */}
                <div className="flex justify-between w-full gap-10">
                {/* Inputs Column */}
                <div className="flex flex-col w-[70%] gap-[20px]">
                  <div className="flex justify-center items-center gap-[40px]">
                    <Text as="p">First Name</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="firstname"
                      className="flex-1 bg-white-A700_01"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[13px]">
                    <Text as="p">Middle Name</Text>
                    <Input
                      shape="round"
                      name="middlename"
                      className="flex-1 bg-white-A700_01"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[42px]">
                    <Text as="p">Last Name</Text>
                    <Input
                      shape="round"
                      name="lastname"
                      className="flex-1 bg-white-A700_01"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[103px]">
                    <Text as="p">Email</Text>
                    <Input
                      shape="round"
                      name="email"
                      className="flex-1 bg-white-A700_01"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[53px]">
                    <Text as="p">Password</Text>
                    <Input
                      shape="round"
                      name="password"
                      type="password"
                      className="flex-1 bg-white-A700_01"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[117px]">
                    <Text as="p">SSN</Text>
                    <Input
                      shape="round"
                      name="SSN"
                      className="flex-1 bg-white-A700_01"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[117px]">
                    <Text as="p">Role</Text>
                    <select name="role" className=" p-[10px] flex-1 bg-white-A700_01">
                    <option value=""></option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>
                </div>
                {/* Image Column */}
                <div className="p-[20px] max-h-40 bg-white-A700_01 rounded-[33px] mr-[20px]">
                  <img
                    src="images/img_user_fill.svg"
                    alt="userfill_one"
                    className="self-stretch h-[110px] md:max-h-24 my-2"
                  />
                </div>
              </div>
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                shape="round"
                className="mt-5 sm:px-5 tracking-[1.00px] font-extrabold w-[25%] min-width-[20%]"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
