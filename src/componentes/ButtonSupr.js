import { IoList, IoGridOutline } from "react-icons/io5";

const ButtonSupr = () => {
    return (
        <div className="flex justify-end space-x-6">
            <button className="flex items-center space-x-2 text-main hover:text-main-dark">
                <IoGridOutline />
                <span>Grid View</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-main">
                <IoList />
                List View
            </button>
            <span className="hover:text-main">
                <b>117</b>
                Recipes
            </span>
        </div>
    );
}

export default ButtonSupr;