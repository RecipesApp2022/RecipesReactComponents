
const ChefsCountries = ({ imgChefs, LogoBackg, imgFlag, name, sname }) => {
    return (
        <div className="mdflex relative h-80 md:w-96 rounded-md cursor-pointer mt-10 mr-5 ml-5 mb-10 bg-cover" style={{ backgroundImage: `url(${LogoBackg})` }}>
            <div className="absolute bg-black opacity-30 rounded-md w-full h-full">
            </div>
            <div className='absolute bg-white left-1/2 top-[30px] h-20  transform -translate-x-1/2 rounded shadow-md'>
                <img className="rounded-lg top-[40px] h-20 w-20 " src={imgChefs} alt="Chefs" />
            </div>
            <div className='absolute bg-white left-1/2 top-[140px] h-20  transform -translate-x-1/2 rounded shadow-md'>
                <img className="h-20 w-40 " src={imgFlag} alt="Flag" />
            </div>
            <div className="absolute font-sans text-white bottom-0 right-0 py-4 px-4 text-2xl">
                <div className="text-center font-sans text-white bottom-0 right-0 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }}>
                    {name}
                </div>
                <div className="font-sans text-white bottom-0 right-0 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }}>
                    {sname}
                </div>
            </div>

        </div>
    );
}

export default ChefsCountries;