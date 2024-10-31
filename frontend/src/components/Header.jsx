import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { images } from '../constants';
import { logout } from "../store/actions/user";

const navItemsInfo = [
    { name: 'Inicio', type: 'link', href: '/' },
    { name: 'Nosotros', type: 'link', href: '/about' },
    { name: 'Explora', type: 'link', href: '/explore' },
    { name: 'Blog', type: 'link', href: '/blog' },
    { name: 'Contacto', type: 'link', href: '/contacto' },
];

const NavItem = ({ item }) => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdownHandler = () => {
        setDropdown((curState) => !curState);
    };

    return (
        <li className="relative group">
            {item.type === 'link' ? (
                <Link to={item.href} className="hover:bg-[#fa5564] hover:text-white px-3 py-2 rounded flex items-center">
                    {item.name}
                </Link>
            ) : (
                <div className="flex items-center relative">
                    <button
                        className="px-3 py-2 flex gap-x-1 items-center hover:bg-[#fa5564] hover:text-white rounded"
                        onClick={toggleDropdownHandler}
                    >
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown />
                    </button>
                    <ul
                        className={`${dropdown ? 'block' : 'hidden'
                            } absolute left-0 top-full mt-2 bg-[#0A0330] text-white rounded shadow-lg z-10`}
                    >
                        {item.items.map((page, index) => (
                            <li key={index}>
                                <Link to={page.href} className="block px-4 py-2 hover:bg-[#fa5564] hover:text-white">
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [navIsVisible, setNavIsVisible] = useState(false);
    const userState = useSelector((state) => state.user);
    const [profileDrowpdown, setProfileDrowpdown] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <section className="w-full">
            <header className="w-full px-5 py-8 flex flex-col md:flex-row justify-between items-center bg-[#0A0330] text-white">
                <div className="flex items-center gap-x-3 mb-4 md:mb-0 md:w-1/4">
                    <img src={images.Logo} alt="Logo" className="h-20" />
                    <h1 className="text-xl font-bold">Navippon</h1>
                    <div className="lg:hidden z-50 ml-4">
                        {navIsVisible ? (
                            <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} />
                        ) : (
                            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
                        )}
                    </div>
                </div>
                <div
                    className={`${navIsVisible ? 'block' : 'hidden'
                        } md:flex flex-col md:flex-row gap-x-5 mt-8 md:mt-0 md:w-3/4 `}
                >
                    <ul className="flex flex-col md:flex-row gap-x-5 items-center justify-center w-full">
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    {userState.userInfo ? (
                        <div className="text-white bg-[#0A0330] items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold z-50">
                            <div className="relative group">
                                <div className="flex flex-col items-center ">
                                <button
    className="flex items-center justify-center w-20 h-20 bg-[#fa5564] rounded-full text-white font-semibold hover:bg-white hover:text-[#fa5564] transition-all duration-300"
    onClick={() => setProfileDrowpdown(!profileDrowpdown)}
>
<FaRegUserCircle className="text-3xl" />
</button>
                                    <div
                                        className={`${profileDrowpdown ? "block" : "hidden"
                                            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                                    >
                                        <ul className="bg-dark-soft lg:bg-[#0A0330] text-center flex flex-col shadow-lg rounded-lg overflow-hidden z-50">
                                            {userState?.userInfo?.admin && (
                                                <button
                                                    onClick={() => navigate("/admin")}
                                                    type="button"
                                                    className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                                                >
                                                    Panel Administrador
                                                </button>
                                            )}

                                            <button
                                                onClick={() => navigate("/profile")}
                                                type="button"
                                                className="hover:bg-[#fa5564] hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                                            >
                                                Perfil
                                            </button>
                                            <button
                                                onClick={() => navigate("/userDashboard")}
                                                type="button"
                                                className="hover:bg-[#fa5564] hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                                            >
                                                Panel de Usuario
                                            </button>
                                            <button
                                                onClick={logoutHandler}
                                                type="button"
                                                className="hover:bg-[#fa5564] hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                                            >
                                                Cerrar Sesión
                                            </button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="flex gap-x-1 items-center mt-5 lg:mt-0 bg-[#fa5564] px-6 py-2 rounded-full text-white font-semibold hover:bg-white hover:text-[#fa5564] transition-all duration-300"
                        >
                            Ingresar
                        </button>
                    )}
                </div>
            </header>
        </section>
    );
};

export default Header;
