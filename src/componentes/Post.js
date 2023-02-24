import { BsPin } from "react-icons/bs";
import React from "react";

const Post = () => {
  return (
    <div className="mt-12">
      <h1 className="text-xl font-semibold">Post De Anya</h1>
      <div className="mt-6">
        <div className=" space-y-3">
          <button className="flex items-center space-x-2 text-black ">
            <BsPin className="text-main" />
            <span>5 Formas para Picar Cebolla.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Tips para mejorar tus jugos.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>5 Formas para Picar Cebolla.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Mantén afilados tus cuchillos.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Utiliza papel de hornear.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Siempre utiliza aceite de oliva.</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
