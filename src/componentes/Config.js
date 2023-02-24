import React from "react";
import CheckboxConfig from "../componentes/CheckboxConfig";
import ButtonChange from "./ButtonChange";

const LanguageConfig = ({ title, spam }) => {
  return (
    <div className="mt-6">
      <div className=" space-y-7">
        <div className="grid grid-cols-2 md:-space-x-32 ml-4">
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            {title}
          </label>
          <div>
            <CheckboxConfig />
          </div>
        </div>
        <div className="grid grid-cols-2   md:-space-x-32 ml-4">
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            {spam}
          </label>
          <div>
            <CheckboxConfig />
          </div>
        </div>
        <div className="flex md:justify-end justify-center ">
          <ButtonChange />
        </div>
      </div>
    </div>
  );
};

export default LanguageConfig;
