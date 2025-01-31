"use client";

import React from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const createNewProject = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Name of the folder :", file.name);

      //^ Added the path of the repository
      //^ Stocked name and path of the repository in the local storage to use it in the next page

      router.push("/technology-selection");
    } else {
      console.log("None repository selected");
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const clickButtonNewProject = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-lightGray">
      <h1 className="text-3xl font-poppins sm:text-3xl">
        Welcome to the Starter Project!
      </h1>

      <p className="mt-3 text-xs sm:mt-5 sm:text-sm font-sans text-base">
        Welcome to the Starter Project! This project allows you to create new
        projects with ease. Click the button below to get started.
      </p>

      <div className="flex flex-col items-center space-y-4 mt-5">
        <button
          onClick={clickButtonNewProject}
          className="px-4 py-2 bg-accent text-white font-poppins mt-5 rounded hover:bg-highlight active:bg-accent"
        >
          Select your repository
        </button>
        {/* //^ This input is hidden and is used to select the repository */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={createNewProject}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default HomePage;
