"use-client";

import { useRouter } from "next/navigation";
import React from "react";
import Card from "@/src/components/ui/card/card";

const SymfonyPage = () => {
  const router = useRouter();

  const selectSymfony = () => {
    router.push("/workspace/symfony");
  };

  return (
    <Card
      title="Select Symfony backend"
      image="https://cdn.icon-icons.com/icons2/2415/PNG/512/symfony_original_wordmark_logo_icon_146328.png"
      description="Logo of Symfony"
      onClick={selectSymfony}
    />
  );
};

export default SymfonyPage;
