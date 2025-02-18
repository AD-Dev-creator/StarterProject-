"use-client";

import React from "react";
import { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  image: string | StaticImageData;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, description, onClick }) => {
  return (
    <div
      className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center min-h-[200px] cursor-pointer"
      onClick={onClick}
    >
      <img
        className="mt-5 w-20 h-25 object-center object-cover"
        src={typeof image === "string" ? image : image.src}
        alt={description}
      />
      <div className="card-body mt-6 p-4">
        <p className="text-xl font-sans text-highlight">{title}</p>{" "}
      </div>
    </div>
  );
};

export default Card;
