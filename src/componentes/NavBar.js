import PageLogo from "./PageLogo";
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import AuthModal from "./AuthModal";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MenuConfig from "./MenuConfig";
import MobileMenuButton from "./MobileMenuButton";
import clsx from "clsx";
import MovilMenuSearch from "./MovilMenuSearch";
import NotificationComponent from "./Notifications/NotificationComponent";


const NavBar = () => {

    const { user } = useAuth();

    const [searchParams] = useSearchParams();

    const [showModal, setShowModal] = useState(false);

    const [showModalMenu, setShowModalMenu] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    const [currentPath, setCurrentPath] = useState(""); //pat escucha 

    useEffect(() => {
        setShowModal(searchParams?.get('showLogin'));
    }, [searchParams])

    const handleToggleModal = () => {
        setShowModal((oldShowModal) => !oldShowModal);
        return;
    }

    const handleToggleMenu = () => {
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }

    const location = useLocation();
    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);

    return (
        <>
            <div className="bg-gray-800 text-white h-14 px-4">
                <div className="container h-full">
                    <div className="flex md:justify-none items-center h-full text-base">
                        <PageLogo />
                        {/* <NavSearchBar /> */}
                        <div className="flex ml-auto md:space-x-10 space-x-8 items-center h-full" >
                            <Link to={"/Categories"} className="hidden md:block hover:text-main">
                                <p className={clsx({
                                    "text-main title-medium md:text-lg": currentPath === '/Categories',
                                    'text-white title-medium md:text-lg': currentPath !== '/Categories'
                                })}>
                                    Categories
                                </p>
                            </Link>
                            <Link to={"/Sellers"} className="hidden md:block hover:text-main">
                                <p className={clsx({
                                    "text-main title-medium md:text-lg": currentPath === '/Sellers',
                                    'text-white title-medium md:text-lg': currentPath !== '/Sellers'
                                })}>
                                    Sellers
                                </p>
                            </Link>
                            {
                                user &&
                                <NotificationComponent />
                            }
                            <button
                                className="md:hidden hover:text-main"
                                onClick={() => setShowModalMenu(true)}
                            >
                                <BiSearchAlt className="h-6 w-6 md:ml-10" />
                            </button>
                            <button onClick={user ? handleToggleMenu : handleToggleModal} className="hidden md:block relative items-center hover:text-main bg-transparent 
                                    bg-gray-800 border border-slate-300 hover:border-main rounded-md py-2 px-2.5">
                                <div className="flex text-lg">
                                    <FaUserCircle className="m-auto mr-2" />
                                    {user ? user.name : 'Log in'}
                                    <MenuConfig show={showMenu} onClose={() => setShowMenu(false)} />
                                </div>

                            </button>
                            <MobileMenuButton />
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal show={showModal} onClose={handleToggleModal} />
            <MovilMenuSearch show={showModalMenu} onClose={() => setShowModalMenu(false)} />
        </>
    );
}

export default NavBar;
