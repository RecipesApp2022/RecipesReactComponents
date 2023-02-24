import { useRef } from "react";
import ReactDom from "react-dom";
import { IoCloseCircle } from "react-icons/io5";

const ModalOverlay = ({ show, children, onClose, style }) => {

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
        <div ref={modalRef} onClick={handleClose} className="w-screen h-screen px-8 bg-black bg-opacity-50 flex flex-wrap fixed top-0 left-0 z-10"
            style={{ overflowY: 'auto' }}
        >
            {children}
        </div>
        ,
        document.getElementById("portal")
    )
}

export default ModalOverlay;