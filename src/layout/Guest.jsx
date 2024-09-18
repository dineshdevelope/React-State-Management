import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="bg-lime-50 min-h-screen rounded">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
