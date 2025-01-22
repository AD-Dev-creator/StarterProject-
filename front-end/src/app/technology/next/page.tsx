"use-client";

import React from "react";
import Card from "@/src/components/ui/card/card";
import { useRouter } from "next/router";

const NextPage = () => {
  const router = useRouter();

  const selectNext = () => {
    router.push("/workspace/next");
  };

  return (
    <Card
      title="Select Next.js frontend"
      image="https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png"
      description="Logo of Next.js"
      onClick={selectNext}
    />
  );
};

export default NextPage;
