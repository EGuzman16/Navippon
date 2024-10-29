import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';  
import { images } from '../constants';

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
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => !curState);
    };

    return (
        <section className="w-full">
            <header className="w-full px-5 py-8 flex flex-col md:flex-row justify-between items-center bg-[#0A0330] text-white">
                <div className="flex items-center gap-x-3 mb-4 md:mb-0">
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
                        } md:flex flex-col md:flex-row gap-x-5 mt-8 md:mt-0`}
                >
                    <ul className="flex flex-col md:flex-row gap-x-5 items-center justify-center md:pr-24 w-full">
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    <div className="flex flex-col md:flex-row gap-x-2 mt-8 md:mt-0">
                        <Link to="/register" className="bg-white text-[#fa5564] px-6 py-3 rounded-full hover:bg-[#fa5564] hover:text-white mt-8 md:mt-0 md:ml-24">
                            Registro
                        </Link>
                        <Link to="/login" className="bg-[#fa5564] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#fa5564] mt-8 md:mt-0">
                            Ingreso
                        </Link>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;