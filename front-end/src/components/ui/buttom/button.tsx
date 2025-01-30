"use client";

import React from "react";

interface ButtonNewAttempt {
  description: string;
  onClick?: () => void;
}

const ButtonNewAttempt: React.FC<ButtonNewAttempt> = ({
  onClick,
  description,
}) => {
  return (
    <div className="flex text-center justify-center">
      <button
        type="submit"
        className="bg-accent text-white font-bold py-2 px-4 mt-10 rounded hover:bg-highlight active:bg-accent"
        onClick={onClick}
      >
        {description}
      </button>
    </div>
  );
};

export default ButtonNewAttempt;
