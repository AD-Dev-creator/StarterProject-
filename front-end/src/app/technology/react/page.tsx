"use-client";

import React from "react";
import Card from "@/src/components/ui/card/card";
import { useRouter } from "next/router";

const ReactPage = () => {
  const router = useRouter();

  const selectReact = () => {
    router.push("/workspace/react");
  };

  return (
    <Card
      title="Select React frontend"
      image="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png"
      description="Logo of React"
      onClick={selectReact}
    />
  );
};

export default ReactPage;
