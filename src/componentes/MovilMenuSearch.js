import { useRef } from "react";
import SearchMovil from "./SearchMovil";
import ReactDom from "react-dom";
import LoginBg from "../assets/img1.jpg";

const MovilMenuSearch = ({ show, onClose }) => {

    const modalRef = useRef();

    if (!show) {
        return null;
    }

    const handleClose = (e, forceClose) => {
        if (forceClose) {
            onClose?.();
            return;
        }


        if (modalRef.current === e.target) {
            onClose?.();
        }
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-2" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            <div className="w-full m-auto animate__animated animate__fadeInUp">
                <SearchMovil onClose={() => onClose?.()} />
            </div>
        </div>
        ,
        document.getElementById("portal")
    );

}
export default MovilMenuSearch;