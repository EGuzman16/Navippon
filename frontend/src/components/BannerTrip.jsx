import React from 'react';
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const BannerTrip = () => {
    const tripInfo = {
        title: "Viaje a Japón",
        dates: "05 Octubre al 15 Octubre 2024",
        backgroundImage: "https://media.iatiseguros.com/wp-content/uploads/2019/09/04012030/es-seguro-viajar-japon-3.jpg"
    };

    return (
        <div className=' p-4 md:p-6'>
            <div className="flex rounded-3xl bg-cover bg-center relative" style={{ backgroundImage: `url(${tripInfo.backgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="flex-1 p-4 text-white relative z-10 sm:flex-col sm:items-start">
                    <h4 className="text-xl font-bold">{tripInfo.title}</h4>
                    <span>{tripInfo.dates}</span>
                    <div className="flex flex-col items-start mt-2">
                        <div className="flex items-center mb-2">
                            <CiEdit className="mr-2" />
                            <a href="#" className="text-white no-underline">Editar Viaje</a>
                        </div>
                        <div className="flex items-center">
                            <FaRegTrashAlt className="mr-2" />
                            <a href="#" className="text-white no-underline">Eliminar</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center relative z-10">
                    <div className="relative h-full flex items-center">
                        <a href="#" className="w-40 h-full bg-[#FF4A5A] rounded-l-full flex flex-col items-center justify-center text-white no-underline">
                            <FaRegEye className="mb-2 text-2xl" />
                            <span>Ver Itinerario</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTrip;