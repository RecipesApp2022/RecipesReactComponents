import cheque from "../assets/cheque.png";

const BannerChef = ({ foto, name, description, logo, recipes, plans, pack }) => {


  return (
    <div className="flex justify-center items-center rounded-lg relative"
      style={{ background: `url(${foto})`, backgroundSize: "100% 100%" }}>

      <div className='rounded-md absolute bg-black h-full w-full opacity-40' ></div>
      <div className="relative">
        <div className="flex justify-center items-center mt-6">
          <img
            src={logo}
            className="h-20 w-20 rounded-full items-center"
            alt=""
          />

        </div>

        <div className="text-center text-white font-sans">
          <div className="flex justify-center items-center">
            <p className="text-xl font-bold ml-4">{name}</p>
            <div className="mt-4 ml-3" />
            <img src={cheque} alt="" className="w-4 h-4 mt-2 mr-2" />
          </div>
          {
            description ?
              <p className="text-base truncate">{description}</p>
              :
              <p className="text-base mb-8"></p>
          }
          <div className="flex space-x-8 mb-6 mt-2">
            <p className="text-xs">{recipes}</p>
            <p className="text-xs">{plans}</p>
            <p className="text-xs">{pack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerChef;
