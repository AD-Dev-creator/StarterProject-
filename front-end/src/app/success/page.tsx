"use client";

import React from "react";
import Button from "@/src/component/ui/button/button";

const SuccessPage = () => {
  const OpenWorkButton = () => {
    // This is a button open the project in the code editor of the user
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-poppins sm:text-3xl">Succes</h1>
      <p className="mt-3 text-xs sm:mt-5 sm:text-sm font-sans text-base">
        Your new project has been created successfully.
      </p>

      <Button description="Go to work" onClick={() => window.history.back()} />
    </div>
  );
};

export default SuccessPage;
