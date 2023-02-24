import { useRef } from "react";
import { createPortal } from "react-dom";
import PaypalLogin from "./PaypalLogin";
const PaypalModal = ({ show, onClose }) => {
  const modalRef = useRef();

  if (!show) {
    return null;
  }

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div
      ref={modalRef}
      onClick={handleClose}
      className="flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 fixed z-10"
      style={{ top: 0, left: 0 }}
    >
      <div className="md:max-w-xs w-72 bg-white rounded p-6 animate__animated animate__fadeIn">
       <PaypalLogin
       title="Pay with PayPal"
       help="Forgot Password" 
       login="Sign In" 
       create="Create an Account"
       
       />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PaypalModal;
