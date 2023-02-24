import clsx from "clsx";
import ButtonCart from "./ButtonCart";

const WeightPlan = ({ img, price, logo, title, text, hideCart = false, className }) => {
  return (
    <div className={clsx("p-4", className)}>
      <div
        className="relative h-64 w-full flex bg-main rounded-md cursor-pointer bg-cover "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute bg-black opacity-40 rounded-md "></div>
        <div className="absolute flex left-1 top-1 bg-main-dark rounded-lg opacity-70">
          <p className="text-white h-6 w-15 ml-1 ">{price} </p>
        </div>
        <img
          className="absolute right-2 top-1 rounded h-20 w-20"
          src={logo}
          alt="Logo"
        />

        <div
          className="text-white text-center w-full mt-36 text-4xl md:text-4xl"
          style={{ textShadow: "0px 0px 3px #000000" }}
        >
          {title}
          <p className="text-white my-2 text-center text-base m-4">{text}</p>
        </div>
      </div>
      <div className="bottom-0 right-0 space-x-3 flex justify-center mt-auto bg-white">
        {!hideCart && (
          <div className="flex justify-center">
            <ButtonCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightPlan;
