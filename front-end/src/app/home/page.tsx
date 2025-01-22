"use client";

import ButtonNewProject from "@/src/components/ui/buttom/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isProjectCreated, setIsProjectCreated] = useState(false);
  const router = useRouter();

  const createNewProject = () => {
    // Open window to create new project
    const projectCreated = window.confirm("Create a new project?"); // Simulate project creation
    // if window is open and project is created
    if (projectCreated) {
      setIsProjectCreated(true);
      // Redirect to select-techno page for select the techno of the new project
      router.push("/select-techno");
    }
  };

  return (
    <>
      <div className="mt-20 mb-40 text-center justify-center text-sizeColor">
        <h1 className="texte-center text-3xl font-bold justify-center">
          Welcome to the Starter Project!
        </h1>
        <p className="mt-5 text-center text-sm">
          Welcome to the Starter Project! This project allows you to create new
          projects with ease. Click the button below to get started.
        </p>
      </div>

      <ButtonNewProject description="New project" onClick={createNewProject} />
    </>
  );
};

export default HomePage;
