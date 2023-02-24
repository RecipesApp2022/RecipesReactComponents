import { useRef, useState } from "react";
import ReactDom from "react-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ show, onClose }) => {

    const [showForm, setShowForm] = useState('login');

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

    const handleForm = (form) => {
        setShowForm(form);
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-10" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            {
                showForm === 'login' &&
                <LoginForm changeForm={handleForm} onClose={onClose} />
            }

            {
                showForm === 'forgot-password' &&
                <ForgotPasswordForm changeForm={handleForm} onClose={onClose} />
            }

            {
                showForm === 'register' &&
                <RegisterForm changeForm={handleForm} onClose={onClose} />
            }
        </div>
        ,
        document.getElementById("portal")
    );
}

export default AuthModal;