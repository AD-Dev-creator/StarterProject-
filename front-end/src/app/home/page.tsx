"use client";

import React from "react";
import SideBar from "@/src/component/ui/sideBar/side";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-lightGray flex-1">
        <h1 className="text-5xl font-poppins">
          Welcome to the Starter Project !
        </h1>

        <p className="mt-5 text-sm font-sans">
          Our mission is to enable our users to launch their projects easily and
          efficiently.
        </p>
      </div>
    </>
  );
};

export default HomePage;
