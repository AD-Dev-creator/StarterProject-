"use-client";

import { useRouter } from "next/navigation";
import React from "react";
import Card from "@/src/components/ui/card/card";

const TypeScriptPage = () => {
  const router = useRouter();

  const selectTypeScript = () => {
    router.push("/workspace/typescript");
  };

  return (
    <Card
      title="Select TypeScript API"
      image="https://cdn.worldvectorlogo.com/logos/typescript.svg"
      description="Logo of TypeScript"
      onClick={selectTypeScript}
    />
  );
};

export default TypeScriptPage;
