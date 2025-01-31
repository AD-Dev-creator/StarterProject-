"use client";

import React from "react";

interface ErrorProps {
  description: string;
}

const Error: React.FC<ErrorProps> = ({ description }) => {
  return (
    <div className="flex text-center justify-center">
      <p className="text-red-500 font-bold py-2 px-4 mt-10">{description}</p>
    </div>
  );
};

export default Error;
