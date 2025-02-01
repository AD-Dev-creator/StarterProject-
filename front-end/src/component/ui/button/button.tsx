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
        className=" bg-accent text-primary font-poppins py-2 px-4 mt-10 rounded hover:bg-primary hover:text-accent active:bg-accent active:text-primary"
        onClick={onClick}
      >
        {description}
      </button>
    </div>
  );
};

export default ButtonNewAttempt;
