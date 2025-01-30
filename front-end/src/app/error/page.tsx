"use client";

import React from "react";
import Button from "../../components/ui/buttom/button";

const ErrorPage = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-red-700">Error</h1>
        <p className="mt-4 text-lg text-red-600">
          An error occurred. Please try again later.
        </p>

        <Button description="Try again" onClick={() => window.history.back()} />
      </div>
    </>
  );
};

export default ErrorPage;
