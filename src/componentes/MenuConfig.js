import { useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { IoHeart, IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import MenuList from "../util/MenuList";

const MenuConfig = ({ show, onClose }) => {
    const { setAuthInfo } = useAuth();

    const modalRef = useRef();

    const handleLougoutClick = (e) => {
        e.preventDefault();

        setAuthInfo({ isAuthenticated: false, token: null });
    }

    useEffect(() => {
        const handleMousedown = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose?.();
            }
        }

        document.addEventListener('mousedown', handleMousedown);

        return () => document.addEventListener('mousedown', handleMousedown);
    }, [modalRef])

    if (!show) {
        return null;
    }

    return (
        <div>
            <ul ref={modalRef}
                style={{ top: '100%' }}
                className="absolute space-y-2 z-20 right-0 text-white bg-gray-800 w-52 border border-slate-300 rounded-md py-4"
            >
                {
                    MenuList?.map(({ name, Icon, url }, i) => {
                        return (
                            <li className="space-x-2 border-b px-4" key={i}>
                                <Link to={url}>
                                    <div className="flex hover:text-main">
                                        <Icon className="mt-1" />
                                        <p className="text-lg ml-2.5 mb-1.5">{name}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
                <li className="space-x-2 px-4">
                    <a onClick={handleLougoutClick} href="dfdf">
                        <div className="flex hover:text-main">
                            <AiOutlineLogout className="mt-1" />
                            <p className="text-lg ml-2.5">Log Out</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default MenuConfig;
