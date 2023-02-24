import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const DescriptionChef = ({ seller }) => {
  return (
    <div className="mt-10 p-2">
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <RiBookReadLine className="text-main" />
        <span>Description</span>
      </button>
      <div className="p-1 md:text-justify text-justify ">
        {seller?.description}
      </div>
    </div>
  );
};

export default DescriptionChef;
