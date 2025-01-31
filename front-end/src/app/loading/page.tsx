"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
  // This page is displayed when the user is waiting for a response from the server.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ClipLoader size={50} color={"#123abc"} loading={true} />
      <h1 className="text-2xl mt-3 text-sizeColor font-bold sm:text-3xl">
        Loading
      </h1>
    </div>
  );
};

export default LoadingPage;
