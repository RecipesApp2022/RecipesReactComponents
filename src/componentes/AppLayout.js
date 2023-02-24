import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavInfo from "./NavInfo";

const AppLayout = ({ children }) => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);
    return (
        <div className="bg-gray-100">
            <NavBar />
            <NavInfo />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout;