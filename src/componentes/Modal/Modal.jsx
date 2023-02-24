import { useRef } from "react";
import ReactDom from "react-dom";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ show, children, onClose }) => {

    const modalRef = useRef();

    if (!show) {
        return null;
    }

    const handleClose = (e, forceClose) => {
        if (forceClose) {
            onClose();
            return;
        }


        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="w-screen h-screen bg-black bg-opacity-50 flex fixed top-0 left-0 z-10">
            <div className="bg-white p-8 m-auto w-11/12 md:w-1/2 rounded animate__animated animate__zoomIn relative" style={{ maxHeight: '80vh' }}>
                <button onClick={() => onClose?.()} type="button" className="bg-white rounded-full absolute text-red-400 text-4xl" style={{ top: -15, right: -15 }}>
                    <IoCloseCircle />
                </button>
                {children}
            </div>
        </div>
        ,
        document.getElementById("portal")
    )
}

export default Modal;