import { useState, useRef, useEffect } from "react";
import { IoMenu, IoApps, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { GoPerson } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import { IoHeart, IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp } from "react-icons/io5";
import MenuList from "../util/MenuList";

const MobileMenuButton = () => {

    const { user, setAuthInfo } = useAuth();

    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const modalRef = useRef();

    useEffect(() => {
        const handleMousedown = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowMenuMobile(false);
            }
        }

        document.addEventListener('mousedown', handleMousedown);

        return () => document.addEventListener('mousedown', handleMousedown);
    }, [modalRef]);
    return (
        <div ref={modalRef} className="relative">
            <button className="btn text-white md:hidden" onClick={() => setShowMenuMobile((oldShow) => !oldShow)}>
                <IoMenu className="w-6 h-6 md:text-2xl" />
            </button>
            {
                showMenuMobile &&
                <ul className="md:hidden absolute right-0 bg-black text-white px-2 py-2 z-20 rounded animate__animated animate__fadeIn" style={{ top: '100%' }}>
                    {
                        user ?
                            MenuList?.map(({ name, Icon, url }, i) => {
                                return (
                                    <li className="py-2 border-b" style={{ minWidth: '180px' }} key={i}>
                                        <Link to={url} className="flex items-center space-x-2 hover:text-main">
                                            <Icon className="w-6 h-6" />
                                            <span className="text-lg">{name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                            :
                            <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                <Link to={`?showLogin=true`} className="flex items-center space-x-2 hover:text-main">
                                    <IoLogIn className="w-8 h-8" />
                                    <span className="text-lg">Log In / Registratión</span>
                                </Link>
                            </li>
                    }
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/categories'} className="flex items-center space-x-2 hover:text-main">
                            <IoApps className="w-6 h-6" />
                            <span className="text-lg">Categories</span>
                        </Link>
                    </li>
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/sellers'} className="flex items-center space-x-2 hover:text-main">
                            <GoPerson className="w-6 h-6" />
                            <span className="text-lg">Sellers</span>
                        </Link>
                    </li>
                    {
                        user &&
                        <li className="py-2">
                            <button className="flex items-center space-x-2 " onClick={() => { setAuthInfo({ isAuthenticated: false, user: null, token: null }); }}>
                                <AiOutlineLogout className="w-6 h-6" />
                                <span className="text-lg">Log Out</span>
                            </button>
                        </li>
                    }
                </ul>
            }
        </div >
    )
}

export default MobileMenuButton;