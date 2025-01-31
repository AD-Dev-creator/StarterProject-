"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Card from "@/src/component/ui/card/card";
import BackCross from "@/src/component/ui/button/backCross";
import ImageReact from "@/src/assets/images/React.webp";
import ImageNext from "@/src/assets/images/nextjs.png";
import ImageTypeScript from "@/src/assets/images/typescript.svg";
import ImageSymfony from "@/src/assets/images/symfony.png";

const TechnologySelectionPage = () => {
  const router = useRouter();

  const createSymfonyProject = () => {
    // This button open a popup for add the name of the project.
    const name = prompt("Please enter the name of the new project");
    // Added name of the request for the creation of the project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  const createdTypescriptProject = () => {
    // This button open a popup for add the name of the project.
    const name = prompt("Please enter the name of the new project");
    // Added name of the request for the creation of the project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  const createdReactProject = () => {
    // This button open a popup for add the name of the project.
    const name = prompt("Please enter the name of the new project");
    // Added name of the request for the creation of the project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  const createdNextProject = () => {
    // This button open a popup for add the name of the project.
    const name = prompt("Please enter the name of the new project");
    // Added name of the request for the creation of the project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  return (
    <>
      <div className="mt-10 mb-8 ml-10 flex space-x-4 text-start justify-between text-sizeColor">
        <h1 className="text-3xl font-poppins sm:text-3xl color-sizeColor underline">
          Select your techno
        </h1>

        <div className="flex justify-end pr-5">
          <BackCross onClick={() => router.push("/home")} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 space-y-4 md:space-y-0 md:space-x-4 justify-center">
        {/* //^ Update this title to the card component for a name proffesionnal */}
        {/* //^ And update dimensions of the card component for the same size of the card. */}
        <Card
          title="Symfony API"
          image={ImageSymfony}
          description="Logo of Symfony"
          onClick={createSymfonyProject}
        />

        <Card
          title="TypeScript API"
          image={ImageTypeScript}
          description="Logo of TypeScript"
          onClick={createdTypescriptProject}
        />

        <Card
          title="React frontend"
          image={ImageReact}
          description="Logo of React"
          onClick={createdReactProject}
        />

        <Card
          title="Next.js frontend"
          image={ImageNext}
          description="Logo of Next.js"
          onClick={createdNextProject}
        />
      </div>
    </>
  );
};

export default TechnologySelectionPage;
