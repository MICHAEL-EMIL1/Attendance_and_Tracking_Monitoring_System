import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route components
import NotFound from "pages/NotFound";
import Users from "pages/Users";
import LOGIN from "pages/LOGIN";
import Home1 from "pages/Home1";
import Page3monitroing from "pages/Page3monitroing";
import Page3monitroingtimestampforallusers from "pages/Page3monitroingtimestampforallusers";
import ModifyRooms from "pages/ModifyRooms";
import AddRooms from "pages/AddRooms";
import Meetings from "pages/Meetings";
import AddMeeting from "pages/AddMeeting";
import MeetingDetails from "pages/MeetingDetails";
import AddUsers from "pages/AddUsers";
import NewReservation from "pages/NewReservation";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LOGIN />} />
      <Route path="home1" element={<Home1 />} />
      <Route path="page3monitroing" element={<Page3monitroing />} />
      <Route path="page3monitroingtimestampforallusers" element={<Page3monitroingtimestampforallusers />} />
      <Route path="user1" element={<Users />} />
      <Route path="ModifyRooms" element={<ModifyRooms />} />
      <Route path="AddRooms" element={<AddRooms />} />
      <Route path="AddUsers" element={<AddUsers />} />
      <Route path="AddUsers" element={<AddUsers />} />
      <Route path="Meetings" element={<Meetings />} />
      <Route path="AddMeeting" element={<AddMeeting />} />
      <Route path="MeetingDetails" element={<MeetingDetails />} />
      <Route path="NewReservation" element={<NewReservation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default ProjectRoutes;