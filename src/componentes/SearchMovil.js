import ButtonSearch from "./ButtonSearch";
import Logo from "../assets/drafts.png";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

const SearchMovil = ({ onClose }) => {

    const [category, setCategory] = useState('recipes');

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${category}?name=${search}`);

        onClose?.();
    }

    return (
        <div style={{ background: 'rgba(0,0,0, .3)' }} className="p-4 rounded-xl relative">
            <button onClick={() => onClose?.()} type="button" className="rounded-full absolute text-red-400 text-4xl" style={{ top: 0, right: 0 }}>
                <IoCloseCircle />
            </button>
            <div className="m-auto">
                <img src={Logo} className="m-auto rounded-2xl" alt="RicardoApp" />
                <h1 className="text-4xl text-center text-white font-bold">Recipes App</h1>
                <p className="font-light text-sm text-center text-white">Search Recipes, Ingredients, Plans and Combos.</p>
            </div>
            <form className="w-full p-2 m-auto" onSubmit={handleSubmit}>
                <ButtonSearch category={category} onClickCategory={(category) => { setCategory(category) }} />
                <div className="relative text-white text-center text-base">
                    <input
                        className='text-black text-xs h-12 border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 
                            leading-4 border-0 rounded-bl-lg rounded-r-lg w-full top-0 right-0'
                        type="text"
                        placeholder="Enter the item you are looking for or a characteristic..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <button
                        className="absolute h-full px-2 text-center bg-main top-0 right-0 rounded-r-lg font-semibold">
                        <BiSearchAlt
                            className="h-6 w-6 md:ml-10"
                        />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchMovil;