"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Card from "@/src/components/ui/card/card";
import NextPage from "../technology/next/page";
import ReactPage from "../technology/react/page";
import SymfonyPage from "../technology/symfony/page";
import selectTypeScript from "../technology/typeScript/page";
import TitlePage from "@/src/components/ui/title/title";
import BackCross from "@/src/components/ui/buttom/backCross";

const SelectTechno = () => {
  const router = useRouter();

  const selectSymfony = () => {
    router.push("/workspace/symfony");
  };

  return (
    <>
      <div className="mt-10 mb-30 ml-10 flex space-x-4 text-start justify-between text-sizeColor">
        <h1 className="text-3xl font-bold">Select your techno</h1>

        <div className="flex justify-end pr-20">
          <BackCross onClick={() => router.push("/home")} />
        </div>
      </div>

      <div className="flex mt-20 space-x-4 justify-center">
        <Card
          title="Symfony backend"
          image="https://cdn.icon-icons.com/icons2/2415/PNG/512/symfony_original_wordmark_logo_icon_146328.png"
          description="Logo of Symfony"
          onClick={selectSymfony}
        />

        <Card
          title="TypeScript API"
          image="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          description="Logo of TypeScript"
          onClick={selectTypeScript}
        />

        <Card
          title="React frontend"
          image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          description="Logo of React"
          onClick={ReactPage}
        />

        <Card
          title="Next.js frontend"
          image="https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png"
          description="Logo of Next.js"
          onClick={NextPage}
        />
      </div>
    </>
  );
};

export default SelectTechno;
