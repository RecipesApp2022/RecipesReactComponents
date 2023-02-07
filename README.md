# 🚀 Frontend - Perfil del cliente

 
## Índice de contenidos
* [AppLayout](#item1)
	 * [NavBar](#item2)
	 * [NavInfo](#item3)
	 * [Footer](#item4)
* [LoginForm](#item5)
* [RegisterForm](#item6)
* [SwiperHome](#item7)
* [Card](#item8)
* [CategorySectionCard](#item9)
* [PopularSearch](#item10)
* [SwiperWeightPlan](#item11)
* [CategoriesVideo](#item12)
	* [SesionCategory](#item13)
	* [VideoCategory](#item14)
	* [Video](#item15)
* [Recipes](#item16)
* [ChefsCountries](#item17)
* [AuthModal](#item18)
* [ButtonSupr](#item19)
* [MenuLeft](#item20)
* [CategoriesRecipes](#item21)
* [SelectCategory](#item22)
* [SelectRank](#item23)
* [ButtonRank](#item24)
* [BannerChef](#item25)
* [ButtomButton](#item26)
* [ProductImagenCarousel](#item27)
* [Matches](#item28)
* [MenuConfig](#item29)
* [MyAccountLayout](#item30)
* [PageLogo](#item31)
* [NavSearchBar](#item32)
* [CertificationChef](#item33)
* [Post](#item34)
* [DescriptionChef](#item35)
* [ButtonImage](#item36)
* [Details](#item37)
* [ButtonComprar](#item38)
* [Tab](#item39)
* [TabButton](#item40)
* [TabPanel](#item41)
* [TabsContainer](#item42)
* [TotalShopping](#item43)
* [TotalShoppingPrice](#item44)
* [InformationChef](#item45)
* [DescriptionPost](#item46)
* [CalendarDay](#item47)
* [calendar](#item48)
* [RequireAuth](#item49)
* [ScrollNavegacion](#item50)
* [SearchHome](#item51)
* [ButtonSearch](#item52)
* [WeightPlan](#item53)
* [Swiper](#item54)
* [config](#item55)
* [DescriptionChef](#item56)
* [DescriptionPost](#item57)
* [FormAccount](#item58)
* [InformacionChef](#item59)
* [ingredientRow](#item60)
* [ingredientRowDetails](#item61)
* [LyOverview](#item62)
* [MealDetailOverview](#item63)
* [MealDetailOverviewImages](#item64)
* [PasswordUser](#item65)
* [PaypalLogin](#item66)
* [PaypalUser](#item67)
* [ProductInfo](#item68)
* [BannerPage](#item69)
* [BoxCalendar](#item70)
* [BoxName](#item71)
* [ButtonCart](#item72)
* [ButtonChange](#item73)
* [ButtonItems](#item74)
* [SelectOrder](#item75)
* [CardChef](#item76)
* [CardGym](#item77)
* [CardOrder](#item78)
* [CardPaypal](#item79)
* [CardProduct](#item80)
* [Card Recipes](#item81)
* [CardResum](#item82)
* [CardWithTitle](#item83)
* [Checkbox](#item84)
* [CheckboxConfig](#item85)
* [WaPay](#item86)



<a name="item1"></a>
### AppLayout
 ---
Es el componente padre de enrutamiento entre los hijos NavBar, NavInfo y Footer. 

Este recibe por parametro {children} que permite agregar el contenido o cuerpo  correspondiente a cada página de la aplicación con la estructura ya definida de sus componentes hijos. 

#### Código: 

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web. 

Importación de la libreria Footer, NavBar, NavInfo son componente para una función en particular.

```
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavInfo from "./NavInfo";
const AppLayout = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);
    return (
        <div className="bg-gray-100">
            <NavBar />
            <NavInfo />
            {children}
            <Footer />
        </div>
    	)
    }export default AppLayout;
```

La compilación del código es el diseño de la unión de 3 componente para la construcción de otras posibles vista en nuestro sistema web.

![](https://i.imgur.com/pikOfoH.png)


<a name="item2"></a>
* ### NavBar
 ---
Contiene la parte superior del header donde se ubican los items que direccionan la navegación del usuario hacia categorías, vendedores, notificación e inicio de sesión. 

No recibe ningun parámetro. 

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

Implementación de la líbreria en este es un caso de uso perfecto para un useAuthgancho que habilita cualquier componente. para obtener el estado de autenticación actual y volver a renderizar si cambia. 

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.


#### Código
```
import PageLogo from "./PageLogo";
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import AuthModal from "./AuthModal";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MenuConfig from "./MenuConfig";
import MobileMenuButton from "./MobileMenuButton";
import clsx from "clsx";
import MovilMenuSearch from "./MovilMenuSearch";
import NotificationComponent from "./Notifications/NotificationComponent";

const NavBar = () => {
    
    const { user } = useAuth();

    const [searchParams] = useSearchParams();

    const [showModal, setShowModal] = useState(false);

    const [showModalMenu, setShowModalMenu] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    const [currentPath, setCurrentPath] = useState(""); //pat escucha 
    useEffect(() => {
        setShowModal(searchParams?.get('showLogin'));
    }, [searchParams])
    const handleToggleModal = () => {
        setShowModal((oldShowModal) => !oldShowModal);
        return;
    }
    const handleToggleMenu = () => {
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }
    const location = useLocation();
    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);
    return (
        <>
            <div className="bg-gray-800 text-white h-14 px-4">
                <div className="container h-full">
                    <div className="flex md:justify-none items-center h-full text-base">
                        <PageLogo />
                        {/* <NavSearchBar /> */}
                        <div className="flex ml-auto md:space-x-10 space-x-8 items-center h-full" >
                            <Link to={"/Categories"} className="hidden md:block hover:text-main">
                                <p className={clsx({
                                    "text-main title-medium md:text-lg": currentPath === '/Categories',
                                    'text-white title-medium md:text-lg': currentPath !== '/Categories'
                                })}>
                                    Categories
                                </p>
                            </Link>
                            <Link to={"/Sellers"} className="hidden md:block hover:text-main">
                                <p className={clsx({
                                    "text-main title-medium md:text-lg": currentPath === '/Sellers',
                                    'text-white title-medium md:text-lg': currentPath !== '/Sellers'
                                })}>
                                    Sellers
                                </p>
                            </Link>
                            {
                                user &&
                                <NotificationComponent />
                            }
                            <button
                                className="md:hidden hover:text-main"
                                onClick={() => setShowModalMenu(true)}
                            >
                                <BiSearchAlt className="h-6 w-6 md:ml-10" />
                            </button>
                            <button onClick={user ? handleToggleMenu : handleToggleModal} className="hidden md:block relative items-center hover:text-main bg-transparent 
                                    bg-gray-800 border border-slate-300 hover:border-main rounded-md py-2 px-2.5">
                                <div className="flex text-lg">
                                    <FaUserCircle className="m-auto mr-2" />
                                    {user ? user.name : 'Log in'}
                                    <MenuConfig show={showMenu} onClose={() => setShowMenu(false)} />
                                </div>

                            </button>
                            <MobileMenuButton />
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal show={showModal} onClose={handleToggleModal} />
            <MovilMenuSearch show={showModalMenu} onClose={() => setShowModalMenu(false)} />
        </>
    );
    }export default NavBar;
```
Cómo resultado de la ejecución de código es:

![](https://i.imgur.com/5uM6FpB.png)



<a name="item3"></a>
* ### NavInfo
 ---
Contiene la barra inferior del header, está compuesto por la localización, direccionamientos hacia recetas, planes y combos.

Cómo parámetro no recibe nada.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web. 

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import { BiMap } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import clsx from "clsx";

const NavInfo = () => {
    const [currentPath, setCurrentPath] = useState(""); //pat escucha 
    const location = useLocation();
    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);
    return (
        <div className="bg-main text-black py-1">
            <div className="relative flex items-center justify-center">
                <BiMap className="text-white text-xl absolute left-5" />
                <div className="flex items-center justify-center flex-wrap">
                    <nav className="flex items-center space-x-10  md:space-x-20">
                        <Link to={"/recipes"}>
                            <p className={clsx("hover:text-white", {
                                "text-white title-medium md:text-lg": currentPath === '/recipes',
                                "text-black title-medium md:text-lg": currentPath !== '/recipes'
                            })}>
                                Recipes
                            </p>
                        </Link>

                        <Link to={"/plans"}>
                            <p className={clsx("hover:text-white", {
                                "text-white title-medium md:text-lg": currentPath === '/plans',
                                "text-black title-medium md:text-lg": currentPath !== '/plans'
                            })}>
                                Plans
                            </p>
                        </Link>
                        <Link to={"/combos"}>
                            <p className={clsx("hover:text-white", {
                                "text-white title-medium md:text-lg": currentPath === '/combos',
                                "text-black title-medium md:text-lg": currentPath !== '/combos'
                            })}>
                                Combos</p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div >
    );
    }export default NavInfo;
```
![](https://i.imgur.com/hP1OO0n.png)

 
<a name="item4"></a>
* ### Footer
 ---
Almacena toda la información del pié de página y no es necesario que reciba ningun parámetro ya que el componente consiste en el diseño del footer.

Cómo parémetro no recibe nada.

#### Código

```
import React from "react";
import PageLogo from "./PageLogo";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto p-5 md:m-auto">
      <div className="container h-full">
        <div className="flex items-center justify-center mb:ml-8 mt-4 md:justify-start">
          <PageLogo />
          <b className="ml-4 title-medium">Ricardo APP</b>
        </div>
        <ul className="grid grid-cols-2 gap-8 p-6 md:px-28  md:grid-cols-4 md:mt-4 ">
          <li>
            <h1 className="font-bold my-4">
              Get in touch
            </h1>
            <ul>
              <li className="md:my-4">About Us</li>
              <li className="md:my-4">Careers</li>
              <li className="md:my-4">Press Releases</li>
              <li className="md:my-4">Blog</li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold my-4">Connections</h1>
            <ul className="">
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <SiFacebook className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Facebook
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <SiTwitter className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Twitter
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <SiInstagram className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Instagram
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <IoLogoYoutube className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Youtube
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <FaLinkedinIn className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                LinkedinIn
              </li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold my-4">
              Earnings
            </h1>
            <ul>
              <li className="md:my-4">Become an Affiliate</li>
              <li className="md:my-4">Advertise your product</li>
              <li className="md:my-4">Sell on Market</li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold my-4">
              Account
            </h1>
            <ul>
              <li className="md:my-4">Your account</li>
              <li className="md:my-4">Returns Centre</li>
              <li className="md:my-4">100 % purchase protection</li>
              <li className="md:my-4">Chat with us</li>
              <li className="md:my-4">Help</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-center mt-10 ">
        <p>&copy; 2022 <span className='text-main'>Ricardo APP.</span> All rights reserved. Designed by JV, AN, LV & FJ.</p>
      </div>
    </footer >
  );
}
```
    
![](https://i.imgur.com/69B1bHz.png) 


<a name="item5"></a>
### LoginForm
 ---
La vista del login donde el usuario agrega datos para validar su acceso a la plataforma.

Recibe como parámetro { changeForm, onClose } changeForm, lo que hace es avisar al componente padre en que modal estoy y onClose me permite cerrar el modal donde se encuentre.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la líbreria useAxios es un cliente HTTP basado en promesasnode.js para el navegador. Es isomorfo (= puede ejecutarse en el navegador y nodejs con la misma base de código). En el lado del servidor usa el httpmódulo nativo node.js, mientras que en el cliente (navegador) usa XMLHttpRequests.

#### Código
```
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
}export default LoginForm;
```
Cómo ejecución el resultado obtenido del código es lo que se visualiza en la imagen.

![](https://i.imgur.com/hWaV5bx.png)


<a name="item6"></a>
### RegisterForm
 ---
Página en la cual el usuario puede rellenar los campos requeridos para el registro en la aplicación.

Recibe como parámetro { changeForm, onClose }, changeForm lo que hace es avisar al componente padre en que modal estoy y onClose me permite cerrar el modal donde se encuentre.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la líbreria useAxios es un cliente HTTP basado en promesasnode.js para el navegador. Es isomorfo (= puede ejecutarse en el navegador y nodejs con la misma base de código). En el lado del servidor usa el httpmódulo nativo node.js, mientras que en el cliente (navegador) usa XMLHttpRequests.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

#### Código
```
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
                        <input className="border border-slate-100 rounded-m py-2 px-2 w-full text-black"
                            placeholder="@xxxxxxxxxxxx" type="text" name="instagram" value={data?.instagram} onChange={handleChange}/>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">User PayPal:</p>
                        <input className="border border-slate-100 rounded-md py-2 px-2 w-full text-black"
                            placeholder="xxxxx@xxxx.xxx" type="email" name="paypal" value={data?.paypal} onChange={handleChange}/>
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
}export default RegisterForm;
```
![](https://i.imgur.com/T8lMgYk.png)


<a name="item7"></a>
### SwiperHome
 ---
Contiene las imágenes de portada modo slider, este componente no recibe parámetros. 

Cómo parámetro no recibe nada.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SearchHome from "../componentes/SearchHome";
const SwiperHome = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <div className='relative'>
            <Swiper
                slidesPerView={innerWidth > 768 ? 1 : 1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true, }}
                navigation={true}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <img className="w-full h-40 md:h-72" src={img1} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-40 md:h-72" src={img2} alt="img2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-40 md:h-72" src={img3} alt="imh3" />
                </SwiperSlide>
            </Swiper>
            <SearchHome />
        </div>
    );
}export default SwiperHome; 
```
Cómo ejecución el resultado obtenido del código es lo que se visualiza en la imagen, Sólo se encarga de mostrar la imagen del banner.

![](https://i.imgur.com/Glk2nCD.jpg) 


<a name="item8"></a>
### Card
 ---
Titulación de las secciones. Recibe parámetro de texto modificable, debido a que se utiliza en varias secciones del home.

Cómo parámetros recibe una variable llamada props que es la encargada del nombre que se mostrará en el resultado de la ejecución del componente en la plataforma.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web. 

#### Código
```
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Fragment>
      <div className="relative flex justify-center text-center md:h-14 cursor-pointer rounded md:text-2xl md:px-2 py-2 mx-8 md:my-8 font-semibold shadow bg-main 	text-white">
        {props.saludo}
        {props.link && <Link to={props.link} className="absolute right-10 hidden md:block mt-2 text-base cursor-pointer hover:text-black">{props.title}</Link>}
      </div>
    </Fragment>
  );
};
export default Card;
```

Cómo ejecución el resultado obtenido del código es lo que se visualiza en la imagen.

![](https://i.imgur.com/oKX0UsN.jpg)


<a name="item9"></a>
### CategorySectionCard
 ---
Componente utilizado para las imágenes de las categorías.

Este componente recibe los siguientes parámetros:  
img: Imagen de fondo.  
name: Nombre de la categoría.  
categoryId: Id de la categoría.  
withoutPaddingY: Son variables lógicas que se encarga del Padding del diseño de la cajita de categoría.  
withoutBgCover: Son variables lógicas que se encarga de escalar la imagen para que ocupe toda la caja. Solo son llamadas si deseo que se muestre o no.  

#### Código
```
import clsx from "clsx";
import { forwardRef } from "react";
const CategorySectionCard = forwardRef(({
    className,
    img,
    name,
    categoryId,
    withoutPaddingY = false,
    withoutBgCover = false,
}, ref) => {
    return (
        <a href={`/recipes?categoryId=${categoryId}`}>
            <div
                ref={ref}
                className={clsx(`
                flex items-center justify-center
                relative 
                w-full
                rounded-md
                transition transform hover:-translate-y-1
                hover:drop-shadow-2xl
                duration-300
                cursor-pointer
            `, {
                    'py-10': !withoutPaddingY,
                    'bg-cover': !withoutBgCover,
                }, className)}
                style={{ backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}
            >
                <div className='rounded-md absolute bg-black h-full w-full opacity-30' >
                </div>
                <div className="relative text-white text-center text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >
                    {name}
                </div>
            </div>
        </a>
    );
})export default CategorySectionCard;
```

Cómo ejecución del código se muestra su resultado en pantalla.

![](https://i.imgur.com/X0b6gXh.jpg)


<a name="item10"></a>
### PopularSearch
 ---
Rectángulo con estilos específicos donde se agrega la información popular, imagen y texto de una sección publicitaria. 

Este componente recibe dos parámetros tipo string:  
img: Imagen de la sesión de popular.  
title: Título de la publicidad.  

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web. 

```
import React from 'react';
import { Link } from 'react-router-dom';

const PopularSearch = ({ title, img, url }) => {
    return (
        <div className="flex bg-white w-full rounded-md overflow-hidden shadow-md">
            <div className='justify-around items-center py-3 px-4 w-full'>
                <div className='text-3xl px-4 py-3 font-bold'>
                    {title}
                </div>
                <br />
                <Link to={url} className="bg-main text-white py-2 px-3 rounded my-4 mx-4">
                    See more
                </Link>
            </div>
            <div className="w-full">
                <img className='w-full h-full' src={img} alt="PopularSearch" />
            </div>
        </div>
    );
}
export default PopularSearch;
```
Cómo ejecución del código se muestra su resultado en pantalla.

![](https://i.imgur.com/epl8lQh.jpg)


<a name="item11"></a>
### SwiperWeightPlan
 ---
Sección de los planes, donde se trae información de los planes como imagen, título y descripción breve.  

No recibe ningún parámetro.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código

```
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WeightPlan from '../componentes/WeightPlan';
import { Navigation } from "swiper";
import usePlans from "../hooks/usePlans";
import SystemInfo from "../util/SystemInfo";

const SwiperWeightPlan = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const [filters, setFilters] = useState({
        page: 1,
        perPage: 10,
        hideClientPlans: 'true'
    })

    const [{ plans }] = usePlans({
        params: {
            ...filters
        }
    });

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="container px-8">
            <Swiper
                slidesPerView={innerWidth > 768 ? 3 : 1}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper m-auto "
            >
                {plans.map(plan => <SwiperSlide key={plan.id}>
                    <WeightPlan
                        price={`${plan?.price}$`}
                        hideCart
                        logo={`${SystemInfo.api}${plan?.seller?.logo}`}
                        img={`${SystemInfo.api}${plan?.images?.[0]?.path}`}
                        title={plan?.name}
                        text={plan?.description}
                    />
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
}

export default SwiperWeightPlan;
```

Cómo ejecución de código se muestra lo que se vera en la imagen.
![](https://i.imgur.com/XTwqKMq.jpg)


<a name="item12"></a>
### CategoriesVideo
 ---
Toda la sección de categorías con videos. 

No recibe ningún parámetro.

#### Código

```
import category from "../assets/category3.jpg"
import CategorySectionCard from "./CategorySectionCard";
import React from 'react';
import SesionCategory from "./SesionCategory";
import VideoCategory from "./VideoCategory";

const CategoriesVideo = () => {
    return (
        <div className="bg-white">
            <div className="container p-4 ">
                <SesionCategory />
                <div className=" md:p-8 md:flex">
                    <div className="md:w-8/12 p-1">
                        <VideoCategory />
                    </div>
                    <div className="md:w-4/12 p-2 ">
                        <CategorySectionCard
                            img={category}
                            name="Paleo"
                            className={"py-40 bg-full"}
                            withoutPaddingY
                            withoutBgCover
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CategoriesVideo;
```

Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/OcBFt3l.jpg)


<a name="item13"></a>
* ### SesionCategory
 ---
Select de las categorías.  

No tiene ningún parámetro.

#### Código

```
const SesionCategory = () => {
    return (
        <form className="m-10 ml-8 m-50 cursor-pointer ">
            <select className="text-main font-semibold text-lg bg-white border border-gray-400 rounded-md py-1.5 md:px-20  
                         focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 leading-4">
                <option value="">New recipes</option>
                <option value="">Low in calories</option>
                <option value="">Paleo</option>
                <option value="">High in protein </option>
            </select>
        </form >
    );
}
export default SesionCategory;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/lVviHpJ.jpg)


<a name="item14"></a>
* ### VideoCategory
 ---
Descripción del vídeo, contiene imagen y nombre del vendedor, nombre de la receta.  

Cómo parámetro no recibe nada.

#### Código
```
import React from 'react';
import Video from './Video';

const VideoCategory = () => {
    return (
        <div className="h-full md:w-full grid md:grid-cols-3 md:gap-3">
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
        </div>
    );
}
export default VideoCategory;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/BlF8cca.jpg) 


<a name="item15"></a>
* ### Video
 ---
Modelo de la estructura de la card donde se muestra el video.

```
import ReactPlayer from 'react-player';
import chefsSw from '../assets/chefsSw.jpg';

const Video = ({ name, subname }) => {
    return (
        <div className="text-white">
            <div className="h-36 bg-black rounded-lg overflow-hidden">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=WmLNXXlo3rQ'
                    height={'100%'}
                    width={'100%'}
                    className="rounded-lg"
                />
            </div>
            <div className="flex">
                <img className="rounded-full h-10 w-10" src={chefsSw} alt="" />
                <div className="grid grid-rows-2 m-0.5">
                    <p className="text-black font-semibold ">{name}</p>
                    <p className="text-gray-500 text-xs font-semibold ">{subname}</p>
                </div>
            </div>
        </div>
    );
}
export default Video;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/ZbqvqxU.jpg)


<a name="item16"></a>
### Recipes
 ---
Componente que contiene la estructura de la plantilla de como se muestra la receta en el home. 

![](https://i.imgur.com/R1kSxvW.jpg) 

 
[Subir](#top)




<a name="item17"></a>
### ChefsCountries
 ---
Contiene sección de chefs populares por países. 

![](https://i.imgur.com/s8M3PYt.jpg) 

 
[Subir](#top)



<a name="item18"></a>
### AuthModal
 ---
Este componente es el encargado de la validación de escuchar el clic al seleccionar el Button de inicio de sesión donde nos permite iniciar en la vista del login o en la vista del registro.


![](https://i.imgur.com/sv9LjAY.jpg)  
 
[Subir](#top)


<a name="item19"></a>
### ButtonSupr
 ---
Componente con las dos opciones de vista (Grid View, ListView). en las pantallas de resultados de busqueda.

![](https://i.imgur.com/oblMl0x.jpg)

[Subir](#top)



<a name="item20"></a>
### MenuLeft
 ---
Este componente es el encargado de la estructura del sistema de filtrado que aparece en el lateral izquierdo en las pantallas de resultados de búsqueda.  A su vez contiene 6 componentes.   

![](https://i.imgur.com/4iNFTtX.jpg) 
 
[Subir](#top)



<a name="item21"></a>
### CategoriesRecipes
 ---
Componente encargado del filtrado por categorías.

![](https://i.imgur.com/nodHnhR.jpg) 
 
[Subir](#top)



<a name="item22"></a>
### SelectCategory
 ---
Componente encargado del filtrado por Types.

![](https://i.imgur.com/czTDiK6.jpg)
 
[Subir](#top)



<a name="item23"></a>
### SelectRank
 
Componente encargado del filtrado por Ranking. 

![](https://i.imgur.com/qb1jAl5.jpg)
 
[Subir](#top)



<a name="item24"></a>
### ButtonRank 
 
Componente con botones para aplicar o resetear los filtros.

![](https://i.imgur.com/SSGvOPm.jpg)

[Subir](#top)



<a name="item25"></a>
### BannerChef
 
Este componente contiene la estructura de las cards con la información mostrada de cada vendedor desde la vitrina de vendedores y el home.

![](https://i.imgur.com/KQQe1Zd.jpg)
 
[Subir](#top)



<a name="item26"></a>
### ButtomButton
 
Componente con botones de paginación que se repite en varias secciones.

![](https://i.imgur.com/7UNmpRB.jpg)
 
[Subir](#top)



<a name="item27"></a>
### ProductImagenCarousel

Componentes con la vista de las imagenes en el detalle del producto

![](https://i.imgur.com/6KCthjp.jpg)
 
[Subir](#top)




<a name="item28"></a>
### Matches
 
Botones de interaccion con funcionalidades para hacer match, agregar a favoritos o descartar un producto.

![](https://i.imgur.com/VrVdiMo.jpg)

[Subir](#top)




<a name="item29"></a>
### MenuConfig
 
Componente padre del menu desplegable del panel de usuario con iconos e item.

![](https://i.imgur.com/15MaLOu.jpg)

[Subir](#top)




<a name="item30"></a>
### MyAccountLayout
 
Panel de herramientas del usuario vista con iconos.

![](https://i.imgur.com/yG20mk5.jpg)
 
[Subir](#top)




<a name="item31"></a>
### PageLogo
 
Componente con el logo de la app que se adapta al tamaño adecuado.

![](https://i.imgur.com/2sY7Kq7.jpg)
 
[Subir](#top)




<a name="item32"></a>
### NavSearchBar
 
Select de los tipos que encontramos en el header.

![]()

[Subir](#top)





<a name="item33"></a>
### CertificationChef
 
Componente con informacion profesional del vendedor desde su perfil.

![](https://i.imgur.com/0FU20yz.jpg)
 
[Subir](#top)






<a name="item34"></a>
### Post
 
Entradas del blog del vendedor ubicadas en el lateral izquierdo del perfil del vendedor.

![](https://i.imgur.com/k4IAEZ8.jpg)
 
[Subir](#top)






<a name="item35"></a>
### DescriptionChef
 
Descripcion escrita por el vendedor en su perfil

![](https://i.imgur.com/lOrkBhB.jpg)
 
[Subir](#top)





<a name="item36"></a>
### ButtonImage
 
Este componente contiene los botones de opcion de compra de ingredientes en Wallmart, Insta card y Amazon Fresh, los cuales redireccionan hacia estos sitios para realizar la compra con esos supermercados. Asi mismo se encuentra dentro de este el boton de pago del producto (receta, plan o combo) a traves de pay pal. 


![](https://i.imgur.com/kXCgkaW.jpg) 
![](https://i.imgur.com/ZSwrYTC.jpg)
 
[Subir](#top)





<a name="item37"></a>
### Details
 
components que encargado de mostrar esta informacion que se encuentra en la vista de detalle de recetas, combos y planes (Level, categoria, time, igredientes)


![](https://i.imgur.com/ICEzwHy.jpg)
 
[Subir](#top)






<a name="item38"></a>
### ButtonComprar
 
Componentes de boton de comprar (desde la caja blanca hasta el boton en la vista del detalle del producto(recetas....) 


![](https://i.imgur.com/W5vbfBG.jpg)
 
[Subir](#top)





<a name="item39"></a>
### Tab
 
Componente dinamico encargado del movimiento del cambio de las lista seleccionada.


![](https://i.imgur.com/EjGCgq4.jpg)

[Subir](#top)





<a name="item41"></a>
### TabPanel
 
componente encargado de mostar o ocultar la informacion de sus hijos dependiendo de la pestaña seleccionada.


![](https://i.imgur.com/EjGCgq4.jpg)

[Subir](#top)







<a name="item42"></a>
### TabsContainer
 
chequea que sus hijos si es 1 lo muestra si son muchos lo rederiza.


![](https://i.imgur.com/XmcMSTW.jpg)
 
[Subir](#top)





<a name="item43"></a>
### TotalShopping
 
componente encargado de mostrar imagen de un tamaño en particular para la vista del producto


![](https://i.imgur.com/fUptzyn.jpg)

[Subir](#top)







<a name="item44"></a>
### TotalShoppingPrice
 
Componente  encargado de mostrar precio en la vista del detalle del producto unico

![](https://i.imgur.com/W5vbfBG.jpg)
 
[Subir](#top)





<a name="item45"></a>
### InformationChef
 
componente encargado de Mostrar las redes sociales de chef


![](https://i.imgur.com/7BfR5Ig.jpg)
 
[Subir](#top)







<a name="item46"></a>
### DescriptionPost
 
Componente encargado de mostra del detalle de la descripcion de post del blog


![](https://i.imgur.com/PNWKOmO.jpg)

[Subir](#top)





<a name="item47"></a>
### CalendarDay
 
Componente encargado de recibir el dia correspondiente del calendar


![](https://live.staticflickr.com/65535/52094212550_2251271785_m.jpg)
 
[Subir](#top)




<a name="item48"></a>
### calendar
 
Componente encargado del diseño del calendario 


![](https://i.imgur.com/pPh6blH.jpg)
 
[Subir](#top)





<a name="item49"></a>
### RequireAuth
 
Componente de autenticacion del login de usuario. Envuelve MyAccountLayou.


![](https://i.imgur.com/H2GSeFq.png) 
 
[Subir](#top)






<a name="item50"></a>
### ScrollNavegacion
 
Componente encargado de contener el diseño circular. Componente principal ButtonButton(ScrollNavegacion)


![](https://i.imgur.com/axBDP5H.png)

[Subir](#top)





<a name="item51"></a>
### SearchHome
 
Componente encargado de motor de Busqueda en el home contiene el componente ButtonSearch


![](https://i.imgur.com/VUipCHj.jpg)
 
[Subir](#top)



<a name="item52"></a>
* ### ButtonSearch
 
Componente encargado del selector de busqueda por sus categorias.


![](https://i.imgur.com/ZcvnIqL.jpg)

[Subir](#top)





<a name="item53"></a>
### WeightPlan
 
Componente de la vista de cuadro de planes. 

![](https://i.imgur.com/zz5z3jo.jpg)

[Subir](#top)







<a name="item54"></a>
### Swiper
 
CategoryCard, Combos, Home, Overview, Popular, Recipes, WeightPlan


![]()

[Subir](#top)





<a name="item55"></a>
### config
 
Componente de la parte del usuario en la vista de configuracion.


![](https://i.imgur.com/EABaJmL.png)

[Subir](#top)





<a name="item56"></a>
### DescriptionChef
 
Componente encargado del chef de la description del menu lateral


![](https://i.imgur.com/Z317Uop.jpg)
 
[Subir](#top)





<a name="item57"></a>
### DescriptionPost
 
Componente encargado de mostrar la informacion de post de Anya del menu lateral


![](https://i.imgur.com/lbnWbfI.jpg)

[Subir](#top)




<a name="item58"></a>
### FormAccount
 
Componente de la informacion personal de user en la vista de usuario (my personal informayion)


![](https://i.imgur.com/oBI4w4l.jpg)

[Subir](#top)





<a name="item59"></a>
### InformacionChef
 
Datos de los canales de venta del chef que aparece en el menu lateral.


![](https://i.imgur.com/KmzMHy8.jpg)

[Subir](#top)







<a name="item60"></a>
### ingredientRow
 
Componente encargado del diseño del cuadro de la lista de ingredientes.


![](https://i.imgur.com/NZWLwnL.jpg)
 
[Subir](#top)





<a name="item61"></a>
### ingredientRowDetails

Componente encargado del detalle que lleva cada vista de la lista de ingredientes.


![](https://i.imgur.com/NZWLwnL.jpg)

[Subir](#top)




<a name="item62"></a>
### LyOverview

Componente encargado del diseño de las letras de la vista overview


![](https://i.imgur.com/PwvSgsV.jpg)

[Subir](#top)




<a name="item63"></a>
### MealDetailOverview

componente del scroll de la vista por dia.


![]()

[Subir](#top)




<a name="item64"></a>
### MealDetailOverviewImages

Componete encargado de mostrar la imagenes al seleccionar un cuadro de la vista de overview.

![]()

[Subir](#top)




<a name="item65"></a>
### PasswordUser

Componente donde permite al usuario agregar contraseña en la vista paypal user.

![](https://i.imgur.com/R2OqFUW.png)
 
[Subir](#top)

<a name="item65"></a>
### PaypalLogin

Componente que fue creado para mostrar el diseño de PayPal de iniciar sesión de paypal.

![](https://i.imgur.com/Ohu20I5.png)
 
[Subir](#top)



<a name="item67"></a>
### PaypalUser

Componente que se encarga de colocar la informacion de my paypal en la vista de user.


![](https://i.imgur.com/Ua3GKRL.jpg)

[Subir](#top)




<a name="item68"></a>
### ProductInfo

Componente que se encarga mostrar todo el contenido de la vista de detalle del producto.

![](https://i.imgur.com/oaZUbKe.jpg)

[Subir](#top)




<a name="item69"></a>
### BannerPage

componente del banner de las diferente vista (revision).

![](https://i.imgur.com/aG1xRyc.png)

[Subir](#top)




<a name="item70"></a>
### BoxCalendar

Componente encargado del diseño del cuadro del calendario de la vista del usuario

![](https://i.imgur.com/9gQbIlN.jpg)

[Subir](#top)




<a name="item71"></a>
### BoxName

Componente que recibe el texto del dia de la semana (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday).

![]()

[Subir](#top)




<a name="item72"></a>
### ButtonCart

Componente del boton de carrito.

![](https://i.imgur.com/xYF5GkZ.jpg)

[Subir](#top)




<a name="item73"></a>
### ButtonChange

Componente del boton de change

![](https://i.imgur.com/8FCip2e.png)

[Subir](#top)




<a name="item74"></a>
### ButtonItems

Componente que se encarga del diseño del boton de seleccion de (recipes, plans y combos)

![](https://i.imgur.com/O9JlBX9.png)

[Subir](#top)




<a name="item75"></a>
### SelectOrder

Componente del diseño de lista de ordenar por del vendedor.	

![](https://i.imgur.com/Q31CQTS.png)

[Subir](#top)




<a name="item76"></a>
### CardChef

Componente del vendedor. Vista sellers.

![](https://i.imgur.com/s4rgz6r.jpg)

[Subir](#top)





<a name="item78"></a>
### CardOrder

Componente donde aparece foto de nombre del vendedor, order, sellers.

![](https://i.imgur.com/IDxf85y.png)

[Subir](#top)




<a name="item79"></a>
### CardPaypal

Componente que se encuentra en la vista de la forma de pago de paypal (logo y modificar).

![](https://i.imgur.com/HYISllZ.png)

[Subir](#top)




<a name="item80"></a>
### CardProduct

Componente que contiene imagen y titulo del producto en la vista de paypal.

![](https://i.imgur.com/fgykcjx.png)

[Subir](#top)




<a name="item81"></a>
### CardRecipes

Componente de las recetas. 

![](https://i.imgur.com/eJSBoxj.png)

[Subir](#top)




<a name="item82"></a>
### CardResum

Componente de orden de resum en paypal.

![](https://i.imgur.com/3fKcpYB.jpg)

[Subir](#top)




<a name="item83"></a>
### CardWithTitle

Componente que fue realizado para la parte de configuraciones de My servings en la vista de usuario.

![](https://i.imgur.com/wv1BuLk.jpg)

[Subir](#top)






<a name="item84"></a>
### Checkbox

Componente del checkbok cuadrado.

![](https://i.imgur.com/D2ZuNwI.jpg)

[Subir](#top)




<a name="item85"></a>
### CheckboxConfig

Componente del checkbok circular.

![](https://i.imgur.com/tBic1Xs.jpg)

[Subir](#top)




<a name="item86"></a>
### WaPay

Componente encargado de mostrar la informacion de la lista de comparador de precio

![](https://i.imgur.com/tvnn47v.png)

[Subir](#top)


