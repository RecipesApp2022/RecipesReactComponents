import { useEffect, useState } from "react";
import Logo from "../assets/drafts.png";
import LoginBg from "../assets/img1.jpg";
import PageLogo from "../componentes/PageLogo";
import { useAuth } from "../contexts/AuthContext";
import { useFeedBack } from "../contexts/FeedBackContext";
import useAxios from "../hooks/useAxios";
import Checkbox from "./Checkbox";


const LoginForm = ({ changeForm, onClose }) => {

    const { setAuthInfo } = useAuth();

    const { setLoading } = useFeedBack();

    const [formData, setFormData] = useState({ email: '', password: '' });

    const [{ data: loginData, loading: loginLoading }, login] = useAxios({ url: '/auth/login', method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        setLoading({
            show: loginLoading,
            message: 'Login'
        })
    }, [loginLoading]);

    useEffect(() => {
        if (loginData) {
            setAuthInfo({
                user: loginData?.user,
                token: loginData?.accessToken
            });
            onClose(null, true);
        }
    }, [loginData])

    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        login({ data: formData });
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
            <form onSubmit={handleSubmit} className="p-4">
                <div className="text-center">
                    <PageLogo centered />
                    <h1 className="mt-4 text-2xl text-white font-bold">Login</h1>
                    <div className="mx-1 my-2 h-px w-0.2 bg-white"></div>
                </div>
                <div className="text-white ">
                    <p className="font-bold mt-4">E-Mail Address</p>
                    <input
                        className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleChange}
                    />
                    <p className="font-bold">Password</p>
                    <input
                        className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData?.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex mx-2 my-2 ">
                    <Checkbox className="mt-1.5" />
                    <p className="text-white ml-2" >remember me</p>
                </div>
                <div className="text-center">
                    <button className="bg-slate-50 px-2 py-1 rounded">sing in</button>
                    <div className="px-2 py-1 mb-2 text-white">
                        <p onClick={() => changeForm('forgot-password')} className="mb-2 cursor-pointer">I forgot my password?</p>
                        <p className="mb-2">You do not have an account?
                            <b className="cursor-pointer text-slate-700" onClick={() => { changeForm('register') }}> Sign up</b>
                        </p>
                        <div className=" mb-2 text-center">
                            <p>&copy; 2022 <b className='text-white'>Ricardo APP.</b> All rights reserved. Designed by JV, AN, LV & FJ</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;