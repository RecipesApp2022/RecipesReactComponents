import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useAxios from "../hooks/useAxios";

const ResetPassword = () => {

    const { user } = useAuth();

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const [data, setData] = useState({
        password: "",
        email: "",
        token: "",
        passwordConfirm: ""
    });

    const [showResponseMessage, setShowResponseMessage] = useState(false);

    const [{ loading }, sendResetPassword] = useAxios({ url: `/auth/reset-password`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        const email = searchParams?.get('email');

        const token = searchParams?.get('token');

        if (email && token) {
            setData((oldData) => {
                return {
                    ...oldData,
                    email: email,
                    token: token
                }
            });
        } else {
            navigate('/');
        }
    }, [searchParams]);

    const handleChange = (e) => {
        setData((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loading) return;

        if (data?.password !== data?.passwordConfirm) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const { passwordConfirm, ...rest } = data;

        sendResetPassword({ data: rest }).then(() => {
            setShowResponseMessage(true);
        });

    }

    if (user) {
        navigate('/');
    }

    return (
        <div className="my-20 p-16">
            {
                showResponseMessage ?
                    <div className="w-full mt-8 bg-white shadow p-4 rounded-xl space-y-8 text-center">
                        <h1 className="text-3xl text-gray-400">
                            Congratulations your password has been successfully updated
                        </h1>
                        <p className="text-gray-400">
                            If you want you can go back to home to try to start session again.
                        </p>

                        <Link to="/" className="text-white bg-main px-4 py-2 rounded-xl block">
                            Go to home
                        </Link>
                    </div>
                    :
                    <>
                        <h1 className="bg-main text-white rounded-xl p-4 text-3xl text-center">Enter your new password</h1>

                        <form onSubmit={handleSubmit} className="w-full mt-8 bg-white shadow p-4 rounded-xl">
                            <label className="text-main font-bold my-4 block">New Password</label>
                            <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                                type="password"
                                name="password"
                                value={data?.password}
                                onChange={handleChange}
                                placeholder="New Password..."
                                className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
                            />

                            <label className="text-main font-bold my-4 block">Confirm Password</label>
                            <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                                type="password"
                                name="passwordConfirm"
                                value={data?.passwordConfirm}
                                onChange={handleChange}
                                placeholder="Confirm Password..."
                                className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
                            />
                            <div className="flex items-center justify-center mt-8">
                                <Link to={`/`} className="text-main px-4 py-2 rounded-xl hover:text-black" type="button">
                                    Cancel
                                </Link>
                                <button type="submit" disabled={loading} className="text-white bg-main px-4 py-2 rounded-xl">
                                    {
                                        loading ?
                                            'loading'
                                            :
                                            'Send Password'
                                    }
                                </button>
                            </div>
                        </form>
                    </>
            }
        </div>
    )
}

export default ResetPassword;