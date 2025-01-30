"use client";

import React from "react";
import Button from "../../components/ui/buttom/button";

const SuccessPage = () => {
  const OpenWorkButton = () => {
    // This is a button that will take the user to the work page in vscode
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-secondary">Succes</h1>
      <p className="mt-4 text-lg text-secondary">
        Your new project has been created successfully.
      </p>

      <Button description="Go to work" onClick={() => window.history.back()} />
    </div>
  );
};

export default SuccessPage;
