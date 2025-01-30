import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface BackCrossProps {
  onClick: () => void;
}

const BackCross: React.FC<BackCrossProps> = ({ onClick }) => {
  return (
    <div className="back-cross-container">
      <button
        onClick={onClick}
        className="justify-end flex text-sizeColor hover:secondary active:sizeColor"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <FaArrowLeft size={30} />
      </button>
    </div>
  );
};

export default BackCross;
