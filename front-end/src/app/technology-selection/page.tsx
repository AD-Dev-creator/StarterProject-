"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Card from "@/src/components/ui/card/card";
import BackCross from "@/src/components/ui/buttom/backCross";
import SymfonyImage from "@/src/assets/images/symfony.png";
import ReactImage from "@/src/assets/images/React.webp";
import NextImage from "@/src/assets/images/nextjs.png";
import TypeScriptImage from "@/src/assets/images/typescript.svg";

const TechnologySelectionPage = () => {
  const router = useRouter();

  const selectSymfony = () => {
    // This button launches the request on the road which allows you to create a new symfony project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  const selectTypeScript = () => {
    // This button launches the request on the road which allows you to create a new TypeScript API project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  const ReactPage = () => {
    // This button launches the request on the road which allows you to create a new react project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  const NextPage = () => {
    // This button launches the request on the road which allows you to create a new next.js project.
    // Added page loading between the request and the response.
    // If the creation is successful, it returns to the success page.
    // If there is an error it returns to the error page.
  };

  return (
    <>
      <div className="mt-10 mb-8 ml-10 flex space-x-4 text-start justify-between text-sizeColor">
        <h1 className="text-3xl font-bold">Select your techno</h1>

        <div className="flex justify-end pr-5">
          <BackCross onClick={() => router.push("/home")} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <Card
          title="Symfony backend"
          image={SymfonyImage}
          description="Logo of Symfony"
          onClick={selectSymfony}
        />

        <Card
          title="TypeScript API"
          image={TypeScriptImage}
          description="Logo of TypeScript"
          onClick={selectTypeScript}
        />

        <Card
          title="React frontend"
          image={ReactImage}
          description="Logo of React"
          onClick={ReactPage}
        />

        <Card
          title="Next.js frontend"
          image={NextImage}
          description="Logo of Next.js"
          onClick={NextPage}
        />
      </div>
    </>
  );
};

export default TechnologySelectionPage;
