"use client";

import React from "react";

interface TitlePageProps {
  title: string;
  className?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title, className }) => {
  return (
    <div className="flex">
      <h1 className={className}>{title}</h1>
    </div>
  );
};

export default TitlePage;
