import { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useFeedBack } from "../../contexts/FeedBackContext";
import useAxios from "../../hooks/useAxios";

const ContactSellerModal = ({ show, onClose, seller }) => {

    const { user } = useAuth();

    const { setCustomToast } = useFeedBack();

    const modalRef = useRef();

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const [message, setMessage] = useState('');

    const [{data: messageData}, sendMessage] = useAxios({ url: `/chats`, method: 'POST' }, { manual: true });

    useEffect(() => {
        if (messageData) {
            setCustomToast({ message: 'Message sent successfully!', severity: 'success', show: true, position: 'top-right' })
            onClose();
            setMessage('');
        }
    }, [messageData]);

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

    const handleSubmit = (e) => {
        e.preventDefault?.();

        sendMessage({ data: {
            content: message,
            sellerId: seller.sellerId,
        }});
    }

    const handleAuth = () => {
        if (searchParams?.get('showLogin')) {
            window.location.reload();
        } else {
            navigate('?showLogin=true')
        }
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-10" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            <div className="m-auto bg-white md:w-2/3 rounded p-4 animate__animated animate__fadeInUp">
                {
                    user ?
                        <>
                            <div className="text-center text-gray-500">
                                <h1>Send your message to:</h1>
                                <br />
                                <b className="text-2xl">{seller?.name}</b>
                                <div className="flex justify-center">
                                    <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                    <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                    <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                    <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                    <AiOutlineStar className="mt-2 text-gray-300 h-6 w-6" />
                                </div>
                            </div>
                            <form className="px-8" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="font-semibold w-full d-block" htmlFor="message">
                                        Your Message:
                                    </label>
                                    <textarea
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        className="w-full rounded"
                                        id="message"
                                        cols="30"
                                        rows="5"
                                        value={message}
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <button className="bg-main w-full rounded px-4 py-2 tran hover:text-white" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </>
                        :
                        <div className="text-center">
                            <div className="text-gray-500">
                                <h1 className="text-4xl font-semibold">
                                    Please login or register
                                </h1>
                                <br />
                                <p>
                                    we need you to <Link to="?showLogin=true" className="text-main">create an account</Link> is totally free. or if you already have a account <Link to="?showLogin=true" className="text-main">login</Link> to be able to contact this seller.
                                </p>
                            </div>
                            <div style={{ padding: '0px 25%' }}>
                                <button onClick={handleAuth} type="button" to="?showLogin=true" className="bg-main block my-4 w-full rounded-full py-4 hover:text-white">
                                    <p className="text-2xl">Login</p>
                                </button>
                                <button onClick={handleAuth} type="button" to="?showLogin=true" className="bg-main block my-4 w-full rounded-full py-4 hover:text-white">
                                    <p className="text-2xl">Create Account</p>
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div >
        ,
        document.getElementById("portal")
    );
}

export default ContactSellerModal;