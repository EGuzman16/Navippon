import React, { useState } from 'react';
import { FaHotel, FaCapsules, FaBuilding, FaHome, FaWifi, FaSwimmer, FaParking, FaDumbbell, FaUtensils, FaWheelchair, FaDog, FaChild, FaHeart, FaBriefcase, FaHiking, FaMountain } from 'react-icons/fa';
import { MdOutlineSpa, MdFreeBreakfast, MdAirportShuttle } from 'react-icons/md';
import { GiBed } from 'react-icons/gi';

const accommodations = [
    { icon: <FaHotel />, label: "Hoteles de lujo" },
    { icon: <MdOutlineSpa />, label: "Ryokan (tradicional)" },
    { icon: <FaCapsules />, label: "Hoteles cápsula" },
    { icon: <FaBuilding />, label: "Hoteles de negocios" },
    { icon: <FaHome />, label: "Apartamentos" },
    { icon: <GiBed />, label: "Hostales" }
];

const services = [
    { icon: <FaWifi />, label: "Wi-Fi gratis" },
    { icon: <MdFreeBreakfast />, label: "Desayuno incluido" },
    { icon: <FaParking />, label: "Aparcamiento gratuito" },
    { icon: <MdAirportShuttle />, label: "Transporte al aeropuerto" },
    { icon: <FaSwimmer />, label: "Piscina" },
    { icon: <FaDumbbell />, label: "Gimnasio" },
    { icon: <FaUtensils />, label: "Restaurante en el hotel" },
    { icon: <FaWheelchair />, label: "Accesible" },
    { icon: <FaDog />, label: "Admite mascotas" }
];

const typeTrip = [
    { icon: <FaChild />, label: "Familiar" },
    { icon: <FaHeart />, label: "Luna de miel" },
    { icon: <FaBriefcase />, label: "De negocios" },
    { icon: <FaHiking />, label: "Amigable para mochileros" },
    { icon: <FaMountain />, label: "Para aventureros" }
];

const HotelFilter = () => {
    const [showAllAccommodations, setShowAllAccommodations] = useState(false);
    const [showAllServices, setShowAllServices] = useState(false);
    const [showAllTypeTrip, setShowAllTypeTrip] = useState(false);

    const handleShowMoreAccommodations = () => {
        setShowAllAccommodations(!showAllAccommodations);
    };

    const handleShowMoreServices = () => {
        setShowAllServices(!showAllServices);
    };

    const handleShowMoreTypeTrip = () => {
        setShowAllTypeTrip(!showAllTypeTrip);
    };

    return (
        <div className="text-black">
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Alojamiento</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {accommodations.slice(0, showAllAccommodations ? accommodations.length : 5).map((accommodation, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <div className="flex ml-2 items-center">
                                <span className="text-[#FF4A5A]">{accommodation.icon}</span>
                                <span className="ml-2">{accommodation.label}</span>
                            </div>
                        </label>
                    ))}
                    <button onClick={handleShowMoreAccommodations} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAllAccommodations ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Servicios</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {services.slice(0, showAllServices ? services.length : 5).map((service, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <div className="flex ml-2 items-center">
                                <span className="text-[#FF4A5A]">{service.icon}</span>
                                <span className="ml-2">{service.label}</span>
                            </div>
                        </label>
                    ))}
                    <button onClick={handleShowMoreServices} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAllServices ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Tipo de viaje</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {typeTrip.slice(0, showAllTypeTrip ? typeTrip.length : 5).map((trip, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <div className="flex ml-2 items-center">
                                <span className="text-[#FF4A5A]">{trip.icon}</span>
                                <span className="ml-2">{trip.label}</span>
                            </div>
                        </label>
                    ))}
                    <button onClick={handleShowMoreTypeTrip} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAllTypeTrip ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelFilter;