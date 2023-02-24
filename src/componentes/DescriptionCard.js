import React from "react";
import Amazon from "../assets/Img-button/amazon-fresh.jpg";
import Wallmart from "../assets/Img-button/wallmart.jpeg";
import Instacart from "../assets/Img-button/instacart.jpg";
import Paypal from "../assets/Img-button/paypal-logo.png";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";
import Instagram from "../assets/Img-button/insta.jfif";
import Youtube from "../assets/Img-button/Youtube.webp";
import TikTok from "../assets/Img-button/tiktok.png";
import RecipeFeatures from "./RecipeFeatures";

const DescriptionCard = ({
  recipe,
  showPaypalButton = false,
  hideMarketButtons = false,
}) => {
  return (
    <div className="container flex justify-center">
      <div className="w-full py-6 ml-2 grid grid-cols-2 gap-2 md:gap-12 text-xl text-gray-400">
        {
          recipe &&
          <RecipeFeatures recipe={recipe} />
        }

        <div className="ml-7">
          {!hideMarketButtons && <>
            <p className="md:w-1/2 w-4/2 mb-4">Pucharse in:</p>

            <div className="flex space-x-3">
              <ButtonImage image={Instacart} />
              <ButtonImage image={Amazon} />
              <ButtonImage image={Wallmart} />
            </div>
          </>}
          {showPaypalButton && (
            <Link to="/payment">
              <ButtonImage image={Paypal} />
            </Link>
          )}

          <p className="md:w-1/2 w-4/2 mb-4">Follow us:</p>
          <div className="flex space-x-3">
            <ButtonImage image={Instagram} />
            <ButtonImage image={TikTok} />
            <ButtonImage image={Youtube} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
