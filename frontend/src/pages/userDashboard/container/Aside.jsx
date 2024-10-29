import React from 'react';
import { FaPlane, FaHeart, FaBlog, FaGrinStars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const userInfo = {
    avatar: 'https://cdn.retouchme.com/servcat/iWO6UQhGUHJIqTRBJWxJVzCrfDEm3ZxThOj4wIrN.jpg',
    name: 'Nombre del Usuario',
};

const Aside = ({ closeAside }) => { 
    const openEditProfileModal = () => {
        alert('Abrir modal de editar perfil');
    };

    return (
        <div className='bg-[#e1e9ed] w-full p-4'>
            <div className='flex flex-col items-center'>
                <img 
                    src={userInfo.avatar} 
                    alt='Avatar del usuario' 
                    className='w-48 h-48 rounded-full object-cover' 
                />
                <h2 className='text-[#1A1A1A] text-3xl text-center mt-4'>{userInfo.name}</h2>
                <button 
                    className='text-[#FF4A5A] mt-2' 
                    onClick={openEditProfileModal}
                >
                    Editar perfil
                </button>
            </div>
            <div className='mt-6 pl-6'>
                <h3 className='text-[#0A0330] mb-3 text-2xl'>Navega por:</h3>
                <Link to='/userDashboard/mytrips' className='text-[#0A0330] mt-2 flex items-center hover:text-[#FF4A5A]' onClick={closeAside}>
                    <FaPlane className='mr-2' /> Mis viajes
                </Link>
                <Link to='/userDashboard/myfavorites' className='text-[#0A0330] mt-2 flex items-center hover:text-[#FF4A5A]' onClick={closeAside}>
                    <FaHeart className='mr-2' /> Mis Favoritos
                </Link>
                <Link to='/userDashboard/myblogs' className='text-[#0A0330] mt-2 flex items-center hover:text-[#FF4A5A]' onClick={closeAside}>
                    <FaBlog className='mr-2' /> Mis Blogs
                </Link>
                <Link to='/userDashboard/myrecommendations' className='text-[#0A0330] mt-2 flex items-center hover:text-[#FF4A5A]' onClick={closeAside}>
                    <FaGrinStars className='mr-2' /> Mis Recomendaciones
                </Link>
            </div>
            <div className='mt-6 pl-6'>
                <h3 className='text-[#0A0330] text-2xl'>Configuración:</h3>
                <div className='mt-2'>
                    <span className='text-[#0A0330]'>Cambiar idioma</span>
                    <ul className='ml-4'>
                        <li>Español</li>
                        <li>Inglés</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Aside;