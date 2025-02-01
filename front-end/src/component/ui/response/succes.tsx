import React from "react";

interface SuccessProps {
  description: string;
}

const Success: React.FC<SuccessProps> = ({ description }) => {
  //^ This component is used to display a success message
  return (
    <div className="flex text-center justify-center">
      <p className="text-green-500 font-bold py-2 px-4 mt-10">{description}</p>
    </div>
  );
};

export default Success;
