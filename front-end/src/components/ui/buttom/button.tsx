"use client";

import React from "react";

interface ButtonNewProjectProps {
  description: string;
  onClick?: () => void;
}

const ButtonNewProject: React.FC<ButtonNewProjectProps> = ({
  onClick,
  description,
}) => {
  return (
    <div className="flex text-center justify-center">
      <button
        type="submit"
        className="bg-customButton text-white font-bold py-2 px-4 mt-10 rounded hover:bg-hoverCustomButton active:bg-customButton"
        onClick={onClick}
      >
        {description}
      </button>
    </div>
  );
};

export default ButtonNewProject;
