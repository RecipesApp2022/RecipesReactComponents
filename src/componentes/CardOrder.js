import React from "react";
import womenchef from "../assets/womenchef.jpg";
import { BsPatchCheckFill } from "react-icons/bs";

const CardOrder = ({title,chef}) => {
  return (
    <div className="mb-6">
      <p className="ml-2 mt-2 text-main mb-6">{title}</p>
      <div className="flex">
        <img src={womenchef} alt="" className="w-20 rounded-full shadow" />
        <p className="text-black  mt-6 ml-4">{chef}</p>
        <BsPatchCheckFill className="text-main mt-7 ml-2" />
      </div>
    </div>
  );
};

export default CardOrder;
