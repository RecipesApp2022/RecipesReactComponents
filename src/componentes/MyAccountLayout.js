import clsx from "clsx";
import { useEffect, useState } from "react";
import { BsFillHeartFill, BsFillGearFill, BsFillBookmarkHeartFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp } from "react-icons/io5";
import MenuList from "../util/MenuList";

const MyAccountLayout = () => {
    const { setAuthInfo } = useAuth();

    const [currentPath, setCurrentPath] = useState("");

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);

    const handleLougoutClick = (e) => {
        e.preventDefault();

        setAuthInfo({ isAuthenticated: false, user: null, token: null });
    }

    return (
        <div className="flex">
            <div className="w-2/12 md:w-[5vw] bg-gray-700 hidden md:block text-white text-[2vw]" >
                {
                    MenuList?.map(({ name, Icon, url }, i) => {
                        return (
                            <div key={i}>
                                <Link title={name} to={url}>
                                    <Icon className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                                        'text-main': currentPath === url
                                    })} />
                                </Link>
                            </div>
                        )
                    })
                }
                <div className="text-center">
                    <button title="Log Out" onClick={handleLougoutClick} className="mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl">
                        <AiOutlineLogout ></AiOutlineLogout>
                    </button>
                </div>
            </div>
            <div className="w-full min-w-0">
                <Outlet />
            </div>
        </div >
    );
}

export default MyAccountLayout;