"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
  // This page is displayed when the user is waiting for a response from the server.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ClipLoader size={50} color={"#38E0F2"} loading={true} />
      <h1 className="text-3xl font-poppins sm:text-3xl mt-3">Loading</h1>
    </div>
  );
};

export default LoadingPage;
