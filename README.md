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
* [Comment](#item38)
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
* [CommentsComponent](#item87)
* [CreatePlanForm](#item88)
* [DateFormatter](#item89)
* [DescriptionChef](#item90)
* [FeatureRow](#item91)
* [ForgotPasswordForm](#item92)
* [GridComponent](#item93)
* [ImagenCrudComponent](#item94)
* [ImgeUploadInput](#item95)
* [ListComponent](#item96)
* [MobileMenuButton](#item97)
* [ModalFiltre](#item98)
* [MovilMenuSearch](#item99)
* [NotificationTypeCheck](#item100)
* [OrderItemRow](#item101)
* [pagination](#item102)
* [RatingComponent](#item103)
* [RecupeFeatures](#item104)
* [RenderActionsButtons](#item105)
* [RenderCommentable](#item106)
* [Search Movil](#item107)
* [ShowMoreButton](#item108)
* [ShorRecipeRow](#item109)
* [StepFive](#item110)
* [StepOne](#item111)
* [StepSix](#item112)
* [StepThree](#item113)
* [StepTwo](#item114)


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

[Subir](#top)

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

[Subir](#top)

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

[Subir](#top)

 
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

[Subir](#top)

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

[Subir](#top)

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

[Subir](#top)

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

[Subir](#top)

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
 
 [Subir](#top)


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

[Subir](#top)

<a name="item10"></a>
### PopularSearch
 ---
Rectángulo con estilos específicos donde se agrega la información popular, imagen y texto de una sección publicitaria. 

Este componente recibe dos parámetros tipo string:  
img: Imagen de la sesión de popular.  
title: Título de la publicidad.  
url: url de la publicidad.

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

[Subir](#top)

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
 
 [Subir](#top)


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

[Subir](#top)
 
<a name="item13"></a>
### SesionCategory
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

[Subir](#top)
 
<a name="item14"></a>
### VideoCategory
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

[Subir](#top)


<a name="item15"></a>
* ### Video
 ---
Modelo de la estructura de la card donde se muestra el video.

Este componente recibe dos parámetros tipo string:  
name: recibe el nombre de vídeo.  
subname: Título de la publicidad.  

Importación de la líbreria react-player Componente react para reproducir una variadad de URL, incluidas rutas de archivos y YouTube.

#### Código
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
![](https://i.imgur.com/GTLA87F.png)
 
[Subir](#top)


<a name="item16"></a>
### Recipes
 ---
Componente que contiene la estructura de la plantilla de como se muestra la receta en el home. 

Cómo parametro en el componente recibe { title, descsh, desccost, cost, img, level, time, ing, withDefaultButtons = true }

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";

const Recipes = ({ title, descsh, desccost, cost, img, level, time, ing, withDefaultButtons = true }) => {

    return (
        <div className="lg:flex bg-white rounded-md overflow-hidden shadow-md">
            <div className="lg:w-5/12">
                <img className='sm:h-32 md:h-56 lg:h-72 w-full md:block rounded-md' src={img} alt="Recipes" />
            </div>
            <div className="xl:flex py-4 px-4 md:h-full lg:w-7/12">
                <div className='mr-4 md:m-0 w-4/5'>
                    <div className='font-bold text-xl'>
                        {title?.length > 15 ? `${title.slice?.(0, 15)}...` : title}
                    </div>
                    <p className="px-1 mt-2 text-gray-400 text-xs">{descsh?.length > 25 ? `${descsh.slice?.(0, 25)}...` : descsh}</p>
                    <div className="flex">
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiOutlineStar className="mt-2 text-gray-300" />
                    </div>
                    <div className="">
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Level</p>
                            <p className="w-1/2">{level}</p>
                        </div>
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Time</p>
                            <p className="w-1/2">{time}</p>
                        </div>
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Ingredients</p>
                            <p className="w-1/2 text-red-400">{ing}</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/5 justify-between lg:justify-start items-center flex lg:flex-col">
                    <div className='px-1 py-1 font-bold text-base'>
                        {cost}
                    </div>
                    <p className="px-1 py-1 text-gray-400 text-xs">{desccost}</p>

                    <div className="bottom-0 right-0 space-x-3 flex lg:justify-end items-center mt-auto">
                        {withDefaultButtons
                            ? <>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><AiOutlineCheck className="text-green-700" /></button>
                            </>
                            : <>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold md:py-2 md:px-4 py-1.5 px-2 text-base rounded"> Dismiss</button>
                                <button className="bg-main hover:bg-main-dark text-white font-bold md:py-2 md:px-4 py-1.5 px-2 text-base rounded"> Select</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}export default Recipes;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/R1kSxvW.jpg) 
 
[Subir](#top)

<a name="item17"></a>
### ChefsCountries
 ---
Contiene sección de chefs populares por países. 

Este componente recibe los siguientes parámetro d etipo string:
imgChefs: Aquí recibe la imagen del chef.
LogoBackg: Imagen de fondo.
imgFlag: Imagen de la bandera.
name: Nombre del chef.
sname: Apellido del chef.

#### Código
```
const ChefsCountries = ({ imgChefs, LogoBackg, imgFlag, name, sname }) => {
    return (
        <div className="mdflex relative h-80 md:w-96 rounded-md cursor-pointer mt-10 mr-5 ml-5 mb-10 bg-cover" style={{ backgroundImage: `url(${LogoBackg})` }}>
            <div className="absolute bg-black opacity-30 rounded-md w-full h-full">
            </div>
            <div className='absolute bg-white left-1/2 top-[30px] h-20  transform -translate-x-1/2 rounded shadow-md'>
                <img className="rounded-lg top-[40px] h-20 w-20 " src={imgChefs} alt="Chefs" />
            </div>
            <div className='absolute bg-white left-1/2 top-[140px] h-20  transform -translate-x-1/2 rounded shadow-md'>
                <img className="h-20 w-40 " src={imgFlag} alt="Flag" />
            </div>
            <div className="absolute font-sans text-white bottom-0 right-0 py-4 px-4 text-2xl">
                <div className="text-center font-sans text-white bottom-0 right-0 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }}>
                    {name}
                </div>
                <div className="font-sans text-white bottom-0 right-0 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }}>
                    {sname}
                </div>
            </div>

        </div>
    );
}

export default ChefsCountries;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/s8M3PYt.jpg) 
 
[Subir](#top)

<a name="item18"></a>
### AuthModal
 ---
Este componente es el encargado de la validación de escuchar el clic al seleccionar el Button de inicio de sesión donde nos permite iniciar en la vista del login o en la vista del registro.

Recibe como parámetro { show, onClose } show, lo que hace es avisar al componente padre en que modal estoy y onClose me permite cerrar el modal donde se encuentre.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
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
}export default AuthModal;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/sv9LjAY.jpg)  
 
[Subir](#top)


<a name="item19"></a>
### ButtonSupr
 ---
Componente con las dos opciones de vista (Grid View, ListView). en las pantallas de resultados de busqueda.

Cómo parámetro no recibe ninguno.

#### Código
```
import { IoList, IoGridOutline } from "react-icons/io5";

const ButtonSupr = () => {
    return (
        <div className="flex justify-end space-x-6">
            <button className="flex items-center space-x-2 text-main hover:text-main-dark">
                <IoGridOutline />
                <span>Grid View</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-main">
                <IoList />
                List View
            </button>
            <span className="hover:text-main">
                <b>117</b>
                Recipes
            </span>
        </div>
    );
}export default ButtonSupr;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/oblMl0x.jpg)

[Subir](#top)


<a name="item20"></a>
### MenuLeft
 ---
Este componente es el encargado de la estructura del sistema de filtrado que aparece en el lateral izquierdo en las pantallas de resultados de búsqueda.  A su vez contiene 6 componentes.   

Este componente recibe como parámetro { filters, onClickCategory, onChangeRating, className, style } son variables para el funcionamiento del menú lateral.
filters: Variable tipo string de flitro de selección.
onClickCategory: Variable de valor lógico de la escucha el click de categoría.
onChangeRating: Variable de valor lógico de la escucha el click del rating.
className: Esté parametro recibe una clases de que tu le quieras pasar.
style: Aquí en esta variable recibe el estilo.

#### Código
```
import ButtonRank from "./ButtonRank";
import CategoriesRecipes from "./CategoriesRecipes";
import RatingComponent from "./RatingComponent";
import SelectCategory from "./SelectCategory";
import SelectRank from "./SelectRank";

const MenuLeft = ({ filters, onClickCategory, onChangeRating, className, style }) => {
    return (
        <div
            style={style}
            className={`hidden md:block ${className || ''}`}
        >

            <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow ">
                <CategoriesRecipes onClickCategory={onClickCategory} values={filters?.categoryIds} />
            </div>
            <div>
                <div className="p-4 mt-6 lg:ml-6 bg-white lg:w-64 m-auto w-56 md:w-40 rounded-lg shadow">
                    <p className="title-medium mt-2 mb-6">Types</p>
                    <SelectCategory title="Breakfast" />
                    <SelectCategory title="Lunch" />
                    <SelectCategory title="Dinner" />
                    <SelectCategory title="Snacks" />
                </div>
            </div>
            <div>
                <div className="p-4 mt-6 lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow">
                    <h1 className="title-medium mt-2 mb-6">Rating</h1>
                    <div className="flex items-center space-between">
                        <RatingComponent
                            onClickStar={onChangeRating}
                            value={filters?.rating}
                        />
                        {
                            filters?.rating &&
                            <button className="bg-main rounded-xl text-white px-4 py-1" onClick={() => onChangeRating('')}>
                                Clear
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}export default MenuLeft;
```
Cómo ejecución se observa lo siguiente.

![](https://i.imgur.com/25UWgjQ.png) 
 
[Subir](#top)



<a name="item21"></a>
### CategoriesRecipes
 ---
Componente encargado del filtrado por categorías del menu lateral, donde se puede observar las categorias cargadas en la base de datos.

Recibe como parámetro { onClickCategory, values } onClickCategory, nos permite almacenar un valor en especifico para saber si seleccione click a la categoria y value es un arreglo de id de categorias que es llenada por el componente superior que lo llama.

Importación de la librería useCallback useCallback en React tiene un uso muy similar al hook useMemo, pues ambos se enfocan en memoizar ciertos elementos en React. La diferencia aquí es que, mientras useMemo devuelve un valor memoizado, el hook useCallback devuelve una función memoizada.

Importación de la librería useRef en React nos devuelve un objeto ref mutable, cuya propiedad current se inicializa en el argumento pasado como initialValue:
const refContainer = useRef (initialValue)

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useCategories from "../hooks/useCategories";

const CategoriesRecipes = ({ onClickCategory, values }) => {

  const [categoriesFilters, setCategoriesFilters] = useState({
    page: 1,
    perPage: 8
  });

  const [currentCategories, setCurrentCategories] = useState([]);

  const [{ categories, numberOfPages, error, loading }, getCategories] = useCategories({ axiosConfig: { params: { ...categoriesFilters } }, options: { useCache: false } });

  const observer = useRef();

  const lastValueRef = useCallback((value) => {
    if (observer?.current) observer?.current?.disconnect?.();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (numberOfPages > categoriesFilters?.page) {
          setCategoriesFilters((oldCategories) => {
            return {
              ...oldCategories,
              page: oldCategories?.page + 1
            }
          });
        }
      }
    })
    if (value) observer?.current?.observe?.(value)
  }, [currentCategories]);

  useEffect(() => {
    if (categories?.length > 0) {
      setCurrentCategories((oldCategories) => {
        return [...oldCategories, ...categories]
      });
    }
  }, [categories]);

  return (
    <div className="mb-4 md:p-6">
      <h4 className="title-medium mt-2 mb-6">Categories</h4>
      {
        values?.length > 0 &&
        <div className="text-end">
          <button className="bg-main rounded-xl text-white px-4 py-1" onClick={() => onClickCategory('')}>
            Clear
          </button>
        </div>
      }
      <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar custom-scrollbar-main">
        {
          currentCategories?.map((category, i) => {
            return (
              <div
                key={i}
                onClick={() => { onClickCategory?.(category) }}
                ref={i + 1 === currentCategories.length ? lastValueRef : null}
                className={clsx(["font-normal cursor-pointer hover:text-main m-2"], {
                  "text-main": values?.includes(category?.id)
                })}
              >
                {category?.name}
              </div>
            )
          })
        }
        {
          loading &&
          <div
            className="font-normal cursor-pointer hover:text-main m-2"
          >
            Loading...
          </div>
        }
      </div>
    </div>
  );
};

export default CategoriesRecipes;
```
Cómo resultado de la ejecución se puede visualizar en la imagen.

![](https://i.imgur.com/nodHnhR.jpg) 
 
[Subir](#top)



<a name="item22"></a>
### SelectCategory
 ---
Componente encargado del filtrado por Types.

Cómo parámetro no recibe nada.

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
Cómo resultado de la ejecución se puede visualizar en la imagen.

![](https://i.imgur.com/7mNZHhE.png)
 
[Subir](#top)



<a name="item23"></a>
### SelectRank
 
Componente encargado del filtrado por Ranking. 
Cómo parámetro recibe el { num }  donde su valor es un número entero. encargado de el promedio del recorrido de array con el número recibido por parámetro.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from "react";
import { FaRegStar } from "react-icons/fa";
import Checkbox from "./Checkbox";

const SelectRank = ({ num }) => {
  return (
    <div className="flex ">
      <div className="justify-end form-check md:px-1 px-2">
        <Checkbox className="mb-4 mt-1.5" />
      </div>
      <div className="flex text-yellow-300 lg:ml-2 md:ml-0 md:text-lg text-xl md:space-x-1 space-x-2">
        {Array.from(Array(num - 1).keys()).map(n => <FaRegStar
          key={n}
          className="lg:w-6 lg:h-6  text-yellow-400"
        />)}
      </div>

    </div >
  );
};

export default SelectRank;
```
Cómo resultado de la ejecución se puede visualizar en la imagen.

![](https://i.imgur.com/jXqV6aG.png)
 
[Subir](#top)



<a name="item24"></a>
### ButtonRank 
 
Componente con botones para aplicar o resetear los filtros.
Cómo parámetro no recibe ninguno.

#### Código
```
const ButtonRank = () => {
    return (
        <div className="lg:flex lg:space-x-8">
            <button className="bg-main mt-14 mb-4 ml-2 text-white hover:bg-main-light hover:text-white font-bold py-2 px-4 rounded-lg">
                Apply
            </button>
            <button className="bg-main mt-14 mb-4 ml-2 text-white hover:bg-main-light hover:text-white font-bold py-2 px-4 rounded-lg">
                Reset
            </button>
        </div>
    );
}

export default ButtonRank;
```
Cómo resultado de la ejecución se puede visualizar en la imagen.

![](https://i.imgur.com/liIgGmE.png)

[Subir](#top)



<a name="item25"></a>
### BannerChef
 
Este componente contiene la estructura de las cards con la información mostrada de cada vendedor desde la vitrina de vendedores y el home.

Cómo parámetro recibe el id del seller "valor de tipo entero".

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

#### Código

```
import { BsStarFill } from "react-icons/bs";
import cheque from "../assets/cheque.png";
import { Link } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import RatingComponent from "./RatingComponent";
import Modal from "./Modal/Modal";
import { useState } from "react";
import useSellersRatings from "../hooks/useSellersRatings";
import { useEffect } from "react";


const BannerChef = ({ seller }) => {

  const [showCustomersReviews, setShowCustomersReviews] = useState(false);

  const [currentReviews, setCurrentReviews] = useState([]);

  const [filters, setFilters] = useState({
    page: 1,
    orderBy: 'createdAt,DESC',
    sellerId: ''
  });

  const [{ sellersRatings, numberOfPages: ratingPages, total: totalReviews, loading: loadingRatings }, getRatings] = useSellersRatings({ params: { ...filters }, options: { manual: true, useCache: false } });

  useEffect(() => {
    if (filters?.sellerId) {
      getRatings({
        params: {
          ...filters
        }
      });
    }
  }, [filters])

  useEffect(() => {
    if (sellersRatings?.length > 0) {
      setCurrentReviews((oldReviews) => {
        return [...oldReviews, ...sellersRatings];
      });
    }
  }, [sellersRatings]);

  useEffect(() => {
    if (seller?.sellerId) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          sellerId: seller?.sellerId
        }
      })
    }
  }, [seller?.sellerId])

  const handleMore = () => {
    if (ratingPages > filters?.page) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          page: oldFilters?.page + 1
        }
      });
    }
  }

  return (
    <div
      className="md:h-96 flex justify-center items-center"
      style={{ backgroundImage: `url(${imgUrl(seller?.banner)})`, backgroundSize: "100% 100%" }}
    >
      <div className="h-full w-full" style={{ background: "rgba(0,0,0, .5)" }}>
        <Link to={`/sellers/${seller?.slug}/blog`}>
          <div className="flex justify-center items-center p-6">
            <img src={imgUrl(seller?.logo)}
              className="md:h-52 md:w-52 w-20 h-20 rounded-full items-center" alt="" />
          </div>
        </Link>
        <div className="text-center text-white font-sans">
          <div className="flex justify-center text-center">
            <p className="md:text-4xl text-center font-bold text-ellipsis">{(seller?.name)}</p>
            <img src={cheque} alt="" className="md:mt-4 md:ml-3 m-1 text-main w-5 h-5" />
          </div>

          <p className="md:text-2xl">{(seller?.shortDescription)}</p>
          <div onClick={() => setShowCustomersReviews(true)} className="flex items-center justify-center cursor-pointer">
            <RatingComponent
              disabled
              value={seller?.rating}
            />
            ({totalReviews} customers reviews)
          </div>
        </div>
      </div>
      <Modal show={showCustomersReviews} onClose={() => setShowCustomersReviews(false)}>
        <div style={{ maxHeight: '70vh', overflowY: 'auto' }} className="custom-scrollbar custom-scrollbar-main">
          <h1 className="text-center text-xl font-bold">
            Customers Reviews ({totalReviews})
          </h1>
          {
            currentReviews?.length > 0 ?
              currentReviews?.map((review, i) => {
                return (
                  <div key={i} className="py-4 border-b border-main">
                    <div className="flex items-center space-x-4">
                      <img src={imgUrl(review?.client?.imgPath)} style={{ height: 50, width: 50 }} className="rounded-full" />
                      <p className="text-gray-500 font-bold">
                        {review?.client?.name}
                        <RatingComponent
                          disabled
                          value={review?.value}
                          size="sm"
                        />
                      </p>
                    </div>
                    <br />
                    <p className="text-gray-500">
                      {review?.comment}
                    </p>
                  </div>
                )
              })
              :
              <div className="text-center text-red-500 text-xl">
                No results found.
              </div>
          }
          {
            loadingRatings ?
              <div className="text-center my-4">
                Loading more reviews...
              </div>
              :
              ratingPages > filters?.page ?
                <div className="text-center">
                  <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4 mb-4">
                    Load More
                  </button>
                </div>
                :
                <div className="text-center my-4">
                  No more reviews.
                </div>
          }
        </div>
      </Modal>
    </div>
  );
};

export default BannerChef;
```
Cómo resultado de la ejecución se puede visualizar en la imagen.

![](https://i.imgur.com/KQQe1Zd.jpg)
 
[Subir](#top)



<a name="item26"></a>
### ButtomButton
 
Componente que contiene la llamada de un subcomponente llamado scroll de navegación.

No posee nigún parámetro.

#### Código
```
import ScrollNavigation from "../componentes/ScrollNavigation";

const ButtomButton = () => {
  return (
    <div>
      <ScrollNavigation />
    </div>
  );
};

export default ButtomButton;
```
Cómo ejecución del código, es la llamada al componente donde contiene el diseño del pies de pagina. A continuación se explica detalladamente el componente scrollNavigation.

### ScrollNavigation
 
Componente con botones de paginación que se repite en varias secciones.
Cómo parámetro no recibe ningun tipo de datos.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const ButtomButton = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full cursor-pointer  hover:bg-main hover:text-white">
          <AiOutlineLeft />
        </div>
        <div className="flex h-12 font-medium rounded-full space-x-2">
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  border border-main hover:bg-main hover:text-white">
            1
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            2
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white  ">
            3
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full ">
            ...
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            8
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            9
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            10
          </div>
          <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-main text-white ">
            1
          </div>
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full cursor-pointer hover:bg-main hover:text-white">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default ButtomButton;
```
Cómo resultado de ejecución se muestra el siguiente resultado.
![](https://i.imgur.com/7UNmpRB.jpg)
 
[Subir](#top)

<a name="item27"></a>
### ProductImagenCarousel

Componentes con la vista de las imagenes en el detalle del producto
Este componente recibe como parámetro.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la líbreria swiper de Por defecto, Swiper React usa la versión principal de Swiper (sin ningún módulo adicional). Si desea utilizar Navegación, Paginación y otros módulos , primero debe instalarlos.

#### Código
```
import clsx from "clsx";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import imgUrl from "../helpers/imgUrl";

const ProductImagesCarousel = ({ images = [], productName }) => {
  const [swiper, setSwiper] = useState(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return <div className="hidden md:block">
    <div className="relative">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        autoHeight={true}
      >
        {
          images?.length > 0 && images?.map(image => <SwiperSlide key={image.id} zoom={{ maxRatio: 2 }}>
            <div className="swiper-zoom-container">
              <img
                src={imgUrl(image.path)}
                alt={productName}
                className="rounded-xl w-full h-96"
              />
            </div>
          </SwiperSlide>)}
      </Swiper>
    </div>
    <div className="flex justify-center mt-6 space-x-3">
      {images?.length > 0 &&
        images?.map((image, i) => <img
          key={image.id}
          src={imgUrl(image.path)}
          alt={productName}
          className={clsx(
            'h-20 w-20 rounded-xl border border-gray-100 rounded shadow hover:shadow-md cursor-pointer',
            activeSlideIndex === i && 'ring-2 ring-blue-300 ring-opacity-75'
          )}
          onClick={() => swiper.slideTo(i)}
        />)}
    </div>
  </div>;
};

export default ProductImagesCarousel;
```
Cómo resultado de la ejecución del componente es el resultado final que se puede observar en la imagen.
![](https://i.imgur.com/6KCthjp.jpg)
 
[Subir](#top)


<a name="item28"></a>
### Matches
 
Botones de interaccion con funcionalidades para hacer match, agregar a favoritos o descartar un producto.

cómo parámetro no recibe ninguno este componente.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from 'react'
import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai'
import {BsFillEmojiLaughingFill} from "react-icons/bs"

const Matches = () => {
  return (
    <div className="container flex justify-center space-x-8">
        <button className="bg-white rounded-full py-2 px-2 shadow-2xl text-xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
        <button className="bg-white rounded-full py-2 px-2 shadow-2xl text-xl recipe-btn"><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
        <button className="bg-white rounded-full py-2 px-2 shadow-2xl text-xl recipe-btn"><AiOutlineCheck className="text-green-700	" /></button>

    </div>
  )
}

export default Matches
```
Cómo resultado de la ejecución del componente es el resultado final que se puede observar en la imagen.

![](https://i.imgur.com/VrVdiMo.jpg)

[Subir](#top)



<a name="item29"></a>
### MenuConfig
 
Componente padre del menú desplegable del panel de usuario con iconos e item.

Recibe como parámetro { show, onClose } show, lo que hace es avisar al componente padre en que modal estoy y onClose me permite cerrar el modal donde se encuentre.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

#### Código
```
import { useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { IoHeart, IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import MenuList from "../util/MenuList";

const MenuConfig = ({ show, onClose }) => {
    const { setAuthInfo } = useAuth();

    const modalRef = useRef();

    const handleLougoutClick = (e) => {
        e.preventDefault();

        setAuthInfo({ isAuthenticated: false, token: null });
    }

    useEffect(() => {
        const handleMousedown = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose?.();
            }
        }

        document.addEventListener('mousedown', handleMousedown);

        return () => document.addEventListener('mousedown', handleMousedown);
    }, [modalRef])

    if (!show) {
        return null;
    }

    return (
        <div>
            <ul ref={modalRef}
                style={{ top: '100%' }}
                className="absolute space-y-2 z-20 right-0 text-white bg-gray-800 w-52 border border-slate-300 rounded-md py-4"
            >
                {
                    MenuList?.map(({ name, Icon, url }, i) => {
                        return (
                            <li className="space-x-2 border-b px-4" key={i}>
                                <Link to={url}>
                                    <div className="flex hover:text-main">
                                        <Icon className="mt-1" />
                                        <p className="text-lg ml-2.5 mb-1.5">{name}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
                <li className="space-x-2 px-4">
                    <a onClick={handleLougoutClick} href="dfdf">
                        <div className="flex hover:text-main">
                            <AiOutlineLogout className="mt-1" />
                            <p className="text-lg ml-2.5">Log Out</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default MenuConfig;
```
Cómo resultado de la ejecución del componente es el resultado final que se puede observar en la imagen.

![](https://i.imgur.com/eKEAr1k.png)

[Subir](#top)



<a name="item30"></a>
### MyAccountLayout
 
Panel de herramientas del usuario vista con iconos.

El comnponente no recibe ningún parámetro.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import clsx from "clsx";
import { useEffect, useState } from "react";
import { BsFillHeartFill, BsFillGearFill, BsFillBookmarkHeartFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp } from "react-icons/io5";
import MenuList from "../util/MenuList";

const MyAccountLayout = () => {
    const { setAuthInfo } = useAuth();

    const [currentPath, setCurrentPath] = useState("");

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);

    const handleLougoutClick = (e) => {
        e.preventDefault();

        setAuthInfo({ isAuthenticated: false, user: null, token: null });
    }

    return (
        <div className="flex">
            <div className="w-2/12 md:w-[5vw] bg-gray-700 hidden md:block text-white text-[2vw]" >
                {
                    MenuList?.map(({ name, Icon, url }, i) => {
                        return (
                            <div key={i}>
                                <Link title={name} to={url}>
                                    <Icon className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                                        'text-main': currentPath === url
                                    })} />
                                </Link>
                            </div>
                        )
                    })
                }
                <div className="text-center">
                    <button title="Log Out" onClick={handleLougoutClick} className="mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl">
                        <AiOutlineLogout ></AiOutlineLogout>
                    </button>
                </div>
            </div>
            <div className="w-full min-w-0">
                <Outlet />
            </div>
        </div >
    );
}

export default MyAccountLayout;
```
Cómo ejecución del código su resultado final es lo que se puede visualizar en la imagén.

![](https://i.imgur.com/ftYgUpz.png)
 
[Subir](#top)


<a name="item31"></a>
### PageLogo
 
Componente con el logo de la app que se adapta al tamaño adecuado.

Cómo parámetro recibe { centered = false } es una variable logica que tepermite mostrar o no el lolo del sistema.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

#### Código
```
import { Link } from 'react-router-dom';
import LogoDrafts from '../assets/drafts.png';

const PageLogo = ({ centered = false }) => {
    return (
        <Link to={"/"}>
            <div className={`flex items-center text-white md:space-x-4 ${centered ? 'justify-center' : ''}`}>
                <img className="inline-block md:h-9 w-9 rounded-lg"
                    src={LogoDrafts} alt="recipes" />
            </div>
        </Link>
    );
}

export default PageLogo;
```
Cómo ejecución del código su resultado final es lo que se puede visualizar en la imagén.

![](https://i.imgur.com/2sY7Kq7.jpg)
 
[Subir](#top)



<a name="item33"></a>
### CertificationChef
 
Componente con informacion profesional del vendedor desde su perfil.

Cómo parámetro recibe el seller que seria de tipo entero el identificador del seller.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código

```
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const CertificationChef = ({ seller }) => {
  return (
    <div className="mt-6 p-2">
      <button className="flex items-center space-x-2 text-black text-lg	 font-semibold">
        <BsPatchCheckFill className="text-main" />
        <span>Professional Certification</span>
      </button>
      <div className=" mt-4">
        <h1>Chef: {seller?.credentialNumber}</h1>
      </div>
    </div>
  );
};
export default CertificationChef;
```
Cómo ejecución del código su resultado final es lo que se puede visualizar en la imagén.

![](https://i.imgur.com/0FU20yz.jpg)
 
[Subir](#top)


<a name="item34"></a>
### Post
 
Entradas del blog del vendedor ubicadas en el lateral izquierdo del perfil del vendedor.

No recibe ningún parámetro.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import { BsPin } from "react-icons/bs";
import React from "react";

const Post = () => {
  return (
    <div className="mt-12">
      <h1 className="text-xl font-semibold">Post De Anya</h1>
      <div className="mt-6">
        <div className=" space-y-3">
          <button className="flex items-center space-x-2 text-black ">
            <BsPin className="text-main" />
            <span>5 Formas para Picar Cebolla.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Tips para mejorar tus jugos.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>5 Formas para Picar Cebolla.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Mantén afilados tus cuchillos.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Utiliza papel de hornear.</span>
          </button>
          <button className="flex items-center space-x-2 text-black">
            <BsPin className="text-main" />
            <span>Siempre utiliza aceite de oliva.</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
```
Cómo ejecución del código su resultado final es lo que se puede visualizar en la imagén.

![](https://i.imgur.com/k4IAEZ8.jpg)
 
[Subir](#top)



<a name="item35"></a>
### DescriptionChef
 
Descripcion escrita por el vendedor en su perfil.

Cómo parámetro recibe el seller que seria de tipo entero el identificador del seller.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const DescriptionChef = ({ seller }) => {
  return (
    <div className="mt-10 p-2">
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <RiBookReadLine className="text-main" />
        <span>Description</span>
      </button>
      <div className="p-1 md:text-justify text-justify ">
        {seller?.description}
      </div>
    </div>
  );
};

export default DescriptionChef;
```
Cómo ejecución del código su resultado final es lo que se puede visualizar en la imagén.

![](https://i.imgur.com/lOrkBhB.jpg)
 
[Subir](#top)


<a name="item36"></a>
### ButtonImage
 
Este componente contiene los botones de opcion de compra de ingredientes en Wallmart, Insta card y Amazon Fresh, los cuales redireccionan hacia estos sitios para realizar la compra con esos supermercados. Asi mismo se encuentra dentro de este el boton de pago del producto (receta, plan o combo) a traves de pay pal. 

Recibe como parámetro { image } una imagen que es la que va en el button.

#### Código
```
const ButtonImage = ({ image }) => {
    return (
        <button
            style={{ backgroundImage: `url(${image})`, backgroundSize: '100% 100%', backgroundPosition: 'center center' }}
            className="mb-4 p-2 mb:ml-2 w-40 h-12 rounded-xl border bg-white">
        </button>
    )
}
export default ButtonImage;
```
Cómo ejecución del código del resultado final es lo que se muestra en la imagen.
![](https://i.imgur.com/kXCgkaW.jpg) 
![](https://i.imgur.com/ZSwrYTC.jpg)
 
[Subir](#top)


<a name="item37"></a>
### Details
 
Componentes encargado de mostrar esta información que se encuentra en la vista de detalle de recetas, combos y planes (Level, categoria, time, igredientes).

Recibe parámetro { level, categories, fitness, time, days, ingredients, number, price, hideprice = false }, la variable hideprice es una variable logica porque permite ocultar una linea en epecifico, las demas variables son de tipo string.

#### Código
```
import React from 'react'
import Chefs from '../assets/chef-hat.png'
const Details = ({ level, categories, fitness, time, days, ingredients, number, price, hideprice = false }) => {
    return (
        <div>
            <div className='md:flex py-2 '>
                <p className="w-1/2">{level}</p>
                <div className='flex mt-1'>
                    <img className="w-6 h-6" src={Chefs} alt="chefs" />
                    <img className="ml-2 w-6 h-6" src={Chefs} alt="chefs" />
                    <img className="ml-2 w-6 h-6" src={Chefs} alt="chefs" />
                    <img className="ml-2 w-6 h-6" src={Chefs} alt="chefs" />
                </div>
            </div>
            <div className='md:flex py-2 '>
                <p className="md:w-1/2">{categories}</p>
                <p className="md:-1/2 mt-1 text-black">{fitness}</p>
                {!hideprice &&
                    <div><p className='text-main ml-4 font-semibold'>{price}</p></div>}
            </div>
            <div className='md:flex py-2 '>
                <p className="md:w-1/2">{time}</p>
                <p className="md:w-1/2 text-main underline">{days}</p>
            </div>
            <div className='md:flex py-2 '>
                <p className="w-1/2">{ingredients}</p>
                <p className="w-1/2 text-black">{number}</p>
            </div>

        </div>
    )
}

export default Details

```
Cómo ejecución del código del resultado final es lo que se muestra en la imagen.

![](https://i.imgur.com/ICEzwHy.jpg)
 
[Subir](#top)


<a name="item38"></a>
### Comment
Este componente esta encargado de mostrar el texto del comentario de respuesta de usuario y cliente.

Recibe como parámetro { imgPath, name, comment, createdAt, answer, answeredAt } imgPath es de tipo string y recibe la imagen de la persona encargada del comentario agregado en la vista correspondiente, name también es de tipo string es donde recibe el nombre del usuario que envio el texto, createAt es de tipo DateTime que es la fecha y hora del comentario colocado acerca del combo, plans o recetas, answer y answeredAT es de tipo string.

#### Código
```
import { useState } from 'react';
import DateFormatter from './DateFormatter';

const Comment = ({ imgPath, name, comment, createdAt, answer, answeredAt }) => {

    const [showResponse, setShowResponse] = useState(false);

    return <>
        <div className="flex items-center space-x-2 font-semibold">
            <img src={imgPath} alt="" className="inline-block w-12 h-12 rounded-full" />
            <span>{name ?? 'Guest'}</span>
        </div>
        <p className="mb-1">{comment} -
            <span className="ml-2 text-xs font-semibold italic">
                <DateFormatter value={createdAt} dateFormat="hh:mm:ss yyyy-MM-dd" />
            </span>
        </p>
        {
            answer &&
            <div className='text-right'>
                <button type='button' className='text-main' onClick={() => setShowResponse(oldShow => !oldShow)}>
                    {showResponse ? 'Hide' : 'Show'} Response
                </button>
            </div>
        }
        {
            answer && showResponse ?
                <div className=''>
                    {answer}
                </div>
                :
                null
        }
    </>
}
export default Comment;
```
Cómo ejecución del código del resultado final es lo que se muestra en la imagen.
![](https://i.imgur.com/XgMEG3K.png)

[Subir](#top)


<a name="item39"></a>
### Tab
 
Componente dinamico encargado del movimiento del cambio de las lista seleccionada.

Recibe como parámetro { children, value, onClick, canContinue = true } children es la variable que almacena el contenido de cada pestaña, value es el estilo de seleccion de la pestaña, onclick es la variable lógica para saber el click y el canContinue es el que me permite volver al estado original con valores lógico.

#### Código
```
import clsx from "clsx";
import { useTabs } from "../contexts/TabsContext";

const Tab = ({ children, value, onClick, canContinue = true }) => {
    const { value: contextValue, setValue } = useTabs();

    return <div
        className={clsx([
            'px-5 py-2 md:font-semibold font-medium md:text-lg text-sm cursor-pointer',
            { 'border-b-2 border-main': value === contextValue }
        ])}
        onClick={() => {
            if (canContinue) {
                setValue(value);
                onClick?.(value);
            }
        }}
    >
        {children}
    </div>;
};

export default Tab;
```
Cómo ejecución del código del resultado final es lo que se muestra en la imagen.

![](https://i.imgur.com/EjGCgq4.jpg)

[Subir](#top)



<a name="item41"></a>
### TabPanel
 
Componente encargado de mostar o ocultar la información de sus hijos dependiendo de la pestaña seleccionada.

Recibe como parámetro { children, className, value } children es la variable que almacena el contenido de cada pestaña, value es el estilo de selección de la pestaña, className es la clases en particular que tiene el cuerpo del contenido interno a mostrar.

#### Código
```
import { useTabs } from "../contexts/TabsContext";

const TabPanel = ({ children, className, value }) => {
    const { value: contextValue } = useTabs();

    if (value !== contextValue) return null;

    return <div className={className}>{children}</div>;
};

export default TabPanel;
```
Cómo ejecución del código del resultado final es lo que se muestra en la imagen.}
![](https://i.imgur.com/EjGCgq4.jpg)

[Subir](#top)


<a name="item42"></a>
### TabsContainer
 
Este componente chequea que sus hijos si es uno, lo muestra si son muchos lo rederiza.

Recibe como parámetro { children, className } children es la variable que almacena el contenido de cada pestaña, className es el diseño que puede recibir el componente.

#### Código
```
const TabsContainer = ({ children, className }) => {
    const finalChildren = Array.isArray(children) ? children : [children];

    return <div className={`${className}`}>{finalChildren}</div>;
}
export default TabsContainer;
```
Cómo ejecución del código del resultado final es lo que se muestra en la imagen.}

![](https://i.imgur.com/XmcMSTW.jpg)
 
[Subir](#top)


<a name="item43"></a>
### TotalShopping
 
Componente encargado de mostrar imagen de un tamaño en particular para la vista del producto

Recibe como parámetro { img } es una cadena de tipo string, esa imagen es la encargada de visualizarce en el componente. 

#### Código
```
const TotalShopping = ({ img }) => {
    return (
        <div className="p-4">
            <div className="bg-white">
                <img className="w-20 h-20 drop-shadow-lg" src={img} alt="Logo" />
            </div>
        </div>
    );
}
export default TotalShopping;

```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/fUptzyn.jpg)

[Subir](#top)


<a name="item44"></a>
### TotalShoppingPrice
 
Componente  encargado de mostrar precio en la vista del detalle del producto unico.

Recibe como parámetro { price } de ese producto, el tipo de dato de este parámetro es decimal.

#### Código
```
const TotalShoppingPrecio = ({ price }) => {
    return (
        <div className="p-4">
            <p className="mt-2 md:text-2xl text-lg font-bold text-gray-400">{price}</p>
        </div>
    );
}

export default TotalShoppingPrecio;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.
![](https://i.imgur.com/W5vbfBG.jpg)
 
[Subir](#top)


<a name="item45"></a>
### InformationChef
 
Es el componente encargado de Mostrar las redes sociales de chef.

Recibe como parámetro el { seller } el vendedor tipo de datos  "objetos" esto es para obtener la información personal del seller.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from 'react'
import { TiContacts } from "react-icons/ti"

const InformationChef = ({ seller }) => {
  return (
    <div className='p-2'>
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <TiContacts className="text-main" />
        <span>Information</span>
      </button>
      <div className="mt-6 space-y-2">
        {
          seller?.phoneNumber &&
          <p>Phone: {seller?.phoneNumber}</p>
        }
        {
          seller?.instagram &&
          <p>Instagram: {seller?.instagram}</p>
        }
        {
          seller?.facebook &&
          <p>Facebook: {seller?.facebook}</p>
        }
        {
          seller?.whatsapp &&
          <p>Whatsapp: {seller?.whatsapp}</p>
        }
      </div>
    </div>
  )
}

export default InformationChef
```
Cómo resultado d ela ejecución del componente se observa que puedo obtener toda la información necesario del vendedor, para el diseño creado en el frontend.

![](https://i.imgur.com/7BfR5Ig.jpg)
 
[Subir](#top)


<a name="item46"></a>
### DescriptionPost
 
Componente encargado de mostra del detalle de la descripcion de post del blog

Recibe como parámetro { title } es el objeto del post del vendedor.

#### Código
```
import React from "react";

const DescriptionPost = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-10">{title}</h1>
      <p className="mt-6 text-justify">
        Lorem ipsum dolor sit amet. Qui accusamus facilis et cumque distinctio
        ut doloribus obcaecati et quasi quia? Eos quis perferendis eum pariatur
        deserunt et enim quam qui harum porro et ipsum consequatur qui quia
        illo. Eos suscipit sint qui dicta dolorum et voluptas explicabo. Ut
        velit animi At corporis molestias id veniam ipsum. Aut magnam sint cum
        repudiandae natus vel reprehenderit repellat eos expedita rerum est
        deserunt earum ut culpa odit. Qui omnis assumenda 33 minus libero hic
        perspiciatis voluptas a iste corrupti. Cum amet molestias et perferendis
        tempore qui ducimus deserunt ut vero ipsa cum nisi voluptates. Rem
        quibusdam neque ut illum omnis et repellendus dolorum ut voluptas
        similique. A molestiae ipsa et autem laboriosam sit alias beatae non
        eius reiciendis. Et dignissimos obcaecati in recusandae nemo sit
        molestiae necessitatibus et dolore itaque rem dolores placeat. Lorem
        ipsum dolor sit amet. Qui accusamus facilis et cumque distinctio ut
        doloribus obcaecati et quasi quia? Eos quis perferendis eum pariatur
        deserunt et enim quam qui harum porro et ipsum consequatur qui quia
        illo. Eos suscipit sint qui dicta dolorum et voluptas explicabo. Ut
        velit animi At corporis molestias id veniam ipsum. Aut magnam sint cum
        repudiandae natus vel reprehenderit repellat eos expedita rerum est
        deserunt earum ut culpa odit. Qui omnis assumenda 33 minus libero hic
        perspiciatis voluptas a iste corrupti. Cum amet molestias et perferendis
        tempore qui ducimus deserunt ut vero ipsa cum nisi voluptates. Rem
        quibusdam neque ut illum omnis et repellendus dolorum ut voluptas
        similique. A molestiae ipsa et autem laboriosam sit alias beatae non
        eius reiciendis. Et dignissimos obcaecati in recusandae nemo sit
        molestiae necessitatibus et dolore itaque rem dolores placeat.t
      </p>
    </div>
  );
};

export default DescriptionPost;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/PNWKOmO.jpg)

[Subir](#top)


<a name="item47"></a>
### CalendarDay
 
Componente encargado de recibir el dia correspondiente del calendar.

Recibe como parámetro { num, onClick, day } num  es de tipo entero , onClick es el click del dia seleccionado y el day es un parámetro que guarda el day seleccionado en el onClick.

#### Código
```
import cancel from "../assets/cancelar.png";
import check from "../assets/cheque.png";

const CalendarDay = ({ num, onClick, day }) => {

    const dayHaveRecipes = (day) => {
        var dayRecipes = day?.mealPeriods.filter((period) => {
            if (period.recipes?.length > 0) {
                return period;
            }
        });


        if (dayRecipes.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div onClick={(e) => { onClick(e, day) }} className='md:h-72 md:w-56 h-16 w-28 text-main flex justify-center items-center border transition duration-300 border-gray-500 transform hover:-translate-y-4 hover:bg-main hover:bg-main hover:text-white cursor-pointer'>
            {
                dayHaveRecipes(day) ?
                    <img style={{ width: "10%" }} src={check} />
                    :
                    <img style={{ width: "10%" }} src={cancel} />
            }
            <p>
            </p>
            <p className='md:font-bold text-sm md:text-xl'>Day</p>
            <p className='md:font-bold text-sm md:text-xl ml-0.5'>{num}</p>
        </div>
    );
}

export default CalendarDay;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/Pk9IoEx.png)
[Subir](#top)


<a name="item48"></a>
### calendar
 
Componente encargado del diseño del calendario 

Recibe Cómo parámetro { week, onDayClick } week es la semana que recibe de tipo objeto, donde recibe un objeto con un array de dias, onDayClick en el encargado de guardar en click del dia seleccionado.

#### Código
```
import CalendarDay from "./CalendarDay";

const Calendar = ({ week, onDayClick }) => {
    return (
        <div className='mt-4 py-8 px-10'>
            <p className='text-main text-sm md:text-4xl font-bold p-2 '>Week {week?.week}</p>
            <div className='grid grid-cols-1 md:flex m-auto'>
                {
                    week?.days?.map((day, i) => <CalendarDay key={i} day={day} onClick={onDayClick} num={day?.day} />)
                }
            </div>
        </div>
    );
}

export default Calendar;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.
![](https://i.imgur.com/pPh6blH.jpg) 
[Subir](#top)


<a name="item49"></a>
### RequireAuth
 
Componente de autenticacion del login de usuario. Envuelve MyAccountLayou.

Recibe como parámetro { children } te permite agregar el contenido o cuerpo  correspondiente a cada página de la aplicación con la estructura ya definida de sus componentes hijos. 

Importación de la líbreria useAuth está diseñado para ser rápido de configurar. Necesitará una cuenta con Auth0 o Netlify Identity y las claves de acceso adecuadas.

#### Código

```
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RequireAuth = ({ children }) => {

    const { user } = useAuth();

    let location = useLocation();

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/?showLogin=true" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
```
Cómo ejecución del componente es todo lo referente a la autenticación de usuario y clientes no posee imagen.
 
[Subir](#top)


<a name="item50"></a>
### ScrollNavegacion
 
Componente encargado de contener el diseño circular. Componente principal ButtonButton(ScrollNavegacion).

No recibe ningun parámetro.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const ButtomButton = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full cursor-pointer  hover:bg-main hover:text-white">
          <AiOutlineLeft />
        </div>
        <div className="flex h-12 font-medium rounded-full space-x-2">
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  border border-main hover:bg-main hover:text-white">
            1
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            2
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white  ">
            3
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full ">
            ...
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            8
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            9
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full border border-main  hover:bg-main hover:text-white ">
            10
          </div>
          <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-main text-white ">
            1
          </div>
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full cursor-pointer hover:bg-main hover:text-white">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default ButtomButton;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/axBDP5H.png)

[Subir](#top)


<a name="item51"></a>
### SearchHome
 
Componente encargado de motor de Busqueda en el home contiene el componente ButtonSearch

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

#### Código
```
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSearch from "./ButtonSearch";

const SearchHome = () => {

    const [category, setCategory] = useState('recipes');

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${category}?name=${search}`);
    }
    return (
        <div className='hidden md:block absolute flex p-8 w-3/6 h-2/3 z-10 rounded-xl' style={{ top: '12%', left: '25%', background: 'rgba(0,0,0, .4)' }}>
            <form onSubmit={handleSubmit}>
                <div className="m-auto w-full">
                    <ButtonSearch category={category} onClickCategory={(category) => { setCategory(category) }} />
                    <div className="relative text-white text-center text-base">
                        <input
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                            className='text-black text-xs h-12 border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 
                            leading-4 border-0 rounded-bl-lg rounded-r-lg w-full top-0 right-0'
                            type="text"
                            placeholder="Enter the item you are looking for or a characteristic (example:Rice, Sushi)..." />
                        <button className="absolute h-full px-6 text-center bg-main top-0 right-0 rounded-r-lg font-semibold">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default SearchHome;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/VUipCHj.jpg)
 
[Subir](#top)


<a name="item52"></a>
### ButtonSearch
 
Componente encargado del selector de busqueda por sus categorias.

Cómo parámetro recibe { category, onClickCategory } category es la categoria escrita en el buscador, onClickCategory es la variable que almacena el click de la categoria "seller, recipes, plans y combos".

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import { useState } from "react";
import ButtonSearchSelector from "./ButtonSearchSelector";

const ButtonSearch = ({ category, onClickCategory }) => {

    return (
        <div className="text-base m-0 rounded-tl-lg h-12 rounded-t-lg flex overflow-x-auto">
            <ButtonSearchSelector
                onClick={() => onClickCategory?.('sellers')}
                name="Sellers"
                isActive={category === 'sellers'}
            />

            <ButtonSearchSelector
                onClick={() => onClickCategory?.('recipes')}
                name="Recipes"
                isActive={category === 'recipes'}
            />
            <ButtonSearchSelector
                onClick={() => onClickCategory?.('plans')}
                name="Plans"
                isActive={category === 'plans'}
            />
            <ButtonSearchSelector
                onClick={() => onClickCategory?.('combos')}
                name="Combos"
                isActive={category === 'combos'}
            />

        </div>
    );
}
export default ButtonSearch;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/x56RUVb.png)

[Subir](#top)


<a name="item53"></a>
### WeightPlan
 
Componente de la vista de cuadro de planes. 

Recibe como parámetro { img, price, logo, title, text, hideCart = false, className } img es la imagen de fondo del weightPlan, price es el precio del plan donde su tipo de datos es decimal, logo es el logo de la marca de combo, title es tipo string del titulo del combo, text es el contenido del plan, hideCart es para ocultar el botón de valoración de plan y className es el tipo de dato donde recibe el parámetro esclusivo.

#### Código
```
import clsx from "clsx";
import ButtonCart from "./ButtonCart";

const WeightPlan = ({ img, price, logo, title, text, hideCart = false, className }) => {
  return (
    <div className={clsx("p-4", className)}>
      <div
        className="relative h-64 w-full flex bg-main rounded-md cursor-pointer bg-cover "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute bg-black opacity-40 rounded-md "></div>
        <div className="absolute flex left-1 top-1 bg-main-dark rounded-lg opacity-70">
          <p className="text-white h-6 w-15 ml-1 ">{price} </p>
        </div>
        <img
          className="absolute right-2 top-1 rounded h-20 w-20"
          src={logo}
          alt="Logo"
        />

        <div
          className="text-white text-center w-full mt-36 text-4xl md:text-4xl"
          style={{ textShadow: "0px 0px 3px #000000" }}
        >
          {title}
          <p className="text-white my-2 text-center text-base m-4">{text}</p>
        </div>
      </div>
      <div className="bottom-0 right-0 space-x-3 flex justify-center mt-auto bg-white">
        {!hideCart && (
          <div className="flex justify-center">
            <ButtonCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightPlan;
```
Cómo resultado de ejecución de código es el cuadro informativo del plan mostrado en el home de la página.

![](https://i.imgur.com/zz5z3jo.jpg)

[Subir](#top)


<a name="item55"></a>
### config
 
Componente de la parte del usuario en la vista de configuración.

 Recibe como parámetro { title, spam } el title es de tipo de dato string y el spam es el scroll de lo seleccionado.
 
#### Código
```
import React from "react";
import CheckboxConfig from "../componentes/CheckboxConfig";
import ButtonChange from "./ButtonChange";

const LanguageConfig = ({ title, spam }) => {
  return (
    <div className="mt-6">
      <div className=" space-y-7">
        <div className="grid grid-cols-2 md:-space-x-32 ml-4">
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            {title}
          </label>
          <div>
            <CheckboxConfig />
          </div>
        </div>
        <div className="grid grid-cols-2   md:-space-x-32 ml-4">
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            {spam}
          </label>
          <div>
            <CheckboxConfig />
          </div>
        </div>
        <div className="flex md:justify-end justify-center ">
          <ButtonChange />
        </div>
      </div>
    </div>
  );
};

export default LanguageConfig;
```
Cómo resultado de ejecución de código es el cuadro informativo del plan mostrado en el home de la página.

![](https://i.imgur.com/EABaJmL.png)

[Subir](#top)


<a name="item56"></a>
### DescriptionChef
 
Componente encargado del chef de la description del menu lateral

 Recibe como parámetro { title, spam } el title es de tipo de dato string y el spam es el scroll de lo seleccionado.

#### Código

```
import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const DescriptionChef = ({ seller }) => {
  return (
    <div className="mt-10 p-2">
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <RiBookReadLine className="text-main" />
        <span>Description</span>
      </button>
      <div className="p-1 md:text-justify text-justify ">
        {seller?.description}
      </div>
    </div>
  );
};

export default DescriptionChef;
```
Cómo resultado de ejecución de código es el cuadro informativo del plan mostrado en el home de la página.

![](https://i.imgur.com/Z317Uop.jpg)
 
[Subir](#top)


<a name="item57"></a>
### DescriptionPost
 
Componente encargado de mostrar la informacion de post de Anya del menu lateral

Recibe cómo parámetro {seller} es un objeto donde tiene toda la información del vendedor.

#### Código
```
import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const DescriptionChef = ({ seller }) => {
  return (
    <div className="mt-10 p-2">
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <RiBookReadLine className="text-main" />
        <span>Description</span>
      </button>
      <div className="p-1 md:text-justify text-justify ">
        {seller?.description}
      </div>
    </div>
  );
};

export default DescriptionChef;
```
Cómo resultado de ejecución de código es el cuadro informativo del plan mostrado en el home de la página.

![](https://i.imgur.com/lbnWbfI.jpg)

[Subir](#top)


<a name="item58"></a>
### FormAccount
 
Componente de la informacion personal de user en la vista de usuario (my personal informayion).

Recibe como parámetro { sourseimg, textname, textphone, textaccount, textbutton } de tipo string es donde se encarga de almacenar los nombre que se van a mostrar en la vista correspondiente en el caso del sourseimg es el nombre que recibe el botón, textname nombre del texto, textphone telefono, textaccount cuenta y el botton de change de guardar datos.

#### Código
```
import React from 'react'
import profile from "../assets/profile.png"
import ButtonChange from "../componentes/ButtonChange";
const FormAccount = ({ sourseimg, textname, textphone, textaccount, textbutton }) => {
  return (
    <form>
      <div className="p-2 md:grid md:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center space-x-4">
          <img src={profile} alt="" className="w-20" />
          <label
            htmlFor="inputfile"
            className="bg-main md:flex justify-center items-center hover:bg-main-light text-white font-semibold text-center px-3 py-2 rounded-lg cursor-pointer"
          >
            {sourseimg}
          </label>
          <input type="file" className="hidden" id="inputfile" />
        </div>
        <div>
          <label
            className="mt-4 block text-gray-600 font-bold md:text-xl"
            htmlFor="text"
          >
            {textname}
          </label>
          <input
            type="text"
            className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
            id="text"
            placeholder='Name'
          />


        </div>
        <div>
          <label
            className="mt-4 block text-gray-600 font-bold md:text-xl"
            htmlFor="number"
          >
            {textphone}
          </label>
          <input
            type="number"
            className="md:mt-6 md:text-xl text-base border rounded-lg  md:w-80 w-full h-10 block"
            id="number"
            placeholder='00000000'
          />
        </div>
        <div>
          <label
            htmlFor="user"
            className="mt-4 block text-gray-600 font-bold md:text-xl">
            {textaccount}
          </label>
          <input
            type="text"
            className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
            id="user"
            placeholder='@xxxxxxxxxx'
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-4">
        <ButtonChange />
      </div>
    </form>
  )
}

export default FormAccount
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.
![](https://i.imgur.com/oBI4w4l.jpg)

[Subir](#top)


<a name="item59"></a>
### InformacionChef
 
Datos de los canales de venta del chef que aparece en el menu lateral.

Recibe como parámetro un objetos { seller } donde trae toda la información requerida del vendedor. 

#### Código
```
import React from 'react'
import { TiContacts } from "react-icons/ti"

const InformationChef = ({ seller }) => {
  return (
    <div className='p-2'>
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <TiContacts className="text-main" />
        <span>Information</span>
      </button>
      <div className="mt-6 space-y-2">
        {
          seller?.phoneNumber &&
          <p>Phone: {seller?.phoneNumber}</p>
        }
        {
          seller?.instagram &&
          <p>Instagram: {seller?.instagram}</p>
        }
        {
          seller?.facebook &&
          <p>Facebook: {seller?.facebook}</p>
        }
        {
          seller?.whatsapp &&
          <p>Whatsapp: {seller?.whatsapp}</p>
        }
      </div>
    </div>
  )
}

export default InformationChef
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

![](https://i.imgur.com/KmzMHy8.jpg)

[Subir](#top)

<a name="item60"></a>
### ingredientRow
 
Este componente es el encargado del diseño del cuadro de la lista de ingredientes.

Recibe como párametros el colsNumber = 2  por defecto tiene dos columna  para el gridColsResolver y children es el contenido a mostrar.

#### Código
```
import clsx from "clsx";
const gridColsResolver = (colsNumber) => {
    if (colsNumber === 3) {

        return 'md:grid-cols-3';
    }

    return 'grid-cols-2';
}

const IngredientRow = ({ colsNumber = 2, children }) => {
    return <div className={clsx('grid border-b-2 last:border-0', gridColsResolver(colsNumber))}>
        {children}
    </div>;
}
export default IngredientRow;
```
Cómo ejecución del componente como resultado final muestra la visualización de la imagen.

<a name="item61"></a>
### ingredientRowDetails

Este Componente es el encargado del detalle que lleva cada vista de la lista de ingredientes.

Recibe como parámetro { imageSource, title, subtitle, subtitle2, price } imageSource  
#### Código
```
const IngredientRowDetails = ({ imageSource, title, subtitle, subtitle2, price }) => {
    return <div className="flex p-2">
        <img src={imageSource} alt={title} className="w-16 h-16" />
        <div className="flex items-center px-3 w-full">
            <div className="text-xs space-y-1">
                <p className="font-semibold">{title}</p>
                {subtitle && <p className="text-gray-700">{subtitle}</p>}
                {subtitle2 && <p className="text-gray-700">{subtitle2}</p>}
            </div>
            {price && <div className="ml-auto text-sm font-semibold">{price}</div>}
        </div>
    </div>;
}

export default IngredientRowDetails;
```
Como resultado de ejecución se muestra los siguiente resultado.
![](https://i.imgur.com/NZWLwnL.jpg)
![]( https://i.imgur.com/menOJPW.png)

[Subir](#top)


<a name="item62"></a>
### LyOverview

Componente encargado del diseño de las letras de la vista overview

Recibe una variable de tipo string.

#### Código
```
const LyOverview = ({ name }) => {
    return (
        <div className="text-main text-9xl font-bold">
            <p className="ml-10 p-1 drop-shadow-lg">{name}</p>
        </div>
    );
}
export default LyOverview;
```
cómo ejecución del código se puede observar el resultado en la imagen publicada.

![](https://i.imgur.com/PwvSgsV.jpg)

[Subir](#top)


<a name="item63"></a>
### MealDetailOverview

Componente del scroll de la vista por día.
Este componente ya no se utiliza pero tenia la finalidad de mostrar un cuadro con imagen y descripcion, donde recibe como parámetro un text y un source. 

#### Código
```
const MealDetailOverview = ({ source, text }) => {
    return (
        <div>
            <img className="m-auto h-48 w-48 rounded-lg" src={source} alt="" />
            <p className="truncate text-center p-2 font-bold text-2xl text-gray-500" title={text} >{text}</p>
        </div>
    );
}

export default MealDetailOverview;
```

<a name="item64"></a>
### MealDetailOverviewImages

Componete encargado de mostrar la imagenes al seleccionar un cuadro de la vista de overview.

Recibe como parámetro un array de imagenes que se muestra en la vista del cuadro por dia en el overview, este componente ya no se ultiliza porq se realizo unas mejoras pero el código esta aquí y se muestra a continuación.

#### Código
```
const MealPlanOverviewImages = ({ images = [] }) => {
    return (
        <div className={`flex flex-col h-64 w-full overflow-y-auto bg-white rounded shadow`}>
            {images.map((image, i) => <div
                key={i}
                className={`p-2 bg-white w-full border-b`}
            >
                <div className="p-1 text-center text-xs text-gray-500">
                    <img
                        className="m-auto w-auto rounded-lg mb-1 h-18 w-18"
                        src={image.source} alt="cargando"
                    />
                    {<p className="truncate" title={image.name}>{image.name}</p>}
                </div>
            </div>)}
        </div>
    );
}

export default MealPlanOverviewImages;
```

[Subir](#top)


<a name="item65"></a>
### PasswordUser

Componente donde permite al usuario agregar contraseña, modificarla y confirmarla
Recibe como parámetro title, text y spam son tipos de datos string.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la líbreria useAxios es un cliente HTTP basado en promesasnode.js para el navegador. Es isomorfo (= puede ejecutarse en el navegador y nodejs con la misma base de código). En el lado del servidor usa el httpmódulo nativo node.js, mientras que en el cliente (navegador) usa XMLHttpRequests.

#### Código

```
import React, { useEffect, useState } from 'react'
import { useFeedBack } from '../contexts/FeedBackContext'
import useAxios from '../hooks/useAxios'
import ButtonChange from './ButtonChange'

const PasswordUser = ({ title, text, spam }) => {

  const { setLoading } = useFeedBack();

  const [data, setData] = useState({
    password: "",
    currentPassword: '',
    passwordConfirm: ''
  });


  const [showResponseMessage, setShowResponseMessage] = useState(false);

  const [{ loading }, updatePassword] = useAxios({ url: `/auth/password`, method: 'PUT' }, { useCache: false, manual: true });

  useEffect(() => {
    if (showResponseMessage) {
      setTimeout(() => {
        setShowResponseMessage(false);
      }, [3000])
    }
  }, [showResponseMessage])

  useEffect(() => {
    setLoading({
      show: loading,
      message: 'Loading'
    })
  }, [loading]);

  const handleChange = (e) => {
    setData((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data?.password !== data?.passwordConfirm) {
      alert('Las contraseñas no coinciden');
    }

    const { passwordConfirm, ...rest } = data;

    updatePassword({ data: { ...rest } }).then(() => {
      setShowResponseMessage(true);

      setData({
        password: "",
        currentPassword: '',
        passwordConfirm: ''
      });
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:flex" style={{ maxWidth: '100%' }}>
        <div className="ml-2 mt-6 md:mt-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {title}
          </label>
          <input
            name='currentPassword'
            onChange={handleChange}
            value={data?.currentPassword}
            type="password"
            className="md:mt-6 md:text-xl text-base border rounded-lg w-full h-10 block"
            placeholder='Password'
          />
        </div>
        <div className="ml-2 mt-4 md:mt-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {text}
          </label>
          <input
            name='password'
            onChange={handleChange}
            value={data?.password}
            type="password"
            className="md:mt-6 md:text-xl text-base border rounded-lg w-full h-10 block"
            placeholder='Password'
          />
        </div>
        <div className="ml-2  mt-4 md:mt-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {spam}
          </label>
          <input
            name='passwordConfirm'
            onChange={handleChange}
            value={data?.passwordConfirm}
            type="password"
            className="md:mt-6 md:text-xl text-base border rounded-lg w-full h-10 block"
            placeholder='Password'
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-center md:justify-end mt-4">
        {
          showResponseMessage &&
          <span className='animate__animated animate__fadeInLeft'>
            The password has been updated
          </span>
        }
        <ButtonChange />
      </div>
    </form>
  )
}

export default PasswordUser
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/R2OqFUW.png)
 
[Subir](#top)

<a name="item65"></a>
### PaypalLogin

Componente que fue creado para mostrar el diseño de PayPal de iniciar sesión de paypal.
Recibe como parámetro { title, help, login, create } title titulo de la vista, help es la contraseña de paypalque recibe en el input, login es el usuario "correo" para ingresar a la vista y eñ create es el filtro del input de ingresar al paypal.

#### Código 
```
import React from "react";
import paypal from "../assets/paypal.png";
const PaypalLogin = ({ title, help, login, create }) => {
  return (
    <div>
      <div className=" container flex justify-center">
        <div>
          <img src={paypal} alt="" className="w-20 ml-10" />
          <p className="font-semibold text-2xl">{title}</p>
        </div>
      </div>

      <div className="container ml-4 ">
        <div className=" justify-center">
          <input
            type="text"
            placeholder="paypaluser@gmail.com"
            className="border justify-center rounded-lg w-auto mt-6 "
          />

          <input
            type="password" id="password"
            placeholder="****************"
            className="border rounded-lg w-auto flex justify-center mt-6 bg-gray-200"
          />

          <p className="text-blue-600 font-bold cursor-pointer">{help}</p>
        </div>
      </div>

      <div className="mt-6 p-2">
        <h3 className="flex items-center justify-center p-4 bg-blue-700 text-white font-semibold rounded-full shadow cursor-pointer">
          {login}
        </h3>
      </div>
      <div className="mt-6 p-2">
        <h3 className="flex items-center justify-center p-4 bg-white border border-blue-700 text-blue-700 font-semibold rounded-full shadow cursor-pointer">
          {create}
        </h3>
      </div>
    </div>
  );
};

export default PaypalLogin;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.

![](https://i.imgur.com/Ohu20I5.png)
 
[Subir](#top)



<a name="item67"></a>
### PaypalUser

Componente que se encarga de colocar la informacion de my paypal en la vista de user.

Recibe como parámetro { textuser, textbutton } textuser es lo que colocas en el patrón de la vista de cofiguraciones de user de paypal y textbutton es el funcionamiento del botón.

#### Código
```
import React from 'react'
import paypal from "../assets/paypal.png"

const PaypalUser = ({ textuser, textbutton }) => {
  return (
    <form>
      <div className="flex mt-4">
        <img src={paypal} alt="" className="w-20" />
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {textuser}
          </label>
          <input
            type="text"
            className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
            id="user"
            placeholder='User'
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-4">
        <button className="bg-main hover:bg-main-light px-4 py-2 text-white font-semibold rounded-lg">
          {textbutton}
        </button>
      </div>
    </form>
  )
}

export default PaypalUser
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.

![](https://i.imgur.com/Ua3GKRL.jpg)

[Subir](#top)


<a name="item68"></a>
### ProductInfo

Componente que se encarga mostrar todo el contenido de la vista de detalle del producto.

#### Código
Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.


#### Código
```
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ShowMoreButton from "./ShowMoreButton";
import favoriteReactions from "../consts/favoriteReactions"
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import imgUrl from "../helpers/imgUrl";
import { useFeedBack } from "../contexts/FeedBackContext";
import RatingComponent from "./RatingComponent";
import { useState } from "react";
import Modal from "./Modal/Modal";
import useRatings from "../hooks/useRatings";
import { Link } from "react-router-dom";

const ProductInfo = ({
  name,
  description,
  ingredients = [],
  maxIngredientsCount = 8,
  onFavoriteClicked,
  onSaveClicked,
  haveDiscount,
  price,
  detailsLabel,
  details,
  maxDetailsCount = 8,
  saved = false,
  isPremiun,
  type,
  sellerId,
  productId,
  productType,
  rating,
  alreadyAcquired
}) => {

  const { setLoading } = useFeedBack();

  const [filters, setFilters] = useState({
    page: 1,
    orderBy: 'createdAt,DESC',
    itemId: productId,
    itemType: productType
  });

  const [showCustomersReviews, setShowCustomersReviews] = useState(false);

  const [currentReviews, setCurrentReviews] = useState([]);

  const [{ data: createOrderData, loading: createOrderLoading }, createOrder] = useAxios({ method: 'POST', url: `/orders` }, { manual: true, useCache: false });

  const [{ paymentMethods, total, numberOfPages, size, error, loading }, getPaymentMethods] = usePaymentMethods();

  const [{ ratings, numberOfPages: ratingPages, total: totalReviews, loading: loadingRatings }, getRatings] = useRatings({ params: { ...filters }, options: { manual: true, useCache: false } });

  useEffect(() => {
    if (filters?.itemId && filters?.itemType) {
      getRatings({
        params: {
          ...filters
        }
      });
    }
  }, [filters])

  useEffect(() => {
    if (productId && productType) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          itemId: productId,
          itemType: productType
        }
      })
    }
  }, [productId, productType])

  useEffect(() => {
    if (ratings?.length > 0) {
      setCurrentReviews((oldReviews) => {
        return [...oldReviews, ...ratings];
      });
    }
  }, [ratings]);

  useEffect(() => {
    setLoading({
      show: createOrderLoading,
      message: 'Loading'
    })
  }, [createOrderLoading])

  useEffect(() => {
    if (createOrderData) {
      if (createOrderData?.url) {
        window.open(createOrderData?.url, "_blank");
      } else {
        console.log(createOrderData);
      }
    }
  }, [createOrderData])

  const handleFavoriteClicked = (reaction) => () => onFavoriteClicked?.({ type, reaction });

  const handleSaveClicked = () => onSaveClicked?.({ type });

  const handleBuy = (paymentMethodCode) => {
    if (!alreadyAcquired) {
      createOrder({
        data: {
          sellerId,
          productId,
          type: productType,
          paymentMethodCode: paymentMethodCode || null
        }
      });
    }
  }

  const handleMore = () => {
    if (ratingPages > filters?.page) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          page: oldFilters?.page + 1
        }
      });
    }
  }

  return (
    <div className="w-full md:w-1/2 md:px-8">
      <div className="md:flex items-center text-3xl md:justify-between">
        <h1 className="font-bold text-2xl md:ml-1 md:block w-full text-center md:text-left">{name}</h1>
        <div className="md:flex space-x-4 md:m-2 md:m-auto mt-4 flex justify-center ">
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.DISLIKE)}
            data-tip="I don't like this!"
          >
            <AiOutlineClose className="text-red-500" />
          </button>
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.LIKE)}
            data-tip="I like this!"
          >
            <AiOutlineCheck className="text-green-700" />
          </button>
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.LOVE_IT)}
            data-tip="Great!"
          >
            <BsFillEmojiLaughingFill className="text-yellow-300" />
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <RatingComponent
          disabled
          value={rating}
        />
        <p className="text-gray-300 text-lg m-2 underline cursor-pointer" onClick={() => { setShowCustomersReviews(true) }} >
          ({totalReviews} customer review)
        </p>
      </div>
      <div className="bg-white rounded-lg p-4">
        <div className="text-lg">
          {description
            ? <>
              <p>{description}</p>
            </>
            : <>
              <h4 className="font-semibold mb-3">{detailsLabel}</h4>
              {details?.slice(0, maxDetailsCount).map((detail, i) => (
                <a key={i} style={{ display: 'block' }} href={detail.uri}>{detail?.name}</a>
              ))}
              {ingredients?.slice(0, maxIngredientsCount).map((ingredient, i) => (
                <div key={i}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
              ))}
              {
                productType === 'plan' || productType === 'combo' ?
                  <ShowMoreButton
                    buttonText="Show more"
                    content={details?.slice(maxDetailsCount).map((detail, i) => (
                      <a key={i} href={detail.uri}>{detail?.name}</a>
                    ))}
                  />
                  :
                  null
              }
              {
                productType === 'recipe' ?
                  <ShowMoreButton
                    buttonText="Show more"
                    content={ingredients?.slice(maxIngredientsCount).map((ingredient, i) => (
                      <div key={i}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
                    ))}
                  />
                  :
                  null
              }
            </>
          }
        </div>
      </div>
      <div>
        <div className="text-main text-3xl font-semibold">
          {
            alreadyAcquired ?
              <div className="text-center mt-8">
                You already have this product.
                <br />
                <br />
                <div className="flex items-center justify-center">
                  <Link to={`/purchases-products`} className="bg-main text-white px-8 py-2 rounded-xl">
                    Go to my Inventory
                  </Link>
                </div>
              </div>
              :
              <div className="mt-8 flex items-center justify-between">

                <p className="text-main">{price}</p>
                {
                  isPremiun ?
                    <div className="w-1/2">
                      <h1 className="text-xl text-gray-500 mb-4">
                        Pay with:
                      </h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 justify-center">
                        {
                          paymentMethods?.map((payment, i) => {
                            return (
                              <button key={i} className="py-2 rounded-xl text-center text-white capitalize" onClick={() => handleBuy(payment?.code)}>
                                <img src={imgUrl(payment?.image)} alt="" style={{ maxWidth: '100%' }} />
                              </button>
                            )
                          })
                        }
                      </div>
                    </div>
                    :
                    <button className="bg-main px-8 py-2 rounded-xl text-white" onClick={() => {
                      if (!createOrderData) {
                        handleBuy(null)
                      } else {
                        window.open(`/orders/${createOrderData?.order?.id}`);
                      }
                    }}>
                      {
                        createOrderLoading ?
                          'Loading'
                          :
                          createOrderData ?
                            'View Details'
                            :
                            'Add free'
                      }
                    </button>
                }

                {
                  haveDiscount &&
                  <p className="text-gray-400 text-sm">$48.56</p>
                }
              </div>
          }
        </div>
      </div>
      <Modal show={showCustomersReviews} onClose={() => setShowCustomersReviews(false)}>
        <div style={{ maxHeight: '70vh', overflowY: 'auto' }} className="custom-scrollbar custom-scrollbar-main">
          <h1 className="text-center text-xl font-bold">
            Customers Reviews ({totalReviews})
          </h1>
          {
            currentReviews?.length > 0 ?
              currentReviews?.map((review, i) => {
                return (
                  <div key={i} className="py-4 border-b border-main">
                    <div className="flex items-center space-x-4">
                      <img src={imgUrl(review?.client?.imgPath)} style={{ height: 50, width: 50 }} className="rounded-full" />
                      <p className="text-gray-500 font-bold">
                        {review?.client?.name}
                        <RatingComponent
                          disabled
                          value={review?.value}
                          size="sm"
                        />
                      </p>
                    </div>
                    <br />
                    <p className="text-gray-500">
                      {review?.comment}
                    </p>
                  </div>
                )
              })
              :
              <div className="text-center text-red-500 text-xl">
                No results found.
              </div>
          }
          {
            loadingRatings ?
              <div className="text-center my-4">
                Loading more reviews...
              </div>
              :
              ratingPages > filters?.page ?
                <div className="text-center">
                  <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4 mb-4">
                    Load More
                  </button>
                </div>
                :
                <div className="text-center my-4">
                  No more reviews.
                </div>
          }
        </div>
      </Modal>
    </div>
  );
};

export default ProductInfo;
```
Su ejecución es la union de otro componentes y como resultado se ve en la imagen.

![](https://i.imgur.com/hrAdSWM.png)

[Subir](#top)


<a name="item69"></a>
### BannerPage

Componente del banner de las diferente vista (revision).

Recibe como parámetro { image, title } image es un archivo tipo imagen, title es el nombre del tipo string que va en el banner.
	
#### Código
```
const BannerPage = ({ image, title }) => {
  return (
    <div
      className="md:h-96 h-70 flex justify-center items-center"
      style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
    >
      <h1
        className="text-white rounded-xl title py-24 lg:px-64 rounded-4xl"
        style={{ background: "rgba(0,0,0, .3)" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default BannerPage;	
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	
![](https://i.imgur.com/aG1xRyc.png)

[Subir](#top)


<a name="item70"></a>
### BoxCalendar

Componente encargado del diseño del cuadro del calendario de la vista del usuario
No recibe ningún parámetro.
	
#### Código
```
import { Link } from "react-router-dom";

const BoxCalendar = () => {
    return (
        <Link to={"/meanplanoverview"}>
            <div className="mt-4 bg-white h-28 w-28  border bordes-2">

            </div>
        </Link>

    );
}

export default BoxCalendar;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	
![](https://i.imgur.com/9gQbIlN.jpg)

[Subir](#top)


<a name="item71"></a>
### BoxName

Componente que recibe el texto del dia de la semana (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday) donde lo recibe por parametro y llama a otro componente para el diseño de estructura del calendario.
Recibe como parámetro { name } es de tipo string.
	
#### Código
```
import BoxCalendar from "../componentes/BoxCalendar";

const BoxName = ({ name }) => {
    return (
        <div className="text-lg font-bold">
            <span className="">
                {name}
            </span>
            <BoxCalendar />
            <BoxCalendar />
            <BoxCalendar />
            <BoxCalendar />
            <BoxCalendar />
        </div>

    );
}

export default BoxName;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/8rCYf2d.png)

[Subir](#top)


<a name="item72"></a>
### ButtonCart

Componente del boton de carrito.
No recibe ningún parámetro.
	
Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'

const ButtonCart = () => {
  return (
    <button
className="bg-main  p-2 mb-2 mt-2 flex items-center rounded-xl text-white font-semibold hover:bg-main-light">
 <BsFillCartPlusFill/> 
     <p className='text-base ml-2 mr-2'>Add to Cart</p>
</button>
  )
}

export default ButtonCart
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	
![](https://i.imgur.com/xYF5GkZ.jpg)

[Subir](#top)


<a name="item73"></a>
### ButtonChange

Componente del boton de change.
Recibe cómo parámetro { onClick, loading, buttonText = 'Change' } de funcionalidades de del botón.
	
#### Código
```
const ButtonChange = ({ onClick, loading, buttonText = 'Change' }) => {
    return (
        <button disabled={loading} type="button" onClick={(e) => onClick?.(e)} className="bg-main hover:bg-main-light px-4 py-2 text-white font-semibold rounded-lg">
            {
                loading ?
                    'loading'
                    :
                    buttonText
            }
        </button>
    );
}
export default ButtonChange;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	
![](https://i.imgur.com/8FCip2e.png)

[Subir](#top)


<a name="item74"></a>
### ButtonItems

Componente que se encarga del diseño del boton de seleccion de (recipes, plans y combos)
Recibe como parámetro { defaultCategory = 'recipes', seller } consite en la funcionalidad del botón de objeto de la información del vendedor y una variable defaultCategory de tipo string =recipes.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonSellers from "./ButtonSellers";

const ButtonItems = ({ defaultCategory = 'recipes', seller }) => {
  const [category, setCategory] = useState(defaultCategory);
  return (
    <div className="text-base m-0 rounded-tl-lg h-12 rounded-t-lg flex">
      <Link to={`/sellers/${seller?.slug}/recipes`}>
        <ButtonSellers
          onClick={() => { setCategory('recipes') }}
          name="Recipes"
          isActive={category === 'recipes'}
        />
      </Link>

      <Link to={`/sellers/${seller?.slug}/plans`}>
        <ButtonSellers
          onClick={() => { setCategory('plans') }}
          name="Plans"
          isActive={category === 'plans'}
        />
      </Link>

      <Link to={`/sellers/${seller?.slug}/combos`}>
        <ButtonSellers
          onClick={() => { setCategory('combos') }}
          name="Combos"
          isActive={category === 'combos'}
        />
      </Link >
    </div >
  );
};

export default ButtonItems;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/O9JlBX9.png)

[Subir](#top)




<a name="item75"></a>
### SelectOrder

Componente del diseño de lista de ordenar por del vendedor.

#### Código
```
import React from "react";
const SelectOrder = () => {
  return (
    <div>
      <select
        id="Rating"
        className="bg-gray-50 border border-gray-300 text-gray-900 title-button rounded-lg focus:ring-main block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
      >
        <option selected>Ordenar Por</option>
        <option value="">A-Z</option>
        <option value="">Rating</option>
        <option value=""> Time Cock</option>
      </select>
    </div>
  );
};

export default SelectOrder;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	      
![](https://i.imgur.com/Q31CQTS.png)

[Subir](#top)


<a name="item76"></a>
### CardChef

Componente del vendedor. Vista sellers.
#### Código
	      
```
import cheque from "../assets/cheque.png";
const BannerChef = ({ foto, name, description, logo, recipes, plans, pack }) => {

  return (
    <div className="flex justify-center items-center rounded-lg relative"
      style={{ background: `url(${foto})`, backgroundSize: "100% 100%" }}>

      <div className='rounded-md absolute bg-black h-full w-full opacity-40' ></div>
      <div className="relative">
        <div className="flex justify-center items-center mt-6">
          <img
            src={logo}
            className="h-20 w-20 rounded-full items-center"
            alt=""
          />
        </div>

        <div className="text-center text-white font-sans">
          <div className="flex justify-center items-center">
            <p className="text-xl font-bold ml-4">{name}</p>
            <div className="mt-4 ml-3" />
            <img src={cheque} alt="" className="w-4 h-4 mt-2 mr-2" />
          </div>
          {
            description ?
              <p className="text-base truncate">{description}</p>
              :
              <p className="text-base mb-8"></p>
          }
          <div className="flex space-x-8 mb-6 mt-2">
            <p className="text-xs">{recipes}</p>
            <p className="text-xs">{plans}</p>
            <p className="text-xs">{pack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerChef;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/s4rgz6r.jpg)

[Subir](#top)


<a name="item78"></a>
### CardOrder

Componente donde aparece foto de nombre del vendedor, order, sellers.
Recibe como parámetro { title, chef } recibe el title del seller tipo string y chef es también de tipo string de la imagen del seller.
	
Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import React from "react";
import womenchef from "../assets/womenchef.jpg";
import { BsPatchCheckFill } from "react-icons/bs";

const CardOrder = ({title,chef}) => {
  return (
    <div className="mb-6">
      <p className="ml-2 mt-2 text-main mb-6">{title}</p>
      <div className="flex">
        <img src={womenchef} alt="" className="w-20 rounded-full shadow" />
        <p className="text-black  mt-6 ml-4">{chef}</p>
        <BsPatchCheckFill className="text-main mt-7 ml-2" />
      </div>
    </div>
  );
};

export default CardOrder;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/IDxf85y.png)

[Subir](#top)


<a name="item79"></a>
### CardPaypal

Componente que se encuentra en la vista de la forma de pago de paypal (logo y modificar).
Recibe como parámetro { title, text } recibe el title del paypal tipo string y text es también de tipo string es el texto del user de paypal.
	      
#### Código
```	     
import React from "react";
import paypal from "../assets/paypal.png";
const CardPaypal = ({ title, text }) => {
  return (
    <div className="bg-white shadow p-3 rounded-lg ">
    <div className="flex">
      <img src={paypal} alt="" className="w-20" />
      <div className="mt-6 flex space-x-16 md:space-x-52 font-semibold">
        <div>
          <p>{title}</p>
        
        </div>
       
        <div>
          <p className="text-main cursor-pointer">{text}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardPaypal;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/HYISllZ.png)

[Subir](#top)


<a name="item80"></a>
### CardProduct

Componente que contiene imagen y titulo del producto en la vista de paypal.

Recibe como parámetro { title, food } recibe el title de recipe de tipo string y food es también de tipo string porque es la imagen del producto.
#### Código
```
import React from 'react'
import lasagna from '../assets/pasticho.png'
const CardProduct = ({title,food}) => {
  return (
    <div>
      <p className='text-main ml-2'>{title}</p>
    <div className='md:flex grid mt-2 mb-20'>
        <img src={lasagna} alt="" className='rounded-lg shadow' />
        <p className='md:mt-12 mt-2 ml-10 md:ml-6 flex'>{food}</p>
    </div>
    </div>
  )
}

export default CardProduct
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/fgykcjx.png)

[Subir](#top)


<a name="item81"></a>
### CardRecipes

Componente de la carta de recetas. 

Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.

#### Código
```
import AppLogo from "../assets/drafts.png";
import { BsBookmark } from "react-icons/bs";
import Matches from "./Matches";
import CestaCompras from "../assets/Img-button/cesta-de-la-compra.png";
import BolsaCompras from "../assets/Img-button/bolsa-de-la-compra.png";
import Reloj from "../assets/clock.png";
import ButtonCart from "./ButtonCart";
import { FaStar } from "react-icons/fa";

const CardRecipes = ({
  texto,
  price,
  foto,
  title,
  sellerLogo,
  sellerName,
  numberOfIngredients,
  preparationTime,
  numberOfItems,
  hideButtons,
  hideCart = false,
  hideClock,
  hideBag,
  rating
}) => {
  return (
    <div className="bg-white w-full mb-6 rounded-xl overflow-hidden">
      <div
        className="h-64 w-74 relative"
        style={{ backgroundImage: `url(${foto})`, backgroundSize: "100% 100%" }}
      >
        <div className="relative h-full w-full bg-black bg-opacity-20 flex ">
          <div className="absolute left-0 top-1 w-full justify-center items-center flex">
            <img
              src={AppLogo}
              className="h-10 w-10 opacity-60 rounded-full"
              alt="AppLogo"
            />
          </div>
          <div className="absolute flex left-2 top-2 bg-main-dark rounded-lg bg-opacity-70 text-sm leading-none">
            <p className="text-white py-1 px-1.5">${price}</p>
          </div>
          <div className="absolute flex z-10 top-3 right-3 justify-end text-white">
            {!hideBag && <div className="flex mr-2">
              <img src={BolsaCompras} className="h-5 w-5 text-white m-auto" alt="BolsaCompras" />
              <p className="text-white h-5 w-15 ml-1">{numberOfItems}</p>
            </div>}
            <div className="flex ">
              <img src={CestaCompras} className="h-5 w-5 m-auto" alt="CestaCompras" />
              <p className="text-white h-5 w-5 ml-1">{numberOfIngredients}</p>
            </div>

            {!hideClock && <div className="flex ">
              <img src={Reloj} className="h-5 w-5 m-auto" alt="CestaCompras" />
              <p className="text-white h-5 w-5 ml-1">{preparationTime}</p>
            </div>}
          </div>

          <h1 className="m-auto text-2xl text-white font-semibold">{title}</h1>
          <div className="absolute w-full p-2 bottom-0 bg-black bg-opacity-30 ">
            <h1 className="text-white font-semibold truncate mb-1" title={texto}>{texto}</h1>

            <div className="flex">
              <div className="flex text-bold">
                <img className="rounded-full h-8 w-8" src={sellerLogo} alt="" />
                <h1 className="p-1 text-white">{sellerName}</h1>
              </div>
              <div className="flex justify-end text-white ml-auto">
                <div className="flex items-center space-x-2">
                  <FaStar color="#FFBA5A" />
                  <p className="text-white">{rating || '0'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {!hideButtons && (
          <div className="p-2">
            <Matches />
          </div>
        )}
        {!hideCart && (
          <div className="flex justify-center">
            <ButtonCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRecipes;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	      
![](https://i.imgur.com/R32WIwM.png)

[Subir](#top)


<a name="item82"></a>
### CardResum

Componente de orden de resumen del total por cancelar en paypal.
Recibe como parámetros	{ title, total, price }   title y total es de tipo string, price su tipo de datos decimal.
	      
Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.
	      
#### Código
```
import React, { useState } from "react";
import paypal from "../assets/paypaltransp.png";
import PaypalModal from "./PaypalModal";

const CardResum = ({ title, total, price }) => {
  const [showPaypalModal, setShowPaypalModal] = useState(false);

  return (
    <div className="bg-white shadow p-3 rounded-lg ">
      <div>
        <p className="mb-8 ml-4 md:text-2xl text-base lg:text-2xl font-bold border-b pb-1 text-gray-600">{title}</p>
      </div>
      <div className="flex justify-between ml-5 mr-5">
        <p>{total}</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center mt-10 mb-8">
        <img
          src={paypal}
          alt=""
          className="w-40 bg-main rounded-lg p-3 cursor-pointer"
          onClick={() => setShowPaypalModal(true)}
        />
      </div>

      <PaypalModal show={showPaypalModal} onClose={() => setShowPaypalModal(false)} />
    </div>
  );
};

export default CardResum;	      
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.	      
![](https://i.imgur.com/3fKcpYB.jpg)

[Subir](#top)



<a name="item83"></a>
### CardWithTitle

Componente que fue realizado para la parte de configuraciones de My servings en la vista de usuario.
Recibe como parámetro { title, children } ambos parametros son de tipos string title es el titulo y el children es el contenido que se va insertar.
	    
#### Código
```	    
import React from "react";
export const CardWithTitle = ({ title, children }) => {
  return (
    <div className="bg-white shadow p-3 rounded-lg w-full">
      <h1 className="text-gray-600 font-bold md:text-2xl border-b pb-1">{title}</h1>
      {children}
    </div>
  );
};
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.	
![](https://i.imgur.com/wv1BuLk.jpg)

[Subir](#top)


<a name="item84"></a>
### Checkbox

Componente del checkbok cuadrado.
	    
#### Código
```
import clsx from "clsx";
const Checkbox = ({ className, props }) => {
    return <input
        type="checkbox"
        className={clsx("rounded border-gray-300 text-main shadow-sm focus:border-teal-300 focus:ring focus:ring-offset-0 focus:ring-teal-200 focus:ring-opacity-50", className)}
        {...props}
    />;
}
export default Checkbox;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
	    
![](https://i.imgur.com/D2ZuNwI.jpg)

[Subir](#top)


<a name="item85"></a>
### CheckboxConfig

Componente del checkbok circular.

#### Código
```
import clsx from "clsx";

const Checkbox = ({ className, props }) => {
    return <input
        type="checkbox"
        className={clsx(" rounded-full border-gray-300 text-main shadow-sm focus:border-teal-300 focus:ring focus:ring-offset-0 focus:ring-teal-200 focus:ring-opacity-50", className)}
        {...props}
    />;
}
export default Checkbox;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.

![](https://i.imgur.com/tBic1Xs.jpg)

[Subir](#top)


<a name="item86"></a>
### WaPay
Componente encargado de mostrar la informacion de la lista de comparador de precio.
	    
#### Código
```	    
import Instacart from "../assets/Img-button/instacart.jpg"
import AmazonFresh from "../assets/Img-button/amazon-fresh.jpg"
import Wallmart from "../assets/Img-button/wallmart.jpeg"
import IngredientRow from "./IngredientRow";

const WaPay = () => {
    return (
        <IngredientRow colsNumber={3} >
            <div className='p-3 text-center border-b'>
                <p className='text-gray-400 font-medium'>InstaCart</p>
                <img className='m-auto h-20 w-50 ' src={Instacart} alt="Instacart" />
                <p className='text-xl font-bold'>$ 102.03</p>
            </div>
            <div className='p-3 text-center border-b'>
                <p className='text-gray-400 font-medium'>Amazon Fresh</p>
                <img className='m-auto h-20 w-40' src={AmazonFresh} alt="AmazonFresh" />
                <p className='text-xl font-bold'>$ 102.03</p>
            </div>
            <div className='p-3 text-center border-b'>
                <p className='text-gray-400 font-medium'>Walmart</p>
                <img className='m-auto h-20 w-50 ' src={Wallmart} alt="Wallmart" />
                <p className='text-xl font-bold'>$ 102.03</p>
            </div>
        </IngredientRow>
    );
}

export default WaPay;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/tvnn47v.png)

[Subir](#top)
		        
	    
<a name="item87"></a>
### CommentsComponent

Este componente consiste en almacenar la estructura de comentario en el sistema.
Recibe como parámetro { type, productId } types es el estilo del comentario y productId es una variable de tipo entero que se encarga de almacenar el identificador del producto.

Importación de la líbreria useAxios es un cliente HTTP basado en promesasnode.js para el navegador. Es isomorfo (= puede ejecutarse en el navegador y nodejs con la misma base de código). En el lado del servidor usa el httpmódulo nativo node.js, mientras que en el cliente (navegador) usa XMLHttpRequests.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import { useEffect, useState } from "react";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import Button from "./Button";
import Comment from "./Comment";
import profile from "../assets/profile.png";
import useComments from "../hooks/useComments";

const CommentsComponent = ({ type, productId }) => {

    const [comment, setComment] = useState('');

    const [currentComments, setCurrentComments] = useState([]);

    const [filters, setFilters] = useState({
        recipeId: '',
        planId: '',
        comboId: '',
        page: 1,
        orderBy: 'createdAt,DESC',
        perPage: 2
    })

    const [{ comments, numberOfPages: pages, loading }, getComments] = useComments({ options: { manual: true, useCache: false } });

    const [{ data: commentData, loading: commentLoading }, addComment] = useAxios({ url: '/comments', method: 'POST' }, { manual: true });

    useEffect(() => {
        if (comments?.length > 0) {
            setCurrentComments((oldComments) => {
                return [...oldComments, ...comments]
            })
        }
    }, [comments]);

    useEffect(() => {
        if (type && productId) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    [`${type}Id`]: productId,
                    page: 1
                }
            });
        }
    }, [type, productId]);

    useEffect(() => {
        if (filters?.comboId || filters?.recipeId || filters?.planId) {
            getComments({
                params: {
                    ...filters
                }
            });
        }
    }, [filters]);

    useEffect(() => {
        if (commentData) {
            setCurrentComments((prevData) => {
                return [commentData, ...prevData];
            });

            setComment('');
        }
    }, [commentData]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (commentLoading) {
            return;
        }

        addComment({
            data: {
                [`${type}Id`]: productId,
                comment
            }
        });
    }

    const handleMore = () => {
        if (pages > filters?.page) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }


    return (
        <>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    rows="4"
                    placeholder="Leave a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="text-right mt-2">
                    <Button type="submit">Send</Button>
                </div>
            </form>

            <ul>
                {currentComments?.map(comment => <li key={comment.id} className="bg-white rounded p-3 mt-2">
                    <Comment
                        comment={comment.comment}
                        name={comment.name}
                        createdAt={comment.createdAt}
                        answer={comment?.answer}
                        answeredAt={comment?.answeredAt}
                        imgPath={imgUrl(comment.imgPath, profile)}
                    />
                </li>)}
                {
                    loading ?
                        <li className="text-center my-4">
                            Loading more comments...
                        </li>
                        :
                        pages > filters?.page ?
                            <li className="text-center">
                                <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                    Load More
                                </button>
                            </li>
                            :
                            <li className="text-center my-4">
                                No more comments.
                            </li>
                }
            </ul>
        </>
    )
}

export default CommentsComponent	    
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/kUgveoG.png)

[Subir](#top)

	    
<a name="item88"></a>
### CreatePlanForm
	    
#### Código
```
import { useEffect } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

import Tab from "./Tab";
import TabPanel from "./TabPanel";
import TabsContainer from "./TabsContainer";

const CreatePlanForm = ({ defaultData }) => {

    const { data, setData } = useCreatePlan();

    useEffect(() => {
        if (defaultData) {
            console.log(defaultData);
            const { name, id, fullPlanDays, images, categories, description, ...rest } = defaultData;
            console.log(defaultData);
            setData((oldData) => {
                return {
                    ...oldData,
                    name: name,
                    id: id,
                    weekDays: fullPlanDays,
                    categoryIds: categories?.map(category => category?.id),
                    description
                }
            });
        }
    }, [defaultData])

    return (
        <TabsProvider>
            {/* Tabs */}
            <TabsContainer className="md:flex flex flex-wrap justify-center md:m-10 m-2 mt-6 text-center">
                <Tab value={0}>1.- Information</Tab>
                <Tab canContinue={data?.name && data?.description} value={1}>2.- Categories</Tab>
                <Tab canContinue={data?.name && data?.description} value={2}>3.- Images</Tab>
                <Tab canContinue={data?.name && data?.description && data?.images?.length > 0 && data?.images[0]} value={3}>4.- Weeks</Tab>
                <Tab canContinue={
                    data?.name &&
                    data?.images?.length > 0 &&
                    data?.images[0] &&
                    data?.weekDays?.length > 13 &&
                    data?.description
                } value={4}>5.- Recipes</Tab>
                <Tab canContinue={
                    data?.name &&
                    data?.images?.length > 0 &&
                    data?.images[0] &&
                    data?.weekDays?.length > 13 &&
                    data?.description
                } value={5}>6.- Confirm</Tab>
            </TabsContainer>

            {/* TAB PANELS */}
            <div className="mt-4 md:p-4">
                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={0}
                >
                    <StepOne />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={1}
                >
                    <StepTwo />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={2}
                >
                    <StepThree defaultImages={defaultData?.images} />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={3}
                >
                    <StepFour />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={4}
                >
                    <StepFive />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={5}
                >
                    <StepSix />
                </TabPanel>
            </div>
        </TabsProvider>
    )
}

export default CreatePlanForm;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)

	    
<a name="item89"></a>
### DateFormatter
	    
#### Código
```
import { format } from "date-fns";

const DateFormatter = ({ value, dateFormat = 'yyyy-MM-dd' }) => format(new Date(value), dateFormat);
export default DateFormatter;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	
	    
<a name="item90"></a>
### DescriptionChef
	      
Este componente es el encargado de manejar la descripción del seller del sistema.
	      
Recibe como parámetro seller es un objetos con toda la información del vendedor.
	      
Importación de la líbreria react-icons que utiliza importaciones de ES6 que le permiten incluir solo los íconos que usa su proyecto.
    
#### Código
```
import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const DescriptionChef = ({ seller }) => {
  return (
    <div className="mt-10 p-2">
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <RiBookReadLine className="text-main" />
        <span>Description</span>
      </button>
      <div className="p-1 md:text-justify text-justify ">
        {seller?.description}
      </div>
    </div>
  );
};

export default DescriptionChef;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	
	    
<a name="item91"></a>
### FeatureRow
	    
#### Código
```
import clsx from "clsx";

const FeatureRow = ({ title, content, className, titleClassName, contentClassName }) => {
    return <div className={clsx('md:flex py-2', className)}>
        <p className={clsx('w-1/2', titleClassName)}>{title}</p>
        <div className={clsx('w-1/2', contentClassName)}>{content}</div>
    </div>
}

export default FeatureRow;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	
	    
<a name="item92"></a>
### ForgotPasswordForm
	      
Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.
	    
#### Código
```
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
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	
	    
<a name="item93"></a>
### GridComponent
	    
#### Código
```
import imgUrl from "../helpers/imgUrl";

const GridComponent = ({ recipe, onHandleRecipe }) => {
    return (
        <li className="text-center my-2">
            <div style={{
                backgroundImage: `url(${imgUrl(recipe?.images?.[0]?.path)})`,
                backgroundSize: 'cover',
                borderRadius: '10px',
                backgroundPosition: 'center center'
            }}
                className="h-24 sm:h-20 md:h-24 sm:w-20 md:w-24 m-auto"
            ></div>
            <p className="py-4 px-2" title={recipe?.name}>
                {
                    recipe?.name?.length > 16 ?
                        `${recipe?.name?.slice(0, 16)}...`
                        :
                        recipe?.name
                }
            </p>
            <button className="py-1 rounded-xl bg-main text-white w-full" onClick={() => onHandleRecipe?.(recipe)}>
                Add
            </button>
        </li>
    )
}
export default GridComponent;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	
	    
<a name="item94"></a>
### ImagenCrudComponent
	    
#### Código
```
import { useEffect, useState } from "react"
import useAxios from "../hooks/useAxios";
import update from 'immutability-helper';
import ImgUploadInput from "./ImgeUploadInput";
import SystemInfo from "../util/SystemInfo";
import { useCreatePlan } from "../contexts/CreatePlanContext";

const ImageCrudComponent = ({ defaultImages, ownerId, title, modelName }) => {

    const { data, setData } = useCreatePlan();

    const [currentImages, setCurrentImages] = useState([]);

    const [{ loading: createLoading }, createImage] = useAxios({ url: `/${modelName}/${ownerId}/images`, method: 'POST' }, { manual: true, useCache: false });

    const [{ loading: deleteLoading }, deleteImage] = useAxios({ method: 'DELETE' }, { manual: true, useCache: false });

    useEffect(() => {
        setCurrentImages(defaultImages);
    }, [defaultImages]);

    const handleAddImage = () => {
        if (createLoading || deleteLoading) return;
        setCurrentImages((oldImages) => {
            return [...oldImages, null]
        });
    }

    const onImageChange = (e, i, image) => {
        if (createLoading || deleteLoading) return;
        const data = new FormData();
        data.append('image', e.target?.files[0], e.target?.files[0].name)
        createImage({ data }).then((res) => {
            const { path, id, ...rest } = res?.data;
            const imageCreated = {
                id,
                path: `${SystemInfo?.api}${path}`
            }
            var newArrayValues = update(currentImages, { [i]: { $set: imageCreated } });
            setCurrentImages(newArrayValues)
        })
    }

    const removeImage = (index, imageId) => {

        if (createLoading || deleteLoading) return;

        if (!imageId) {
            currentImages?.splice(index, 1);
            setCurrentImages([...currentImages])
            return;
        }

        deleteImage({ url: `/${modelName}/${ownerId}/images/${imageId}` })
            .then((resp) => {
                currentImages?.splice(index, 1);
                setCurrentImages([...currentImages]);
            })
    }

    return (
        <div className="w-full mb-4 pb-2" style={{ borderBottom: '1px solid' }}>
            <h3>
                {title}
            </h3>
            <div className="grid w-full md:grid-cols-3 items-center lg:grid-cols-5 grid-cols-2 gap-4">
                {
                    currentImages?.map((image, i) => {
                        return (
                            <div className="my-4 text-center m-auto w-full" key={i}>
                                <ImgUploadInput
                                    disabled={image?.id}
                                    previewImage={image?.path}
                                    description="drag or click"
                                    name="images"
                                    className="h-48"
                                    change={(e) => { onImageChange(e, i, image) }}
                                />
                                <button
                                    disabled={deleteLoading || createLoading}
                                    type="button" onClick={() => { removeImage(i, image?.id) }}
                                    className="bg-red-500 px-8 py-2 text-white rounded-xl mt-1"
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })
                }
                <div className="text-center">
                    <button disabled={createLoading || deleteLoading} onClick={handleAddImage} type="button" className="bg-main px-8 py-2 text-white rounded-xl">
                        Add Image
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageCrudComponent; 
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	
	    
<a name="item95"></a>
### ImgeUploadInput
	    
#### Código
```
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

const ImgUploadInput = (options) => {

    const { multiple, style, accept, icon, button, className, description, change, name, previewImage, deleteButton, disabled } = options;

    const [files, setFiles] = useState([]);

    const [preview, setPreview] = useState(null)

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (previewImage) {
            setPreview(previewImage)
        }
    }, [previewImage])

    useEffect(() => {
        if (files.length > 0 && !disabled) {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
            setPreview(URL.createObjectURL(files[0]));
            change?.({ target: { name: name, files: files, type: "file" } });
        }
    }, [files])

    const handleDelete = (e) => {
        setFiles([]);
        setPreview(null);
        change?.({ target: { name: name, files: null, type: "file" } });
    }

    const { getInputProps, getRootProps } = useDropzone({
        accept: accept ? accept : 'image/*',
        maxFiles: 1,
        multiple: multiple,
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles
            )
        },
        onDragEnter: (event) => {
            setActive(true);
        },
        onDragLeave: (event) => {
            setActive(false);
        },
        onDropAccepted: () => {
            setActive(false);
        }
    });

    return (
        <div style={style} className={`w-full m-auto bg-white rounded relative ${className}`} >
            {deleteButton ?
                <Button type="button" onClick={handleDelete} className="rounded-full px-0 py-0 absolute -top-2 -right-2 z-50">
                    <IoClose></IoClose>
                </Button>
                :
                null
            }
            <div
                {...getRootProps()}
                className={" cursor-pointer h-full"}
            >
                <div className={clsx(["transition duration-300 flex h-full relative"], {
                    "border border-dashed border-main rounded shadow-2xl": active,
                    "border border-dashed border-gray-200 rounded": !active,
                })}>
                    {
                        preview ?
                            <img className="w-full h-full absolute left-0 top-0" src={preview} alt="" />
                            :
                            <div className="text-center m-auto px-6">
                                <div className={clsx({
                                    "text-main": active,
                                    "text-gray-200": !active
                                })}>
                                    {icon}
                                </div>
                                <div className={clsx(["font-bold text-xl"], {
                                    "text-main": active,
                                    "text-gray-200": !active
                                })}>
                                    {description ? description : "Arrastre una imagen o haga click"}
                                </div>
                            </div>
                    }
                </div>
                {
                    button ?
                        <div className="text-center mt-2">
                            <button className="bg-main p-4 rounded text-white">
                                {button.text}
                            </button>
                        </div>
                        :
                        null
                }
                <input type="file" {...getInputProps()} disabled={disabled} />
            </div>
        </div >

    )
}

ImgUploadInput.propTypes = {
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    icon: PropTypes.element,
    className: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    change: PropTypes.func,
    button: PropTypes.object,
    previewImage: PropTypes.string,
    disabled: PropTypes.bool
}

export default ImgUploadInput;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item96"></a>
### ListComponent
	    
#### Código
```
import imgUrl from "../helpers/imgUrl";

const ListComponent = ({ recipe, onHandleRecipe }) => {
    return (
        <li style={{ height: '60px' }} className="bg-gray-200 rounded-xl flex items-center justify-between">
            <img style={{
                height: '60px',
                width: '60px',
                borderRadius: '10px 10px 10px 10px',
                border: '2px solid white'
            }} src={imgUrl(recipe?.images?.[0]?.path)} alt="" />
            <p className="py-4 px-2" title={recipe?.name}>
                {
                    recipe?.name?.length > 25 ?
                        `${recipe?.name?.slice(0, 25)}...`
                        :
                        recipe?.name
                }
            </p>
            <div className="flex items-center py-4 px-2">
                <button onClick={() => onHandleRecipe?.(recipe)} className="text-main">
                    Add
                </button>
            </div>
        </li>
    )
}

export default ListComponent;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item97"></a>
### MobileMenuButton
	    
#### Código
```
import { useState, useRef, useEffect } from "react";
import { IoMenu, IoApps, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { GoPerson } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import { IoHeart, IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp } from "react-icons/io5";
import MenuList from "../util/MenuList";

const MobileMenuButton = () => {

    const { user, setAuthInfo } = useAuth();

    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const modalRef = useRef();

    useEffect(() => {
        const handleMousedown = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowMenuMobile(false);
            }
        }

        document.addEventListener('mousedown', handleMousedown);

        return () => document.addEventListener('mousedown', handleMousedown);
    }, [modalRef]);
    return (
        <div ref={modalRef} className="relative">
            <button className="btn text-white md:hidden" onClick={() => setShowMenuMobile((oldShow) => !oldShow)}>
                <IoMenu className="w-6 h-6 md:text-2xl" />
            </button>
            {
                showMenuMobile &&
                <ul className="md:hidden absolute right-0 bg-black text-white px-2 py-2 z-20 rounded animate__animated animate__fadeIn" style={{ top: '100%' }}>
                    {
                        user ?
                            MenuList?.map(({ name, Icon, url }, i) => {
                                return (
                                    <li className="py-2 border-b" style={{ minWidth: '180px' }} key={i}>
                                        <Link to={url} className="flex items-center space-x-2 hover:text-main">
                                            <Icon className="w-6 h-6" />
                                            <span className="text-lg">{name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                            :
                            <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                <Link to={`?showLogin=true`} className="flex items-center space-x-2 hover:text-main">
                                    <IoLogIn className="w-8 h-8" />
                                    <span className="text-lg">Log In / Registratión</span>
                                </Link>
                            </li>
                    }
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/categories'} className="flex items-center space-x-2 hover:text-main">
                            <IoApps className="w-6 h-6" />
                            <span className="text-lg">Categories</span>
                        </Link>
                    </li>
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/sellers'} className="flex items-center space-x-2 hover:text-main">
                            <GoPerson className="w-6 h-6" />
                            <span className="text-lg">Sellers</span>
                        </Link>
                    </li>
                    {
                        user &&
                        <li className="py-2">
                            <button className="flex items-center space-x-2 " onClick={() => { setAuthInfo({ isAuthenticated: false, user: null, token: null }); }}>
                                <AiOutlineLogout className="w-6 h-6" />
                                <span className="text-lg">Log Out</span>
                            </button>
                        </li>
                    }
                </ul>
            }
        </div >
    )
}

export default MobileMenuButton;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/qkzT2u9.png)

[Subir](#top)
	    
<a name="item98"></a>
### ModalFiltre
Este componente se encarga del diseño de boton de Filter que s epuede observar cuando colocamo el markepl. movil "Boton que contien el menu lateral izquierdo de manera modal donde muestra "Categories, Types y Rating". 
Recibe como parámetro el show y onclose que son valores logicos para saber si esta visible el ventanal de filter en su vista de manera dispositivo movil.

Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

Importación de la libreria useEffect, los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

Importación de la líbreria useState es un React Hook que le permite agregar una variable de estado a su componente.

#### Código
```
import { useRef } from "react";
import ReactDom from "react-dom";
import ButtonRank from "./ButtonRank";
import CategoriesRecipes from "./CategoriesRecipes";
import SelectCategory from "./SelectCategory";
import SelectRank from "./SelectRank";


const ModalFiltre = ({ show, onClose }) => {

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
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-2" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            <div className="m-auto ">
                <div className="bg-white p-6 rounded-lg shadow " style={{ width: "80vw" }}>
                    <CategoriesRecipes />
                    <div className="mb-6">
                        <p className="title-medium ">Types</p>
                        <SelectCategory className="mt-6" title="Breakfast" />
                        <SelectCategory title="Lunch" />
                        <SelectCategory title="Dinner" />
                        <SelectCategory title="Snacks" />

                        <h1 className="title-medium mt-4 mb-6">Rating</h1>
                        <SelectRank num="2" />
                        <SelectRank num="3" />
                        <SelectRank num="4" />
                        <SelectRank num="5" />
                        <SelectRank num="6" />
                        <div className="p-3">
                            <ButtonRank />
                        </div>
                    </div>
                </div>
            </div>
        </div >
        ,
        document.getElementById("portal")
    );

}
export default ModalFiltre;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/emKoPk9.png)

[Subir](#top)
	    
<a name="item99"></a>
### MovilMenuSearch
Este componente es el encargado que motrar un button de lupa ubicada en la ventana superior que al seleccionarla aparece la barra de busqueda por sellers, recipes, plans y combos.

Recibe por parámetro el show y onclose que es para abrir y cerrar la ventada y show es para la parte de vista oculta o no a su tamaño adecuado.
		
Importación de la librería useRef en React nos devuelve un objeto ref mutable, cuya propiedad current se inicializa en el argumento pasado como initialValue:
const refContainer = useRef (initialValue)
		
Importación de la libreria react-router-dom Consulte la guía de inicio para obtener más información sobre cómo comenzar con El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web.

#### Código
```
import { useRef } from "react";
import SearchMovil from "./SearchMovil";
import ReactDom from "react-dom";
import LoginBg from "../assets/img1.jpg";

const MovilMenuSearch = ({ show, onClose }) => {

    const modalRef = useRef();

    if (!show) {
        return null;
    }

    const handleClose = (e, forceClose) => {
        if (forceClose) {
            onClose?.();
            return;
        }


        if (modalRef.current === e.target) {
            onClose?.();
        }
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-2" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            <div className="w-full m-auto animate__animated animate__fadeInUp">
                <SearchMovil onClose={() => onClose?.()} />
            </div>
        </div>
        ,
        document.getElementById("portal")
    );

}
export default MovilMenuSearch;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![](https://i.imgur.com/OwXDqQF.png)

[Subir](#top)
	    
<a name="item100"></a>
### NotificationTypeCheck
	    
#### Código
```

const NotificationTypeCheck = ({ notificationType, values, onChange }) => {

    return (
        <label className="p-4 space-x-4 flex items-center" htmlFor={`notification-type-${notificationType?.code}`}>
            <input
                type="checkbox"
                checked={values?.includes(notificationType?.code)}
                onChange={() => onChange?.(notificationType?.code)}
                id={`notification-type-${notificationType?.code}`}
            />
            <p>
                {
                    notificationType?.name
                }
            </p>
        </label>
    )
}

export default NotificationTypeCheck;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item101"></a>
### OrderItemRow
	    
#### Código
```
import { useEffect } from "react";
import { useState } from "react";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import Modal from "./Modal/Modal";
import RatingComponent from "./RatingComponent";

const OrderItemRow = ({ item, orderStatus }) => {

    const [currentItem, setCurrentItem] = useState(null);

    const [showRatingModal, setShowRatingModal] = useState(false);

    const [ratingData, setRatingData] = useState({
        value: 1,
        comment: ''
    });

    const [showRatingMessage, setShowRatingMessage] = useState(false)

    const [{ data: rating, error: ratingError, loading: ratingLoading }, sendRating] = useAxios({ url: `/ratings`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        if (rating) {
            setCurrentItem((oldItem) => {
                return {
                    ...oldItem,
                    rating: rating
                }
            });
        }

        if (rating || ratingError) setShowRatingMessage(true);
    }, [rating, ratingError]);

    useEffect(() => {
        if (item) {
            setCurrentItem(item);
        }
    }, [item]);

    useEffect(() => {
        if (currentItem?.rating) {
            setRatingData((oldRatingData) => {
                return {
                    ...oldRatingData,
                    comment: currentItem?.rating?.comment,
                    value: currentItem?.rating?.value
                }
            })
        }
    }, [currentItem])

    useEffect(() => {
        if (showRatingMessage) {
            setTimeout(() => {
                setShowRatingMessage(false);
            }, 3000);
        }
    }, [showRatingMessage])

    const handleRating = (rating) => {
        setRatingData((oldRating) => {
            return {
                ...oldRating,
                value: rating
            }
        });
    }

    const handleSubmitRating = () => {
        if (ratingLoading) return;

        sendRating({
            data: {
                type: item?.type,
                "productId": item?.productId,
                "value": ratingData?.value,
                "comment": ratingData?.comment
            }
        });
    }
    return (
        <tr className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img src={imgUrl(item?.image)} style={{ width: 60, height: 60 }} className="rounded-xl" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <h1>
                    <b>
                        <span className="capitalize">
                            {currentItem?.type}
                        </span>:
                        {` ${currentItem?.name}`}
                    </b>
                </h1>

                {
                    orderStatus?.code === 'ors-003' &&
                    <button onClick={() => setShowRatingModal(true)} className="text-main hover:text-gray-500 transform transition duration-500 hover:translate-x-2">
                        {
                            !currentItem?.rating ?
                                'Send Rating'
                                :
                                'Show Rating'
                        }
                    </button>
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Qty {currentItem?.quantity}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                {currentItem?.total ? `$${currentItem?.total}` : 'Free'}
            </td>
            <Modal onClose={() => setShowRatingModal(false)} show={showRatingModal}>
                <h1 className="text-xl text-gray-500 font-bold">
                    {
                        currentItem?.rating ?
                            'Your Rating'
                            :
                            'Add Rating:'
                    }
                </h1>
                <br />
                <RatingComponent
                    onClickStar={handleRating}
                    value={ratingData?.value}
                />

                <textarea
                    name="comment"
                    className="w-full"
                    placeholder="What's your experience?"
                    style={{
                        border: "1px solid #a9a9a9",
                        borderRadius: 5,
                        padding: 10,
                        margin: "20px 0",
                        minHeight: 100,
                    }}
                    onChange={(e) => {
                        setRatingData((oldRatingData) => {
                            return {
                                ...oldRatingData,
                                comment: e.target.value
                            }
                        })
                    }}
                    value={ratingData?.comment}
                >
                </textarea>
                {
                    showRatingMessage &&
                    <div className="text-center">
                        {
                            ratingError?.response?.data?.message || 'Your rating is send.'
                        }
                    </div>
                }
                <div className="text-center space-x-8">
                    <button onClick={() => setShowRatingModal(false)} type="button" className="bg-red-500 text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
                        Cancel
                    </button>
                    <button disabled={ratingLoading} onClick={handleSubmitRating} type="submit" className="bg-main text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
                        {
                            ratingLoading ?
                                'Loading'
                                :
                                'Send Rating'
                        }
                    </button>
                </div>
            </Modal>
        </tr>
    )
}

export default OrderItemRow;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item102"></a>
### pagination
	    
#### Código
```
import { IoChevronForwardSharp, IoChevronBack } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useState } from "react";

const PaginationButton = ({ children, active, onClick }) => {
  return <div
    onClick={onClick}
    className={clsx([
      `inline-flex items-center justify-center cursor-pointer
      w-6 h-6
      font-semibold hover:bg-main hover:text-white
      border border-gray-300
      transition duration-300
      p-5
      rounded-full`,
      {
        'bg-main text-white': active,
        'text-gray-700': !active,
      }
    ])}
  >
    {children}
  </div>;
};

const NavigationButton = ({ icon, color, className, onClick, canNext, hidden }) => {
  return (
    <button hidden={hidden} onClick={onClick} className={`text-${color} ${className}`} disabled={canNext}>
      {icon}
    </button>
  )
};


const Pagination = ({ pages, onChange, activePage, className }) => {

  const [canNext, setCanNext] = useState(true);
  const [canBack, setCanBack] = useState(false);

  const nextPage = (page) => {
    if (page <= pages) {
      onChange(page);
    }
  }
  const backPage = (page) => {
    if (page >= 1) {
      onChange(page);
    }
  }

  useEffect(() => {
    if (activePage < pages) {
      setCanNext(true);
    } else {
      setCanNext(false);
    }

    if (activePage > 1) {
      setCanBack(true);
    } else {
      setCanBack(false);
    }
  }, [activePage, pages])

  if (pages === 1) {
    return null;
  }

  return <ul className={`hidden-scrollbar flex items-center space-x-2 ${className}`} style={{ maxWidth: '100%', overflowX: 'auto', scrollBehavior: 'none' }}>
    <li>
      <p>
        <NavigationButton
          hidden={!canBack}
          disable={!canBack}
          onClick={() => { backPage(activePage - 1) }}
          color="main"
          className="text-xl hover:text-gray-500 transition duraion-500 transform hover:scale-150"
          icon={<IoChevronBack />}
        />
      </p>
    </li>
    {pages
      ? Array.from(Array(pages).keys()).map(n =>
        <li key={n}>
          <PaginationButton active={n + 1 === activePage} onClick={() => { onChange(n + 1) }}>{n + 1}</PaginationButton>
        </li>
      )
      : null
    }
    <li>
      <NavigationButton
        hidden={!canNext}
        disable={!canNext}
        onClick={() => { nextPage(activePage + 1) }}
        color="main"
        className="text-xl hover:text-gray-500 transition duraion-500 transform hover:scale-150"
        icon={<IoChevronForwardSharp />}
      />
    </li>
  </ul>;
};

export default Pagination;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item103"></a>
### RatingComponent
	    
#### Código
```
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const RatingComponent = ({ numberOfStars = 5, value = 1, onClickStar, disabled = false, size = 'md' }) => {

    const [hoverValue, setHoverValue] = useState(undefined);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        setStars(Array(numberOfStars).fill(0));
    }, [numberOfStars])

    const handleClick = (value) => {
        if (!disabled) onClickStar?.(value);
    }

    const handleMouseOver = newHoverValue => {
        if (!disabled) setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        if (!disabled) setHoverValue(undefined)
    }
    return (
        <div style={styles.stars}>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={sizes[size]}
                        onClick={() => {
                            if (!disabled) handleClick(index + 1)
                        }}
                        onMouseOver={() => {
                            if (!disabled) handleMouseOver(index + 1)
                        }}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || value) > index ? colors.orange : colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                    />
                )
            })}
        </div>
    )
}

const sizes = {
    xl: 96,
    lg: 48,
    md: 24,
    sm: 12,
    xs: 6
}

const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
    }
};

export default RatingComponent;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item104"></a>
### RecupeFeatures
	    
#### Código
```
import clsx from "clsx";
import { SiCodechef } from "react-icons/si";
import generateArray from "../helpers/generateArray";
import FeatureRow from "./FeatureRow";

const numberOfDifficultyLevels = 3;

const RecipeFeatures = ({ recipe, className }) => {
    const recipeLevel = recipe?.recipeDifficulty?.value ?? 0;
    
    return <div className={className}>
        <FeatureRow
            title="Level"
            content={<>
                {generateArray(recipeLevel).map(n => <SiCodechef key={n} className='text-gray-700' />)}
                {generateArray(numberOfDifficultyLevels - recipeLevel).map(n => <SiCodechef key={n} className='text-gray-300' />)}
            </>}
            contentClassName="flex space-x-1"
        />

        <FeatureRow
            title="Categories"
            content={recipe?.mealPeriods.map(mp => mp.name).join(' - ')}
            contentClassName="text-black"
        />

        <FeatureRow
            title="Time"
            content={`${recipe?.preparationTime} minutes`}
        />

        <FeatureRow
            title="Ingredients"
            content={recipe?.recipeIngredients.length}
        />
    </div>;
}

export default RecipeFeatures;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item105"></a>
### RenderActionsButtons
	    
#### Código
```	    
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item106"></a>
### RenderCommentable
	    
#### Código
```
import { Link } from "react-router-dom";

const RenderCommentable = ({ value }) => {

    var urlTo = '';

    if (value?.commentableType === 'recipe') {
        urlTo = `/recipes/${value?.commentable?.slug}`;
    }

    if (value?.commentableType === 'plan') {
        urlTo = `/plans/${value?.commentable?.slug}`;
    }

    if (value?.commentableType === 'combo') {
        urlTo = `/combos/${value?.commentable?.slug}`;
    }

    return (
        <div>
            <Link className="text-main hover:text-gray-400" to={urlTo}>
                {value?.commentable?.name}
            </Link>
        </div>
    )
}

export default RenderCommentable;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item107"></a>
### Search Movil
	    
#### Código
```
import ButtonSearch from "./ButtonSearch";
import Logo from "../assets/drafts.png";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

const SearchMovil = ({ onClose }) => {

    const [category, setCategory] = useState('recipes');

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${category}?name=${search}`);

        onClose?.();
    }

    return (
        <div style={{ background: 'rgba(0,0,0, .3)' }} className="p-4 rounded-xl relative">
            <button onClick={() => onClose?.()} type="button" className="rounded-full absolute text-red-400 text-4xl" style={{ top: 0, right: 0 }}>
                <IoCloseCircle />
            </button>
            <div className="m-auto">
                <img src={Logo} className="m-auto rounded-2xl" alt="RicardoApp" />
                <h1 className="text-4xl text-center text-white font-bold">Recipes App</h1>
                <p className="font-light text-sm text-center text-white">Search Recipes, Ingredients, Plans and Combos.</p>
            </div>
            <form className="w-full p-2 m-auto" onSubmit={handleSubmit}>
                <ButtonSearch category={category} onClickCategory={(category) => { setCategory(category) }} />
                <div className="relative text-white text-center text-base">
                    <input
                        className='text-black text-xs h-12 border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 
                            leading-4 border-0 rounded-bl-lg rounded-r-lg w-full top-0 right-0'
                        type="text"
                        placeholder="Enter the item you are looking for or a characteristic..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <button
                        className="absolute h-full px-2 text-center bg-main top-0 right-0 rounded-r-lg font-semibold">
                        <BiSearchAlt
                            className="h-6 w-6 md:ml-10"
                        />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchMovil;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item108"></a>
### ShowMoreButton
	    
#### Código
```
import { useState } from "react";

const ShowMoreButton = ({ buttonText, content }) => {
  const [showDetails, setShowDetails] = useState(false);

  const contentIsEmpty = !content || (Array.isArray(content) && content.length === 0);
  
  if (contentIsEmpty) {
    return null;
  }
  
  return (
    <div>
      <button
        type="button"
        className="block underline text-gray-300 text-base cursor-pointer hover:text-main"
        onClick={(e) => {
          setShowDetails((oldShow) => !oldShow);
        }}
      >
        {buttonText}
      </button>
      {showDetails && <div>{content}</div>}
    </div>
  );
};

export default ShowMoreButton;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item109"></a>
### ShorRecipeRow
	    
#### Código
```
import { useState } from "react";
import { Link } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from "react-icons/io5";

const ShowRecipeRow = ({ recipe }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    console.log(recipe);
    return (
        <div className="my-4">
            <div className="flex items-center justify-between">
                <Link className="flex items-center space-x-4" to={`/recipes/${recipe?.slug}`} title={recipe?.name}>
                    <img className="rounded-full" style={{ height: '40px', width: '40px' }} src={imgUrl(recipe?.images?.[0]?.path)} />
                    <small className="text-center">{recipe?.name}</small>
                </Link>
                <button type="button" onClick={() => setShowIngredients((old) => !old)} className="text-main text-4xl">
                    {
                        !showIngredients ?
                            <IoArrowDownCircleSharp />
                            :
                            <IoArrowUpCircleSharp />
                    }
                </button>
            </div>
            {
                showIngredients &&
                <div className="animate__animated animate__fadeInLeft bg-gray-100 rounded-xl p-4 mt-4">
                    <div className="text-main">
                        Ingredients
                    </div>
                    <table className="ml-12 w-full">
                        <tbody>
                            {
                                recipe?.recipeIngredients?.map((ingredient, i) => {
                                    return (
                                        <tr key={i} className="ml-10">
                                            <td colSpan={2}>
                                                {ingredient?.ingredient?.name}:
                                            </td>
                                            <td>
                                                {ingredient?.value} {ingredient?.measurementUnit?.name}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <ul>
                    </ul>
                </div>
            }
        </div>
    )
}

export default ShowRecipeRow;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item110"></a>
### StepFive
	    
#### Código
```	
import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import TabsContainer from "./TabsContainer";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import Modal from "./Modal/Modal";
import update from 'immutability-helper';
import { IoCloseCircle, IoGridOutline, IoList } from "react-icons/io5";
import imgUrl from "../helpers/imgUrl";
import clsx from "clsx";
import usePurchasedProducts from "../hooks/usePurchasedProducts";
import { useEffect } from "react";
import ModalOverlay from "./Modal/ModalOverlay";
import ModalContainer from "./Modal/ModalContainer";
import ListComponent from "./ListComponent";
import GridComponent from "./GridComponent";
import usePlanRecipes from "../hooks/usePlanRecipes";

const StepFive = () => {

    const { data, setData } = useCreatePlan();

    const [showModal, setShowModal] = useState(false);

    const { value, setValue } = useTabs();

    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const [isEnd, setIsEnd] = useState(false);

    const [currentPeriod, setCurrentPeriod] = useState(null);

    const [currentRecipes, setCurrentRecipes] = useState([]);

    const [viewType, setViewType] = useState('list');

    const [filters, setFilters] = useState({
        name: '',
        page: 1
    });

    const [{ planRecipes: recipes, numberOfPages, loading: recipeLoading, total }, getRecipes] = usePlanRecipes({ axiosConfig: { params: { ...filters } }, options: { useCache: false } });

    useEffect(() => {
        if (recipes?.length > 0) {
            setCurrentRecipes((oldRecipes) => {
                return [...oldRecipes, ...recipes]
            });
        }
    }, [recipes])

    const handleAddRecipe = (recipe) => {
        const newData = update(data, {
            weekDays: {
                [currentDayIndex]: {
                    mealPeriods: {
                        [currentPeriod]: {
                            recipes: {
                                $push: [recipe]
                            }
                        }
                    }
                }
            }
        });

        setData(newData);
    }

    const handleRemoveRecipe = (recipeIndex, periodIndex) => {
        const newData = update(data, {
            weekDays: {
                [currentDayIndex]: {
                    mealPeriods: {
                        [periodIndex]: {
                            recipes: { $splice: [[recipeIndex, 1]] }
                        }
                    }
                }
            }
        });
        setData(newData);
    }

    const handleMore = () => {
        if (numberOfPages > filters?.page) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleSlideChange = (e) => {
        setIsEnd(e?.isEnd);
        setCurrentDayIndex(e?.realIndex);
    }

    const handleChange = (e) => {
        setCurrentRecipes([]);
        setFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    return (
        <div>
            <Swiper
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                pagination={{ clickable: true, }}
                navigation
                modules={[Pagination, Navigation]}
            >
                {
                    data?.weekDays?.map((day, i) => {
                        return (
                            <SwiperSlide className="hover:cursor-grab" key={`swiper-${i}`}>
                                <div className="w-full" style={{ minHeight: '80px' }}>
                                    <h1 className="text-center text-gray-400 text-xl font-bold">
                                        Day {i + 1}
                                    </h1>
                                    <TabsProvider>
                                        <TabsContainer className="justify-center md:flex flex flex-wrap md:m-10 m-2 mt-6 text-center">
                                            {
                                                day?.mealPeriods?.map((period, preiodIndexi) => {
                                                    return (
                                                        <Tab value={preiodIndexi} key={`period-tab-${preiodIndexi}`}>{period?.name} - {period?.recipes?.length}</Tab>
                                                    )
                                                })
                                            }
                                        </TabsContainer>
                                        {
                                            day?.mealPeriods?.map((period, periodIndex) => {
                                                return (
                                                    <TabPanel
                                                        key={`period-tabPanel-${periodIndex}`}
                                                        className="animate__animated animate__fadeInUp mb-8 px-8"
                                                        value={periodIndex}
                                                    >
                                                        {
                                                            period?.recipes?.length > 0 ?
                                                                <div className="grid w-full md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-4 mb-16">
                                                                    {
                                                                        period?.recipes?.map((recipe, recipeIndex) => {
                                                                            return (
                                                                                <div key={`period-recipe-${recipeIndex}`} className="text-center relative">
                                                                                    <button onClick={() => {
                                                                                        handleRemoveRecipe(recipeIndex, periodIndex);
                                                                                    }} type="button" className="bg-white rounded-full absolute text-red-400 text-4xl" style={{ top: -15, right: -15 }}>
                                                                                        <IoCloseCircle />
                                                                                    </button>
                                                                                    <div
                                                                                        className="rounded-xl"
                                                                                        style={{
                                                                                            height: '100px',
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundImage: `url(${imgUrl(recipe?.images?.[0]?.path || recipe?.recipeImages?.[0]?.path)})`
                                                                                        }}
                                                                                    >
                                                                                    </div>
                                                                                    {recipe?.name}
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                :
                                                                <div className="text-center text-2xl font-semibold text-red-500 mb-16">
                                                                    No recipes yet.
                                                                </div>
                                                        }
                                                        <div className="text-center mb-16">
                                                            <button
                                                                onClick={() => {
                                                                    setShowModal((old) => !old);
                                                                    setCurrentPeriod(periodIndex);
                                                                }}
                                                                type="button"
                                                                className="px-8 py-2 bg-main rounded-xl text-white"
                                                            >
                                                                Add Recipe
                                                            </button>
                                                        </div>
                                                    </TabPanel>
                                                )
                                            })
                                        }
                                    </TabsProvider>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className="mt-8 text-center space-x-4">
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                    Back
                </button>
                <button
                    className={clsx(["transition duration-300 rounded-xl px-8 py-2"], {
                        "bg-main text-white": isEnd,
                        "text-main": !isEnd
                    })}
                    disabled={!isEnd}
                    onClick={(e) => setValue(value + 1)}
                >
                    Confirm
                </button>
            </div>

            <ModalOverlay show={showModal} onClose={() => setShowModal(false)}>
                <ModalContainer onClose={() => setShowModal(false)} className="custom-scrollbar custom-scrollbar-main w-full md:w-8/12">
                    <h1 className="text-center text-gray-400 font-semibold text-xl">
                        Recipes
                    </h1>
                    <br />
                    <div className="flex items-center justify-center md:justify-between mb-4">
                        <div className="hidden md:block">
                            Filters:
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:block">
                                Results: {total}
                            </div>
                            <div>
                                <input type="text"
                                    style={{ width: '100%' }}
                                    placeholder="Search..."
                                    onChange={handleChange}
                                    value={filters?.name}
                                    name="name"
                                    className="block m-auto appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                />
                            </div>
                            <div className="flex items-center space-x-4 text-2xl">
                                <IoGridOutline onClick={() => setViewType('grid')} className={clsx("cursor-pointer", {
                                    "text-main": viewType === 'grid'
                                })} />
                                <IoList onClick={() => setViewType('list')} className={clsx("cursor-pointer", {
                                    "text-main": viewType === 'list'
                                })} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-4 md:hidden">
                        Results: {total}
                    </div>
                    {
                        currentRecipes?.length === 0 && !recipeLoading ?
                            <div className="text-center text-2xl font-semibold text-red-500">
                                No recipes found
                            </div>
                            :
                            <ul className={clsx({
                                "grid grid-cols-1 md:grid-cols-2 gap-4": viewType === 'list',
                                "grid grid-cols-2 sm:grid-cols-3 items-end justify-center lg:grid-cols-4 gap-4": viewType === 'grid'
                            })}>
                                {
                                    currentRecipes?.map((recipe, i) => {
                                        if (viewType === 'grid') return <GridComponent
                                            recipe={recipe}
                                            key={i}
                                            onHandleRecipe={handleAddRecipe}
                                        />
                                        if (viewType === 'list') return <ListComponent
                                            recipe={recipe}
                                            key={i}
                                            onHandleRecipe={handleAddRecipe}
                                        />
                                    })
                                }
                            </ul>
                    }
                    {

                        recipeLoading ?
                            <div className="text-center text-xl">
                                Loading Recipes...
                            </div>
                            :
                            numberOfPages > filters?.page ?
                                <div className="text-center">
                                    <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                        Load More
                                    </button>
                                </div>
                                :
                                <div className="text-center my-4">
                                    No more recipes.
                                </div>
                    }
                </ModalContainer>
            </ModalOverlay>
        </div>
    )
}

export default StepFive;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item111"></a>
### StepOne
	    
#### Código
```
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";

const StepOne = () => {

    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const handleChange = (e) => {
        setData((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <label>Name</label>
            <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                type="text"
                name="name"
                value={data?.name}
                onChange={handleChange}
                placeholder="Plan name..."
                className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
            />
            <br />
            <br />
            <label>Description</label>
            <textarea style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                type="text"
                name="description"
                value={data?.description}
                rows={8}
                onChange={handleChange}
                placeholder="Plan description..."
                className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
            />
            <div className="text-right">
                <button disabled={!data?.name && !data?.description} onClick={(e) => setValue(1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepOne;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item112"></a>
### StepSix
	    
#### Código
```
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import useAxios from "../hooks/useAxios";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import clsx from "clsx";

const StepSix = () => {

    const { value, setValue } = useTabs();

    const { data, setData } = useCreatePlan();

    const [{ data: createPlanData, loading: createPlanLoading }, createPlan] = useAxios({ url: `plans`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        if (createPlanData) {
            console.log(createPlanData);
        }
    }, [createPlanData])

    const handleCreate = () => {
        const planDays = [];

        data?.weekDays?.forEach((day, i) => {
            day?.mealPeriods?.forEach((period, periodIndex) => {
                period?.recipes?.forEach((recipe, recipeIndex) => {
                    planDays.push({
                        day: i + 1,
                        mealPeriodId: period?.id,
                        recipeId: recipe?.id
                    });
                });
            });
        });

        var dataToSend = {
            name: data?.name,
            description: data?.description,
            planDays: planDays,
            categoryIds: data?.categoryIds,
            numberOfDays: data?.weekDays?.length
        };

        if (!data?.id) {
            dataToSend = new FormData();

            dataToSend.append('name', data?.name);

            dataToSend.append('description', data?.description);

            data?.categoryIds?.forEach((categoryId, i) => {
                dataToSend.append(`categoryIds[${i}]`, categoryId);
            });

            dataToSend.append('numberOfDays', data?.weekDays?.length);
            planDays?.forEach((planDay, i) => {
                dataToSend?.append(`planDays[${i}][day]`, planDay?.day);
                dataToSend?.append(`planDays[${i}][mealPeriodId]`, planDay?.mealPeriodId);
                dataToSend?.append(`planDays[${i}][recipeId]`, planDay?.recipeId);
            });

            data?.images?.forEach((image, i) => {
                if (image) {
                    dataToSend?.append(`images`, image, image?.name);
                }
            });
        }

        createPlan({
            data: dataToSend,
            url: data?.id ? `plans/${data?.id}` : `plans`,
            method: data?.id ? 'PUT' : 'POST'
        });

    }

    return (
        <div>
            {
                !createPlanData &&
                <h1 className="text-center text-xl font-semibold">
                    All is ok?
                </h1>
            }
            <p className={clsx(["text-gray-400 text-center"], {
                "mt-8": !createPlanData
            })}>
                {
                    !createPlanData ?
                        "Please make sure all the data is correct."
                        :
                        <IoCheckmarkCircleSharp className="m-auto text-main animate__animated animate__fadeInUp" style={{ fontSize: '80px' }} />
                }
            </p>

            <div className="mt-8 text-center space-x-4">
                {
                    !createPlanData ?
                        createPlanLoading ?
                            <button disabled type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                                Loading...
                            </button>
                            :
                            <>
                                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                                    I want to check
                                </button>
                                <button onClick={handleCreate} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                                    Confirm
                                </button>
                            </>
                        :
                        <a href="/my-plans" className="bg-main animate__animated animate__fadeInUp px-8 py-2 rounded-xl text-white">
                            The plan has been {data?.id ? "updated" : "created"}.
                        </a>
                }
            </div>
        </div>
    )
}

export default StepSix;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item113"></a>
### StepThree
	    
#### Código
```
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import update from 'immutability-helper';
import ImgUploadInput from "./ImgeUploadInput";
import { useEffect } from "react";
import imgUrl from "../helpers/imgUrl";
import ImageCrudComponent from "./ImageCrudComponent";
import { useState } from "react";

const StepThree = ({ defaultImages }) => {

    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (defaultImages?.length > 0) {
            setIsUpdating(true);
        }
    }, [defaultImages])

    const handleAddImage = () => {
        setData((oldData) => {
            return {
                ...oldData,
                images: [...oldData?.images, null]
            }
        });
    }

    const handleArrayChange = (e, index, arrayName) => {
        var newArrayValues = [];
        if (e.target.name === 'images') {
            newArrayValues = update(data?.[arrayName], { [index]: { $set: e.target.files[0] } });
        } else {
            newArrayValues = update(data?.[arrayName], { [index]: { [e.target.name]: { $set: e.target.type === 'file' ? e.target.files[0] : e.target.value } } });
        }
        setData((oldData) => {
            return {
                ...oldData,
                [arrayName]: newArrayValues
            }
        });
    }

    const removeFromArray = (index, arrayName) => {

        data?.[arrayName]?.splice(index, 1);

        setData((oldData) => {
            return {
                ...oldData,
                [arrayName]: data?.[arrayName]
            }
        });
    }

    return (
        <div>
            <h1 className="text-center text-xl font-semibold">
                Images
            </h1>
            {
                isUpdating ?
                    <>
                        <ImageCrudComponent
                            title={`📸 Images`}
                            modelName={"plans"}
                            defaultImages={defaultImages?.map((image) => {
                                return {
                                    id: image?.id,
                                    path: imgUrl(image?.path)
                                }
                            })}
                            ownerId={data?.id}
                        />
                        <br /><br />
                        <div className="text-center space-x-8">
                            <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Back
                            </button>
                            <button onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Next
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <br />
                        <div className="grid w-full md:grid-cols-3 items-center lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-10">
                            {
                                data?.images?.map((image, i) => {
                                    return (
                                        <div key={i} className="text-center space-y-4">
                                            {
                                                image ?
                                                    <ImgUploadInput
                                                        previewImage={URL.createObjectURL(image)}
                                                        className="h-44 w-44"
                                                        description="drag or click"
                                                        name="images"
                                                        change={(e) => { handleArrayChange(e, i, 'images') }}
                                                    />
                                                    :
                                                    <ImgUploadInput
                                                        previewImage={image?.path && imgUrl(image?.path)}
                                                        className="h-44 w-44"
                                                        description="drag or click"
                                                        name="images"
                                                        change={(e) => { handleArrayChange(e, i, 'images') }}
                                                    />
                                            }
                                            <button type="button" onClick={() => { removeFromArray(i, 'images') }}
                                                className="bg-red-500 rounded px-8 py-2 text-white"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )
                                })
                            }

                            <div className="text-center">
                                <button onClick={handleAddImage} className="bg-main px-8 py-2 rounded text-white">
                                    Add Image
                                </button>
                            </div>
                        </div>
                        <br /><br />
                        {
                            data?.images?.length < 1 || !data?.images?.[0] ?
                                <div className="text-center text-red-500 my-8">
                                    At least one image is needed
                                </div>
                                :
                                null
                        }
                        <div className="text-center space-x-8">
                            <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Back
                            </button>
                            <button disabled={data?.images?.length < 1 || !data?.images?.[0]} onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Next
                            </button>
                        </div>
                    </>
            }
        </div>
    )
}

export default StepThree;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
	    
<a name="item114"></a>
### StepTwo
	    
#### Código
```
import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import useCategories from "../hooks/useCategories";

const StepTwo = () => {
    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const [categoriesFilters, setCategoriesFilters] = useState({
        page: 1,
        name: ''
    });

    const [currentCategories, setCurrentCategories] = useState([]);

    const [{ categories, numberOfPages, loading: categoriesLoading }, getCategories] = useCategories({ axiosConfig: { params: { ...categoriesFilters } } });

    useEffect(() => {
        if (categories?.length > 0) {
            setCurrentCategories((oldCategories) => {
                return [...oldCategories, ...categories];
            });
        }
    }, [categories])

    const handleMore = () => {
        if (numberOfPages > categoriesFilters?.page) {
            setCategoriesFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleCategory = (e) => {
        const value = data?.[e.target.name]?.includes(e.target.value);
        if (value) {
            const newValues = data?.[e.target.name]?.filter(n => n !== e.target.value);
            setData((oldData) => {
                return {
                    ...oldData,
                    [e.target.name]: newValues
                }
            });
        } else {
            setData((oldData) => {
                return {
                    ...oldData,
                    [e.target.name]: [...data?.[e.target.name], e.target.value]
                }
            });
        }
        return;
    }

    const handleChange = (e) => {

        setCurrentCategories([]);

        setCategoriesFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    return (
        <div>
            <label className="text-xl">
                Select the plan´s categories:
            </label>
            <br />
            <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Category name..."
                className="w-full mt-4 rounded-xl focus:outline-none focus:ring-main"
                value={categoriesFilters?.name}
            />
            <div className="my-4 bg-gray-200 p-4 rounded-xl custom-scrollbar custom-scrollbar-main" style={{ height: '300px', overflowY: 'auto' }}>
                {
                    currentCategories?.length > 0 ?
                        currentCategories?.map((category, i) => {
                            return (
                                <div onClick={(e) => handleCategory({ target: { name: 'categoryIds', value: category?.id } })} className={clsx(["w-full my-4 p-2 rounded-xl flex items-center cursor-pointer"], {
                                    'bg-main text-white': data?.categoryIds?.includes(category?.id)
                                })} key={i}>
                                    {category?.name}
                                </div>
                            )
                        })
                        :

                        <div className="text-red-500 text-center">
                            not found results.
                        </div>
                }
                <div>

                </div>
                {
                    categoriesLoading ?
                        <div className="text-center my-4">
                            Loading more categories...
                        </div>
                        :
                        numberOfPages > categoriesFilters?.page ?
                            <div className="text-center">
                                <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                    Load More
                                </button>
                            </div>
                            :
                            <div className="text-center my-4">
                                No more categories.
                            </div>
                }

            </div>
            <div className="text-right space-x-4">
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Back
                </button>
                <button onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepTwo;
```
Cómo ejecución del código el resultado es lo que se observa en la imagen.
![]()

[Subir](#top)
