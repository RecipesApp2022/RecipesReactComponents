import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const CertificationChef = ({ seller }) => {
  return (
    <div className="mt-6 p-2">
      <button className="flex items-center space-x-2 text-black text-lg	 font-semibold">
        <BsPatchCheckFill className="text-main" />
        <span>Professional Certification</span>
      </button>
      <div className=" mt-4">
        <h1>Chef: {seller?.credentialNumber}</h1>
      </div>
    </div>
  );
};
export default CertificationChef;
