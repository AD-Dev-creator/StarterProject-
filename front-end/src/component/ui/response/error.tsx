import React from "react";

interface ErrorProps {
  description: string;
  errorList: string[];
}

const Error: React.FC<ErrorProps> = ({ description, errorList }) => {
  //^ This component is used to display an error message and a list of errors
  return (
    <div className="flex text-center justify-center">
      <p className="text-red-500 font-bold py-2 px-4 mt-10">{description}</p>
      <ul className="text-red-500 font-bold py-2 px-4 mt-10">
        <li className="pl-5">{errorList}</li>
      </ul>
    </div>
  );
};

export default Error;
