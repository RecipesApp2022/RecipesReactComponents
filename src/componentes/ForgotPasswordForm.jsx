import { useState } from "react";
import { IoArrowBackCircleOutline, IoLogInOutline } from "react-icons/io5";
import useAxios from "../hooks/useAxios";
import Logo from "../assets/drafts.png";
import LoginBg from "../assets/img1.jpg";

const ForgotPasswordForm = ({ changeForm }) => {

    const [email, setEmail] = useState('');

    const [showResponseMessage, setShowResponseMessage] = useState(false);

    const [{ error, loading }, sendEmail] = useAxios({ url: `/auth/forgot-password`, method: 'POST' }, { manual: true, useCache: false });

    const handleSubmit = (e) => {
        e.preventDefault();

        sendEmail({
            data: {
                email,
                role: 'CLIENT'
            }
        }).then(() => {
            setShowResponseMessage(true);
            setEmail('');
        });
    }

    return (
        <div className="m-auto grid md:grid-cols-2 md:w-2/3 bg-main animate__animated animate__fadeInUp">
            <div style={{ backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className="flex h-full w-full bg-black bg-opacity-50 p-4">
                    <div className="m-auto" >
                        <img src={Logo} className="m-auto rounded-2xl" alt="RicardoApp" />
                        <h1 className="text-4xl text-center text-white font-bold">Ricardo App</h1>
                        <p className="font-light text-sm text-center text-white">the best platform to grow your Recipes.</p>
                    </div>
                </div>
            </div>
            <div className="p-8">
                <button className="text-white" onClick={() => changeForm('login')}>
                    <IoArrowBackCircleOutline className="text-4xl" />
                </button>
                <h1 className="text-center text-xl text-white font-bold">
                    Forgot Password
                </h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <label className="text-white font-bold mb-4 block">Email Address:</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="your email address..."
                        className="border border-slate-100 rounded-md block py-2 px-2 w-full text-black"
                        onChange={(e) => setEmail(e.target.value)} />
                    <div className="text-right">
                        <button type="button" className="text-white mt-8 ml-auto items-center flex space-x-4" onClick={() => changeForm('login')}>
                            <IoLogInOutline className="text-3xl" /> <span className="text-xl">Back and Login</span>
                        </button>
                    </div>
                    {
                        error &&
                        <h1 className="text-2xl text-center text-red-500 mt-4">
                            An error has occurred.
                        </h1>
                    }
                    {
                        showResponseMessage &&
                        <h1 className="text-2xl text-center text-white mt-4">
                            We have sent you an email please check your email.
                        </h1>
                    }
                    <div className="text-center">
                        <button disabled={loading} className="bg-slate-50 px-2 py-1 rounded-xl w-1/3 mt-8">
                            {
                                loading ?
                                    'Loading'
                                    :
                                    'Send'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordForm;