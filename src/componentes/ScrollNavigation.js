import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const ButtomButton = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full cursor-pointer  hover:bg-main hover:text-white">
          <AiOutlineLeft />
        </div>
        <div className="flex h-12 font-medium rounded-full space-x-2">
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  border border-main hover:bg-main hover:text-white">
            1
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            2
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white  ">
            3
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full ">
            ...
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            8
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            9
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            10
          </div>
          <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-main text-white ">
            1
          </div>
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full cursor-pointer hover:bg-main hover:text-white">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default ButtomButton;
