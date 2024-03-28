import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route components
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Users from "pages/Users";
import LOGIN from "pages/LOGIN";
import Home1 from "pages/Home1";
import Page3monitroing from "pages/Page3monitroing";
import Page3monitroingtimestampforallusers from "pages/Page3monitroingtimestampforallusers";
import ModifyUsers from "pages/ModifyUsers";
import NewReservation from "pages/NewReservation";
const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LOGIN />} />
      <Route path="home1" element={<Home1 />} />
      <Route path="page3monitroing" element={<Page3monitroing />} />
      <Route path="page3monitroingtimestampforallusers" element={<Page3monitroingtimestampforallusers />} />
      <Route path="user1" element={<Users />} />
      <Route path="ModifyUsers" element={<ModifyUsers />} />
      <Route path="NewReservation" element={<NewReservation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default ProjectRoutes;