"use client";

import React from "react";
import SideBar from "@/src/component/ui/sideBar/side";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-lightGray flex-1">
      <h1 className="text-3xl font-poppins">Welcome to Starter Project !</h1>

      <p className="mt-5 text-sm font-sans">
        This project was developed to facilitate the creation of new projects.{" "}
      </p>
    </div>
  );
};

export default HomePage;
