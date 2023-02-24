const NavSearchBar = () => {
    return (
        <form className=" ml-8 items-center cursor-pointer ">
            <select className="text-white bg-gray-800 border border-slate-300 rounded-md py-2 px-2.5">
                <option value="">All</option>
                <option value="">Vegan</option>
                <option value="">Gluten Free</option>
                <option value="">Paleo</option>
                <option value="">Vegetarian</option>
                <option value="">Keto</option>
            </select>
        </form >

    );
}

export default NavSearchBar;