import { useEffect, useState } from "react";
import Logo from "../assets/drafts.png";
import LoginBg from "../assets/img1.jpg";
import PageLogo from "../componentes/PageLogo";
import { useAuth } from "../contexts/AuthContext";
import useAxios from "../hooks/useAxios";
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ changeForm, onClose }) => {

    const navigate = useNavigate();

    const { setAuthInfo } = useAuth();

    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        passwordVerification: "",
        instagram: '',
        paypal: ''
    });

    const [{ data: registerData, loading: registerLoading }, register] = useAxios({ url: `/auth/register`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        if (registerData) {
            setAuthInfo({
                user: registerData?.user,
                token: registerData?.accessToken
            });
            onClose(null, true);
            navigate('/accountinfo');
        }
    }, [registerData])

    const handleChange = (e) => {
        setData((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e?.preventDefault?.();

        if (registerLoading) return;

        if (data?.password !== data.passwordVerification) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const { passwordVerification, ...rest } = data;

        register({ data: rest });
    }

    return (
        <div className="m-auto grid md:grid-cols-2 bg-main animate__animated animate__fadeInUp">
            <div style={{ backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className="flex h-full w-full bg-black bg-opacity-50 p-4">
                    <div className="m-auto" >
                        <img src={Logo} className="m-auto rounded-2xl" alt="RicardoApp" />
                        <h1 className="text-4xl text-center text-white font-bold">Ricardo App</h1>
                        <p className="font-light text-sm text-center text-white">the best platform to grow your Recipes.</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="p-4 custom-scrollbar custom-scrollbar-light" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <div className="text-center">
                    <PageLogo centered />
                    <h1 className="mt-4 text-2xl text-white font-bold">Registration</h1>
                    <div className="mx-1 my-2 h-px w-0.2 bg-white"></div>
                </div>
                <div className="mt-2 grid md:grid-cols-2 text-white ">
                    <div className="mx-2 my-2">
                        <span className="font-bold">Name and Surname:</span>
                        <input
                            className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={data?.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-2 my-2">
                        <span className="font-bold">E-Mail Address</span>
                        <input
                            className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="email"
                            type="email"
                            name="email"
                            value={data?.email}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="mx-2 my-2">
                        <span className="font-bold">Password</span>
                        <input
                            className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={data?.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-2 my-2">
                        <span className="font-bold">Confirm Password:</span>
                        <input
                            className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="Confirm Password"
                            type="password"
                            name="passwordVerification"
                            value={data?.passwordVerification}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-2 my-2">
                        <span className="font-bold">Contact number and WhatsApp:</span>
                        <input
                            className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="+ 000 000 00000000"
                            type="text"
                            name="phoneNumber"
                            value={data?.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">User Instagram:</p>
                        <input
                            className="border border-slate-100 rounded-m py-2 px-2 w-full text-black"
                            placeholder="@xxxxxxxxxxxx"
                            type="text"
                            name="instagram"
                            value={data?.instagram}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">User PayPal:</p>
                        <input
                            className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="xxxxx@xxxx.xxx"
                            type="email"
                            name="paypal"
                            value={data?.paypal}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-slate-50 px-2 py-1 rounded" disabled={registerLoading}>
                        {
                            registerLoading ?
                                'Loading...'
                                :
                                'Sing in'
                        }
                    </button>
                    <div className="px-2 py-1 mb-2 text-white">
                        <p className="mb-2">You do not have an account? <b className="cursor-pointer text-slate-700" onClick={() => { changeForm('login') }}>Sign in</b></p>
                        <div className=" mb-2 text-center">
                            <p>&copy; 2022 <b className='text-white'>Ricardo APP.</b> All rights reserved. Designed by JV, AN, LV & FJ</p>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default RegisterForm;