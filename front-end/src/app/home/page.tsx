"use client";

import Button from "@/src/components/ui/buttom/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isProjectCreated, setIsProjectCreated] = useState(false);
  const router = useRouter();

  const createNewProject = async () => {
    // This button launches the request on the road which allows you to create a new project.
    // Is open a window for select the repository and the name of the project.
    // Added page loading between the request and the response.
    // If the name of the project is valid, it returns to the success page.
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-sizeColor">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Welcome to the Starter Project!
        </h1>
        <p className="mt-3 text-xs sm:mt-5 sm:text-sm">
          Welcome to the Starter Project! This project allows you to create new
          projects with ease. Click the button below to get started.
        </p>
        <Button description="New project" onClick={createNewProject} />
      </div>
    </>
  );
};

export default HomePage;
