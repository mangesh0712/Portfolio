import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import SocialSites from "./SocialSites";

function SideBar() {
  return (
    <div className="w-full lg:fixed  lg:h-screen h-auto lg:w-3/12 bg-black rounded-sm">
      {/* PROFILE */}
      <Profile />
      {/* NAVBAR */}
      <Navbar />
      {/* SOCIAL SITES */}
      <SocialSites />
    </div>
  );
}

export default SideBar;
