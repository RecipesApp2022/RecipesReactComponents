import AppLogo from "../assets/drafts.png";
import { BsBookmark } from "react-icons/bs";
import Matches from "./Matches";
import CestaCompras from "../assets/Img-button/cesta-de-la-compra.png";
import BolsaCompras from "../assets/Img-button/bolsa-de-la-compra.png";
import Reloj from "../assets/clock.png";
import ButtonCart from "./ButtonCart";
import { FaStar } from "react-icons/fa";

const CardRecipes = ({
  texto,
  price,
  foto,
  title,
  sellerLogo,
  sellerName,
  numberOfIngredients,
  preparationTime,
  numberOfItems,
  hideButtons,
  hideCart = false,
  hideClock,
  hideBag,
  rating
}) => {
  return (
    <div className="bg-white w-full mb-6 rounded-xl overflow-hidden">
      <div
        className="h-64 w-74 relative"
        style={{ backgroundImage: `url(${foto})`, backgroundSize: "100% 100%" }}
      >
        <div className="relative h-full w-full bg-black bg-opacity-20 flex ">
          <div className="absolute left-0 top-1 w-full justify-center items-center flex">
            <img
              src={AppLogo}
              className="h-10 w-10 opacity-60 rounded-full"
              alt="AppLogo"
            />
          </div>
          <div className="absolute flex left-2 top-2 bg-main-dark rounded-lg bg-opacity-70 text-sm leading-none">
            <p className="text-white py-1 px-1.5">${price}</p>
          </div>
          <div className="absolute flex z-10 top-3 right-3 justify-end text-white">
            {!hideBag && <div className="flex mr-2">
              <img src={BolsaCompras} className="h-5 w-5 text-white m-auto" alt="BolsaCompras" />
              <p className="text-white h-5 w-15 ml-1">{numberOfItems}</p>
            </div>}
            <div className="flex ">
              <img src={CestaCompras} className="h-5 w-5 m-auto" alt="CestaCompras" />
              <p className="text-white h-5 w-5 ml-1">{numberOfIngredients}</p>
            </div>

            {!hideClock && <div className="flex ">
              <img src={Reloj} className="h-5 w-5 m-auto" alt="CestaCompras" />
              <p className="text-white h-5 w-5 ml-1">{preparationTime}</p>
            </div>}
          </div>

          <h1 className="m-auto text-2xl text-white font-semibold">{title}</h1>
          <div className="absolute w-full p-2 bottom-0 bg-black bg-opacity-30 ">
            <h1 className="text-white font-semibold truncate mb-1" title={texto}>{texto}</h1>

            <div className="flex">
              <div className="flex text-bold">
                <img className="rounded-full h-8 w-8" src={sellerLogo} alt="" />
                <h1 className="p-1 text-white">{sellerName}</h1>
              </div>
              <div className="flex justify-end text-white ml-auto">
                <div className="flex items-center space-x-2">
                  <FaStar color="#FFBA5A" />
                  <p className="text-white">{rating || '0'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {!hideButtons && (
          <div className="p-2">
            <Matches />
          </div>
        )}
        {!hideCart && (
          <div className="flex justify-center">
            <ButtonCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRecipes;
