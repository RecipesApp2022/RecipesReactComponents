const SesionCategory = () => {
    return (
        <form className="m-10 ml-8 m-50 cursor-pointer ">
            <select className="text-main font-semibold text-lg bg-white border border-gray-400 rounded-md py-1.5 md:px-20  
                         focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 leading-4">
                <option value="">New recipes</option>
                <option value="">Low in calories</option>
                <option value="">Paleo</option>
                <option value="">High in protein </option>
            </select>
        </form >
    );
}

export default SesionCategory;