import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";

const Recipes = ({ title, descsh, desccost, cost, img, level, time, ing, withDefaultButtons = true }) => {

    return (
        <div className="lg:flex bg-white rounded-md overflow-hidden shadow-md">
            <div className="lg:w-5/12">
                <img className='sm:h-32 md:h-56 lg:h-72 w-full md:block rounded-md' src={img} alt="Recipes" />
            </div>
            <div className="xl:flex py-4 px-4 md:h-full lg:w-7/12">
                <div className='mr-4 md:m-0 w-4/5'>
                    <div className='font-bold text-xl'>
                        {title?.length > 15 ? `${title.slice?.(0, 15)}...` : title}
                    </div>
                    <p className="px-1 mt-2 text-gray-400 text-xs">{descsh?.length > 25 ? `${descsh.slice?.(0, 25)}...` : descsh}</p>
                    <div className="flex">
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiOutlineStar className="mt-2 text-gray-300" />
                    </div>
                    <div className="">
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Level</p>
                            <p className="w-1/2">{level}</p>
                        </div>
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Time</p>
                            <p className="w-1/2">{time}</p>
                        </div>
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Ingredients</p>
                            <p className="w-1/2 text-red-400">{ing}</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/5 justify-between lg:justify-start items-center flex lg:flex-col">
                    <div className='px-1 py-1 font-bold text-base'>
                        {cost}
                    </div>
                    <p className="px-1 py-1 text-gray-400 text-xs">{desccost}</p>

                    <div className="bottom-0 right-0 space-x-3 flex lg:justify-end items-center mt-auto">
                        {withDefaultButtons
                            ? <>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><AiOutlineCheck className="text-green-700" /></button>
                            </>
                            : <>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold md:py-2 md:px-4 py-1.5 px-2 text-base rounded"> Dismiss</button>
                                <button className="bg-main hover:bg-main-dark text-white font-bold md:py-2 md:px-4 py-1.5 px-2 text-base rounded"> Select</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipes;