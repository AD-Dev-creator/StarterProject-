"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/src/component/ui/button/button";

const ErrorPage = () => {
  const router = useRouter();

  const navigateToTechnologySelectionPage = () => {
    router.push("/technology-selection");
  };

  return (
    <>
      <>
        <div className="flex flex-col items-center justify-center min-h-screen text-center  p-6">
          <h1 className="text-4xl font-poppins sm:text-3xl text-red-700 font-semibold mb-2">
            Oops! Something went wrong
          </h1>
          <p className="mt-4 text-lg text-red-600 font-sans text-base max-w-md mx-auto">
            An error occurred while creating the project. Please try again or
            contact support if the issue persists.
          </p>
          <Button
            description="Try again"
            onClick={navigateToTechnologySelectionPage}
          />
        </div>
      </>
    </>
  );
};

export default ErrorPage;
