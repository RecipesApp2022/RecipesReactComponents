import PremiumIcon from "../assets/PremiumIcon.svg";
import Matches from "../componentes/Matches";
const BannerChef = ({ foto, name, description, hideButtons }) => {
  return (
    <div className="bg-white w-full rounded-xl overflow-hidden">
      <div
        className="w-full flex flex-col justify-center items-center p-4 rounded-lg"
        style={{ background: `url(${foto})`, backgroundSize: "100% 100%" }}
      >
        <div className="flex -mr-36">
          <img src={PremiumIcon} className="h-16 w-16 mb-6" alt="" />
        </div>

        <div className="text-center text-white font-sans">
          <div className="flex  justify-center text-center">
            <p className="text-xl text-center font-bold">{name}</p>
          </div>

          <div className="flex mb-6 mt-2">
            <p className="text-xs">{description}</p>
          </div>
        </div>

      </div>
      <div >
        {!hideButtons &&
          <div className="p-2">
            <Matches />
          </div>
        }
      </div>
    </div>
  );
};

export default BannerChef;
